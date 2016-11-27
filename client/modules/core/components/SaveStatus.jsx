import React, { Component } from 'react';
import SaveButton from './buttons/SaveButton';
import Cog from './Cog';

export default class SaveStatus extends Component {
  renderSaved() {
    return (
      <span>
        <span className="glyphicon glyphicon-ok" aria-hidden="true">
        </span> Saved
      </span>
    );
  }

  render() {
    const { status, onSave } = this.props;
    const stats = {
      saving: (
        <SaveButton
          onClick={onSave}
          isActive={true}
          commonClassName='debug-btn'
        />
      ),
      saved: (
        <button className="btn btn-default disabled debug-btn">
          <span className="glyphicon glyphicon-ok" aria-hidden="true">
          </span> Saved
        </button>
      ),
      save: (
        <SaveButton
          onClick={onSave}
          isActive={false}
          commonClassName='debug-btn'
        />
      ),
    };

    return (
      <div className="debug-save-stat">
        {stats[status]}
      </div>
    );
  }
}
