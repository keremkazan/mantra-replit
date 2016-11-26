export default {
  create({ Meteor }, name) {
    return Meteor.call('files.insert', name);
  },
}
