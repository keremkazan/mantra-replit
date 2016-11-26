import React, { Component } from 'react';

export default class FilesTableRow extends Component {

  render() {
    const { removeFile, file } = this.props;
    const { _id, name } = file;
    return (
      <tr>
        <td>
          <a href={`/file/${_id}`}>{name}</a>
        </td>
        <td>
          <a
            className="btn btn-danger"
            onClick={() => { removeFile(_id); }}
          >
            Remove
          </a>
        </td>
      </tr>
    );
  }
}
