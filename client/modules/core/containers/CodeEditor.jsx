import { useDeps, composeAll, composeWithTracker } from 'mantra-core';
import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/python/python';
import SaveButton from '../components/buttons/SaveButton';

class CodeEditor extends Component {
  getSaveButtonStatus() {
    const { editor } = this.props;
    const { status } = editor;
    if (status === 'saving') {
      return 'active';
    } else if (status === 'saved') {
      return 'disabled';
    } else {
      return 'inactive';
    }
  }

  componentDidUpdate() {
    console.log('updated!');
  }

  render() {
    const { file, updateFile, onEditorUpdate } = this.props;
    const { _id, name, code } = file;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="clearfix">
            <h3 className="panel-title pull-left">{ name }</h3>
            <span className="pull-right">
              <SaveButton
                onClick={() => {
                  updateFile(file._id, 'keremkazan');
                }}
                status={this.getSaveButtonStatus()}
                commonClassName='debug-btn'
              />
            </span>
          </div>
        </div>

        <div className="panel-body">
          <div className="clearfix">
            <CodeMirror
              defaultValue={code}
              options={{
                mode: 'python',
                lineNumbers: true,
              }}
              onChange={(value) => {
                onEditorUpdate();
                updateFile(file._id, value);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export const composer = ({ files, editor, id }, onData) => {
  if (Meteor.subscribe('files.public').ready()) {
    onData(null, {
      file: files.findOne(id),
      editor: editor(),
    });
  }
};

export const depsMapper = (context, actions) => {
  const { Collections, LocalState } = context;
  return {
    files: Collections.Files,
    updateFile: actions.files.updateFile,
    onEditorUpdate: actions.files.onEditorUpdate,
    editor: () => {
      return LocalState.get('editor');
    },
  };
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CodeEditor);
