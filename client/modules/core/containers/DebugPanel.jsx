import { useDeps, composeAll, composeWithTracker } from 'mantra-core';
import React, { Component } from 'react';
import RunButton from '../components/buttons/RunButton';
import StepButton from '../components/buttons/StepButton';

class DebugPanel extends Component {

  getRunButtonStatus() {
    const { editor, isRunning, isStepping } = this.props;
    const { status } = editor;
    if (isRunning) {
      return 'active';
    } else if (status === 'save' || status === 'saving' || isStepping) {
      return 'disabled';
    } else {
      return 'inactive';
    }
  }

  getStepButtonStatus() {
    const { editor, isStepping, isRunning } = this.props;
    const { status } = editor;
    if (isStepping) {
      return 'active';
    } else if (status === 'save' || status === 'saving' || isRunning) {
      return 'disabled';
    } else {
      return 'inactive';
    }
  }

  render() {
    const {
      file,
      editor,
      runScript,
      isRunning,
      stepScript,
      isStepping,
    } = this.props;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Debug Panel</h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Args"
                ref="args"
              />
            </div>
          </form>
          <div className="debug-btns">
            <RunButton
              onClick={() => {
                runScript(file._id);
              }}
              status={this.getRunButtonStatus()}
              commonClassName='debug-btn'
            />
            <StepButton
              onClick={() => {
                stepScript(file._id);
              }}
              status={this.getStepButtonStatus()}
              commonClassName='debug-btn'
            />
            <button
              className="btn btn-default debug-btn"
            > <span className="glyphicon glyphicon-refresh" aria-hidden="true">
              </span> Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export const composer = ({ files, id, isRunning, isStepping, editor }, onData) => {
  if (Meteor.subscribe('files.public').ready()) {
    onData(null, {
      file: files.findOne(id),
      isRunning: isRunning(),
      isStepping: isStepping(),
      editor: editor(),
    });
  }
};

export const depsMapper = (context, actions) => {
  const { Collections, LocalState } = context;
  const { scripts } = actions;
  return {
    files: Collections.Files,
    runScript: scripts.run,
    isRunning: () => {
      return LocalState.get('isRunning');
    },
    stepScript: scripts.step,
    isStepping: () => {
      return LocalState.get('isStepping');
    },
    editor: () => {
      return LocalState.get('editor');
    }
  };
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(DebugPanel);
