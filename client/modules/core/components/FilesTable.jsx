import React, { Component } from 'react';
import FilesTableRow from '../containers/FilesTableRow';

export default class FilesTable extends Component {
  render() {
    const { files } = this.props;
    return (
      <table className="table table-striped">
        <tbody>
          {files.map((file) => (
            <FilesTableRow
              key={file._id}
              file={file}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
