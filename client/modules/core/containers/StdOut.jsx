import React from 'react';
import { useDeps, composeAll, composeWithTracker } from 'mantra-core';

const StdOut = ({ items, clear }) => {

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
        {items.map((item, index) => {
          const {stdout, stderr} = item;
          if (stderr) {
            return (
              <pre className="debug-err" key={index}>{stderr}</pre>
            );
          } else {
            return (
              <pre className="debug-out" key={index}>{stdout}</pre>
            );
          }
        })}
      </div>
    </div>
  );
}

export const composer = ({ stdOut, editor }, onData) => {
  const { items } = stdOut();
  const { lineNo } = editor();
  if (Meteor.subscribe('files.public').ready()) {
    onData(null, {
      items,
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
    editor: () => {
      return LocalState.get('editor');
    },
    clear: clearStdout,
  };
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StdOut);
