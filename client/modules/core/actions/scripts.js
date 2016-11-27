function getStdOutWithText(cur, text) {
  return {
    ...cur,
    text: `${cur.text} ${text}\n\n*-------*\n\n`,
  };
}

function getStdOutWithNextLine(cur) {
  return {
    ...cur,
    lineNo: cur.lineNo + 1,
  };
}

export default {
  run({ Meteor, LocalState }, id) {
    LocalState.set('isRunning', true);
    setTimeout(() => {
      LocalState.set('isRunning', false);
      const cur = LocalState.get('stdOut');
      LocalState.set('stdOut', getStdOutWithText(cur, 'keremkazan'));
    }, 100);
  },

  step({ Meteor, LocalState }, id) {
    LocalState.set('isStepping', true);
    setTimeout(() => {
      LocalState.set('isStepping', false);
      const cur = LocalState.get('stdOut');
      LocalState.set('stdOut', getStdOutWithNextLine(cur));
    }, 100);
  },

  clearStdout({ LocalState }, id) {
    LocalState.set('stdOut', '');
  },
}
