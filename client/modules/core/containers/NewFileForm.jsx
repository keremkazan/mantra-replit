import React, { Component } from 'react';
import { useDeps, composeAll, composeWithTracker } from 'mantra-core';

class NewFileForm extends Component {
  createNewFile(event) {
    event.preventDefault();
    const filenameInput = this.refs.filename;
    const { createFile } = this.props;
    createFile(filenameInput.value);
    filenameInput.value = '';
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Create New File</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.createNewFile.bind(this)} >
            <div className="input-group">
                <input ref="filename" className="form-control" placeholder="Filename" />
                <span className="input-group-btn">
                  <input
                    className="btn btn-success"
                    value="Create"
                    type="submit"
                  />
                </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export const depsMapper = (context, actions) => {
  const { files } = actions;
  return {
    createFile: files.create,
  };
};

export default composeAll(
  useDeps(depsMapper)
)(NewFileForm);
