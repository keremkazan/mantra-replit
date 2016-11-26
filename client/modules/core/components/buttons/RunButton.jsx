import React from 'react';
import ReactiveButton from '../ReactiveButton';
import Cog from '../Cog';

export default ({ fileId, onClick, isActive, commonClassName }) => {
  return (
    <ReactiveButton
      isActive={isActive}
      whenActive={{
        className: 'btn btn-success disabled',
        content: <span><Cog /> Running </span>
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
      onClick={() => {
        onClick(fileId);
      }}
      commonClassName={commonClassName}
    />
  );
}
