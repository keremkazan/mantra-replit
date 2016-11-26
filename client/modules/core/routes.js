import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './components/MainLayout';
import FilesPage from './components/FilesPage';

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<FilesPage />)
      });
    }
  });
}
