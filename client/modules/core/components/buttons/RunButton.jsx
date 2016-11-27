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
        content: <span><Cog /> Running </span>
      }}
      whenDisabled={{
        className: 'btn btn-success disabled',
        content: (
          <span>
            <span className="glyphicon glyphicon-play" aria-hidden="true">
            </span> Run
          </span>
        ),
      }}
      whenInactive={{
        className: 'btn btn-success',
        content: (
          <span>
            <span className="glyphicon glyphicon-play" aria-hidden="true">
            </span> Run
          </span>
        ),
      }}
      onClick={onClick}
      commonClassName={commonClassName}
    />
  );
}
