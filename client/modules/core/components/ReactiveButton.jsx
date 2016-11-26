import React, { Component } from 'react';

export default class ReactiveButton extends Component {
  render() {
    const {
      isActive,
      whenActive,
      whenInactive,
      onClick,
      commonClassName,
    } = this.props;
    const buttonParts = isActive ? whenActive : whenInactive;
    const { className, content } = buttonParts;
    return (
      <a className={`${commonClassName} ${className}`} onClick={onClick}>
        {content}
      </a>
    );
  }
}
