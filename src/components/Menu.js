import React from 'react';
import PropTypes from 'prop-types';

import { TODO_STATUS } from '../constants/common';

/**
 * @param {object} props
 */
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

Menu.propTypes = {
  viewState: PropTypes.string,
  setShowState: PropTypes.func
};

export default Menu;
