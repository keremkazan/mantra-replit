import { useDeps, composeAll, composeWithTracker } from 'mantra-core';
import React, { Component } from 'react';
import RunButton from '../components/buttons/RunButton';
import StepButton from '../components/buttons/StepButton';

class DebugPanel extends Component {
  render() {
    const { file, runScript, isRunning, stepScript, isStepping } = this.props;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Debug Panel</h3>
        </div>
        <div className="panel-body">
          <RunButton
            fileId={file._id}
            onClick={runScript}
            isActive={isRunning}
            commonClassName='debug-btn'
          />
          <StepButton
            fileId={file._id}
            onClick={stepScript}
            isActive={isStepping}
            commonClassName='debug-btn'
          />
        </div>
      </div>
    );
  }
}

export const composer = ({ files, id, isRunning, isStepping }, onData) => {
  if (Meteor.subscribe('files.public').ready()) {
    onData(null, {
      file: files.findOne(id),
      isRunning: isRunning(),
      isStepping: isStepping(),
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
  };
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(DebugPanel);
