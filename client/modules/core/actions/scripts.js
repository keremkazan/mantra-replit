export default {
  run({ Meteor, LocalState }, id) {
    LocalState.set('isRunning', true);
    console.log('running script!', id)
    setTimeout(() => {
      LocalState.set('isRunning', false);
    }, 2000);
  },

  step({ Meteor, LocalState }, id) {
    LocalState.set('isStepping', true);
    console.log('stepping script!', id)
    setTimeout(() => {
      LocalState.set('isStepping', false);
    }, 2000);
  },
}
