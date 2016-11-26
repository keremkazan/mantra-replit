export default {
  create({ Meteor, FlowRouter }, name) {
    Meteor.call('files.insert', name, (err, result) => {
      FlowRouter.go(`/file/${result}`);
    });
  },
  remove({ Meteor }, id) {
    return Meteor.call('files.remove', id);
  },
}
