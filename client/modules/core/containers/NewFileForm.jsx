import NewFileForm from '../components/NewFileForm';
import { useDeps, composeAll, composeWithTracker } from 'mantra-core';

export const depsMapper = (context, actions) => {
  const { files } = actions;
  return {
    createFile: files.create,
  };
};

export default composeAll(
  useDeps(depsMapper)
)(NewFileForm);
