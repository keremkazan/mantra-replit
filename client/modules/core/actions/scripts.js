import files from './files';

function getStdOutWithText(cur, text) {
  return {
    ...cur,
    items: [text, ...cur.items],
  };
}

function getEditorWithNextLine(cur) {
  return {
    ...cur,
    lineNo: cur.lineNo + 1,
  };
}

export default {
  run({ Meteor, LocalState }, id) {
    LocalState.set('isRunning', true);
    Meteor.call('scripts.run', id, (err, result) => {
      LocalState.set('isRunning', false);
      const cur = LocalState.get('stdOut');
      LocalState.set('stdOut', getStdOutWithText(cur, result));
    });
  },

  step({ Meteor, LocalState }, id) {
    LocalState.set('isStepping', true);
    Meteor.call('scripts.step', id, (err, result) => {
      LocalState.set('isStepping', false);
      const curEditor = LocalState.get('editor');
      LocalState.set('editor', getEditorWithNextLine(curEditor));
      const curStdout = LocalState.get('stdOut');
      LocalState.set('stdOut', getStdOutWithText(curStdout, result));
    });
  },

  clearStdout({ LocalState }) {
    LocalState.set('stdOut', {
      items: [],
    });
  },
}
