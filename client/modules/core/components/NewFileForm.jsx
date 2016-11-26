import React, { Component } from 'react';

export default class NewFileForm extends Component {
  createNewFile(event) {
    event.preventDefault();
    const filenameInput = this.refs.filename;
    const { createFile } = this.props;
    createFile();
    filenameInput.value = '';
  }

  render() {
    return (
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
    );
  }
};
