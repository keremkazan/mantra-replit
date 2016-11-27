import React, { Component } from 'react';

export default class ReactiveButton extends Component {
  render() {
    const {
      isActive,
      isDisabled,
      whenActive,
      whenInactive,
      whenDisabled,
      onClick,
      commonClassName,
    } = this.props;
    const buttonParts = isActive ?
      whenActive : isDisabled ?
      whenDisabled : whenInactive;
    const { className, content } = buttonParts;
    const finalOnClick = isActive ? () => {} : onClick;
    return (
      <button
        className={`${commonClassName} ${className}`}
        onClick={finalOnClick}
      >{content}
      </button>
    );
  }
}
