import { Meteor } from 'meteor/meteor';
import Collections from './collections';
import path from 'path';
import { exec } from 'child_process';
import Fiber from 'fibers';
import Future from 'fibers/future';

Meteor.methods({
  'scripts.run': (id) => {
    const fut = new Future();
    const scriptPath = path.join(
      process.cwd(),
      '../',
      '../',
      '../',
      '../',
      '../',
      'scripts',
      'run.py'
    );
    exec(`python ${scriptPath} ${id}`, function (err, stdout, stderr) {
      new Fiber(function() {
        fut.return({
          stdout,
          stderr,
        });
      }).run();
    });
    return fut.wait();
  },

  'scripts.step': (id) => {
    // const fut = new Future();
    // exec(`python scripts/step.py`, function (err, stdout, stderr) {
    //   new Fiber(function() {
    //     fut.return({
    //       stdout,
    //       stderr,
    //     });
    //   }).run();
    // });
    // return fut.wait();
    return {
      stderr: 'Stepping is not implemented yet!',
    };
  },
});
