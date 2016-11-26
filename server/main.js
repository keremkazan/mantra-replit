import { Meteor } from 'meteor/meteor';
import Collections from '../imports/collections';

const { Files } = Collections;

Meteor.startup(() => {
  Meteor.publish('files.public', () => {
    return Files.find({});
  });
});
