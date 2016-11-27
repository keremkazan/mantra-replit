export default {
  create({ Meteor, FlowRouter }, name) {
    Meteor.call('files.insert', name, (err, result) => {
      FlowRouter.go(`/file/${result}`);
    });
  },
  remove({ Meteor }, id) {
    return Meteor.call('files.remove', id);
  },
  updateFile({ Meteor, LocalState, Libs }, id, code) {
    const prevEditor = LocalState.get('editor');
    if (!prevEditor['isSaving']) {
      LocalState.set('editor', {
        ...prevEditor,
        status: 'saving',
      });
    }

    Libs.delayWithReset('files.update', 1000, () => {
      Meteor.call('files.update', id, code);
      LocalState.set('editor', {
        ...prevEditor,
        status: 'saved',
      });
    });
    // return Meteor.call('files.remove', id);
  },
  onEditorUpdate({ LocalState }) {
    LocalState.set('editor', {
      ...LocalState.get('editor'),
      status: 'save',
    });
  },
}
