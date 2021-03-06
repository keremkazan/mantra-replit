import React from 'react';
import ReactiveButton from '../ReactiveButton';
import Cog from '../Cog';

export default ({ onClick, status, commonClassName }) => {
  return (
    <ReactiveButton
      isActive={status === 'active'}
      isDisabled={status === 'disabled'}
      whenActive={{
        className: 'btn btn-default disabled',
        content: <span><Cog /> Stepping </span>
      }}
      whenDisabled={{
        className: 'btn btn-default disabled',
        content: (
          <span>
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true">
            </span> Step
          </span>
        ),
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
      onClick={onClick}
      commonClassName={commonClassName}
    />
  );
}
