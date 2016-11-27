import React from 'react';
import ReactiveButton from '../ReactiveButton';
import Cog from '../Cog';

export default ({ fileId, onClick, isActive, commonClassName }) => {
  return (
    <ReactiveButton
      isActive={isActive}
      whenActive={{
        className: 'btn btn-default disabled',
        content: <span><Cog /> Stepping </span>
      }}
      whenInactive={{
        className: 'btn btn-default',
        content: (
          <span>
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true">
            </span> Step
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
