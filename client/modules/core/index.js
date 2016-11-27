import actions from './actions';
import routes from './routes';

export default {
  routes,
  actions,
  load(context) {
    const { LocalState } = context;
    LocalState.set('isRunning', false);
    LocalState.set('stdOut', {
      items: [],
    });
    LocalState.set('editor', {
      lineNo: 1,
    });
  }
};
