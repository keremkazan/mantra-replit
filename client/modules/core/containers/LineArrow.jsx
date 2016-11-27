import React from 'react';
import { useDeps, composeAll, composeWithTracker } from 'mantra-core';
import _ from 'lodash';

const LineArrow = ({ lineNo }) => {
  const lines = _.times((lineNo - 1), String);
  return (
    <div className="pull-left line-arrow-gutter">
      {lines.map((line) => {
        return (
          <div key={line} className="debug-line-block">&nbsp;</div>
        );
      })}
      <span className="debug-line-arrow">
        <span className="glyphicon glyphicon-arrow-right" aria-hidden="true">
        </span>
      </span>
    </div>
  );
}

export const composer = ({ stdOut }, onData) => {
  const { lineNo } = stdOut();
  console.log(stdOut());
  if (Meteor.subscribe('files.public').ready()) {
    onData(null, {
      lineNo,
    });
  }
};

export const depsMapper = (context, actions) => {
  const { LocalState } = context;
  const { clearStdout } = actions.scripts;
  return {
    stdOut: () => {
      return LocalState.get('stdOut');
    },
    clear: clearStdout,
  };
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(LineArrow);
