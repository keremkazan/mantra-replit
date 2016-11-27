import files from './files';

function getStdOutWithText(cur, text) {
  return {
    ...cur,
    items: [...cur.items, text],
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
    setTimeout(() => {
      LocalState.set('isStepping', false);
      const cur = LocalState.get('editor');
      LocalState.set('editor', getEditorWithNextLine(cur));
    }, 100);
  },

  clearStdout({ LocalState }) {
    LocalState.set('stdOut', {
      items: [],
    });
  },
}
