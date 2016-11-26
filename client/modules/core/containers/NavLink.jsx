import React from 'react';
import { useDeps, composeAll, composeWithTracker } from 'mantra-core';

const NavLink = ({ isActive, href, children }) => {
  const className = isActive ? 'active' : '';
  return (
    <li className={className}>
      <a href={href}>
        {children}
      </a>
    </li>
  );
}


export const composer = ({ name, routes, current }, onData) => {
  const isActive = name === current;
  onData(null, {
    isActive,
    href: routes[name].path,
  });
};

export const depsMapper = (context, actions) => {
  const { LocalState } = context;
  return {
    routes: FlowRouter._routesMap,
    current: FlowRouter.getRouteName(),
  };
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NavLink);
