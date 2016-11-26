import NavLink from '../components/NavLink';
import { useDeps, composeAll, composeWithTracker } from 'mantra-core';

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
