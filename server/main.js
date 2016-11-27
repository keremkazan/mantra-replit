import { Meteor } from 'meteor/meteor';
import Collections from '../imports/collections';
import scripts from '../imports/scripts';

const { Files } = Collections;

Meteor.startup(() => {
  Meteor.publish('files.public', () => {
    return Files.find({});
  });
});
