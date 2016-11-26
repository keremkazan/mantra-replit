import FilesTable from '../components/FilesTable';
import { useDeps, composeAll, composeWithTracker } from 'mantra-core';

export const composer = ({ files }, onData) => {
  if (Meteor.subscribe('files.public').ready()) {
    onData(null, {
      files: files.find().fetch(),
    });
  }
};

export const depsMapper = (context, actions) => {
  const { Collections, Meteor } = context;
  return {
    files: Collections.Files,
  };
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FilesTable);
