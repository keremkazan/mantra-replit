import React from 'react';
import { useDeps, composeAll, composeWithTracker } from 'mantra-core';

const StdOut = ({ text, clear }) => {

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <div className="clearfix">
          <h3 className="panel-title pull-left">Std Out</h3>
          <button
            className="btn btn-default pull-right"
            onClick={clear}
          >
            <span className="glyphicon glyphicon-erase" aria-hidden="true">
            </span> Clear
          </button>
        </div>
      </div>
      <div className="panel-body">
        <pre>
          {text}
        </pre>
      </div>
    </div>
  );
}

export const composer = ({ stdOut }, onData) => {
  const { lineNo, text } = stdOut();
  if (Meteor.subscribe('files.public').ready()) {
    onData(null, {
      text,
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
)(StdOut);
