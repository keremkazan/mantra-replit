import { Meteor } from 'meteor/meteor';
import path from 'path';
import { exec } from 'child_process';
import Fiber from 'fibers';
import Future from 'fibers/future';

const runScript = '/Users/keremkazan/js/mantra-replit/scripts/run.py';

Meteor.methods({
  'scripts.run': (id) => {
    const fut = new Future();
    exec(`python ${runScript} ${id}`, function (err, stdout, stderr) {
      if (err) {
        throw new Error(err);
      }
      new Fiber(function() {
        fut.return(stdout);
      }).run();
    });
    return fut.wait();
  },
});
