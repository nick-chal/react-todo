import React from 'react';

const Menu = props => {
  return (
    <div className="nav-button">
      <button
        className={props.viewType === 'all' ? 'active' : null}
        onClick={() => props.setShowState('all')}
      >
        Show All
      </button>
      <button
        className={props.viewType === 'remaining' ? 'active' : null}
        onClick={() => props.setShowState('remaining')}
      >
        Remaining
      </button>
      <button
        className={props.viewType === 'completed' ? 'active' : null}
        onClick={() => props.setShowState('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default Menu;
