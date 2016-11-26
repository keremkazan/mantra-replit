import FilesTableRow from '../components/FilesTableRow';
import { useDeps, composeAll, composeWithTracker } from 'mantra-core';

export const depsMapper = (context, actions) => {
  const { files } = actions;
  return {
    removeFile: files.remove,
  };
};

export default composeAll(
  useDeps(depsMapper)
)(FilesTableRow);
