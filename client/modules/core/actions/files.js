export default {
  create({ Meteor }, name) {
    return Meteor.call('files.insert', name);
  },
  remove({ Meteor }, id) {
    return Meteor.call('files.remove', id);
  },
}
