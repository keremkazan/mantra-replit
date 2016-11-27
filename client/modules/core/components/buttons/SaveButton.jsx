import React from 'react';
import ReactiveButton from '../ReactiveButton';
import Cog from '../Cog';

export default ({ onClick, status, commonClassName }) => {
  return (
    <ReactiveButton
      isActive={status === 'active'}
      isDisabled={status === 'disabled'}
      whenActive={{
        className: 'btn btn-success disabled',
        content: <span><Cog /> Saving </span>
      }}
      whenDisabled={{
        className: 'btn btn-default disabled',
        content: (
          <span>
            <span className="glyphicon glyphicon-ok" aria-hidden="true">
            </span> Saved
          </span>
        ),
      }}
      whenInactive={{
        className: 'btn btn-success',
        content: (
          <span>
            <span className="glyphicon glyphicon-floppy-disk" aria-hidden="true">
            </span> Save
          </span>
        ),
      }}
      onClick={onClick}
      commonClassName={commonClassName}
    />
  );
}
