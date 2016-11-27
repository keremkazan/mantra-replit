import React, { Component } from 'react';
import { useDeps, composeAll, composeWithTracker } from 'mantra-core';

class FilesTableRow extends Component {
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
          <span className="glyphicon glyphicon-trash" aria-hidden="true">
          </span> Remove
          </a>
        </td>
      </tr>
    );
  }
}

<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
export const depsMapper = (context, actions) => {
  const { files } = actions;
  return {
    removeFile: files.remove,
  };
};

export default composeAll(
  useDeps(depsMapper)
)(FilesTableRow);
