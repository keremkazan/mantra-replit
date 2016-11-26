import React, { Component } from 'react';

export default class ReactiveButton extends Component {
  renderActive() {
    const { whenActive } = this.props;
    return (
      <div>active</div>
    );
  }

  renderInActive() {
    const { whenInactive } = this.props;
    return (
      <div>inactive</div>
    );
  }

  render() {
    const { isActive } = this.props;
    return isActive ?
      this.renderActive() :
      this.renderInActive();
  }
}
