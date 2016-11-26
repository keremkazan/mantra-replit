import React from 'react';
import NewFileForm from '../containers/NewFileForm';
import FilesTable from '../containers/FilesTable';
import CodeEditor from '../containers/CodeEditor';
import DebugPanel from '../containers/DebugPanel';
import StdOut from '../containers/StdOut';

export default ({ id }) => {
  return (
    <div className="row">
      <div className="col-md-8">
        <CodeEditor id={id} />
        <StdOut />
      </div>
      <div className="col-md-4">
        <DebugPanel id={id} />
        <FilesTable />
      </div>
    </div>
  );
};
