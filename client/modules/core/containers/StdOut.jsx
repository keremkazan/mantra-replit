import React from 'react';
import { useDeps, composeAll, composeWithTracker } from 'mantra-core';

const StdOut = ({ text }) => {
  console.log('here', text);
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Std Out</h3>
      </div>
      <div className="panel-body">
        {text}
      </div>
    </div>
  );
}

export const composer = ({ text }, onData) => {
  if (Meteor.subscribe('files.public').ready()) {
    onData(null, {
      text: text(),
    });
  }
};

export const depsMapper = (context, actions) => {
  const { LocalState } = context;
  return {
    text: () => {
      return LocalState.get('stdOut');
    },
  };
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StdOut);
