import React from 'react';

const Menu = props => {
  console.log(props);
  return (
    <div>
      <button
        className={props.viewType === 'all' ? 'active' : null}
        onClick={() => props.toggleShowState('all')}
      >
        Show All
      </button>
      <button
        className={props.viewType === 'remaining' ? 'active' : null}
        onClick={() => props.toggleShowState('remaining')}
      >
        Remaining
      </button>
      <button
        className={props.viewType === 'completed' ? 'active' : null}
        onClick={() => props.toggleShowState('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default Menu;
