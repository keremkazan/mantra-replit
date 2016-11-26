import React from 'react';
import NewFileForm from '../containers/NewFileForm';
import FilesTable from '../containers/FilesTable';
import CodeEditor from '../containers/CodeEditor';

export default ({ id }) => {
  return (
    <div className="row">
      <div className="col-md-8">
        <CodeEditor id={id}/>
      </div>
      <div className="col-md-4">
        <FilesTable />
      </div>
    </div>
  );
};
