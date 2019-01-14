import React from 'react';

import { TODO_STATUS } from '../constants/common';

const Menu = props => {
  return (
    <div className="nav-button">
      <button
        className={props.viewState === TODO_STATUS.ALL ? 'active' : null}
        onClick={() => props.setShowState(TODO_STATUS.ALL)}
      >
        Show All
      </button>
      <button
        className={props.viewState === TODO_STATUS.REMAINING ? 'active' : null}
        onClick={() => props.setShowState(TODO_STATUS.REMAINING)}
      >
        Remaining
      </button>
      <button
        className={props.viewState === TODO_STATUS.COMPLETED ? 'active' : null}
        onClick={() => props.setShowState(TODO_STATUS.COMPLETED)}
      >
        Completed
      </button>
    </div>
  );
};

export default Menu;
