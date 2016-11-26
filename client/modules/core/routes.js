import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './components/MainLayout';

const TemplateComp = () => {
  return (
    <div>
      placeholder
    </div>
  );
}

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<TemplateComp />)
      });
    }
  });

  FlowRouter.route('/kerem', {
    name: 'kerem',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<TemplateComp />)
      });
    }
  });
}
