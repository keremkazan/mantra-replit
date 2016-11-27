import actions from './actions';
import routes from './routes';

export default {
  routes,
  actions,
  load(context) {
    const { LocalState } = context;
    LocalState.set('isRunning', false);
    LocalState.set('stdOut', {
      text: '',
      lineNo: 1,
    });
  }
};
