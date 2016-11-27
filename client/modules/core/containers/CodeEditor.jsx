import { useDeps, composeAll, composeWithTracker } from 'mantra-core';
import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/python/python';
import LineArrow from './LineArrow';

class FilesTable extends Component {
  render() {
    const { file } = this.props;
    const { name } = file;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{ name }</h3>
        </div>
        <div className="panel-body">
          <div className="clearfix">
            {/* <LineArrow /> */}
            <CodeMirror
              options={{
                mode: 'python',
                lineNumbers: true,
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export const composer = ({ files, id }, onData) => {
  if (Meteor.subscribe('files.public').ready()) {
    onData(null, {
      file: files.findOne(id),
    });
  }
};

export const depsMapper = (context, actions) => {
  const { Collections, Meteor } = context;
  return {
    files: Collections.Files,
  };
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FilesTable);
