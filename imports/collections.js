import { Mongo } from 'meteor/mongo';

export const Files = new Mongo.Collection('files');

Meteor.methods({
  'files.insert'(filename) {
    return Files.insert({
      name: filename,
      code: '',
    });
  },

  'files.remove'(_id) {
    return Files.remove(_id);
  },

  'files.update'(_id, code) {
    return Files.update(
      _id, {
        $set: { code }
      }
    );
  }
});
