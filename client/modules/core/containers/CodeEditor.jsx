import { useDeps, composeAll, composeWithTracker } from 'mantra-core';
import React, { Component } from 'react';
import FilesTableRow from './FilesTableRow';

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
