import React from 'react';

export default ({ isActive, href, children }) => {
  const className = isActive ? 'active' : '';
  return (
    <li className={className}>
      <a href={href}>
        {children}
      </a>
    </li>
  );
}
