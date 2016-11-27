import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './components/MainLayout';
import AllFilesPage from './components/AllFilesPage';
import SingleFilePage from './components/SingleFilePage';

export default function (injectDeps, { FlowRouter, LocalState }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<AllFilesPage />)
      });
    }
  });

  FlowRouter.route('/file/:id', {
    name: 'file',
    action(params) {
      mount(MainLayoutCtx, {
        content: () => (<SingleFilePage id={params.id} />)
      });
    }
  });
}
