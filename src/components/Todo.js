import React from 'react';

export default props => (
  <li
    onClick={() => props.toggleCompleted(props.todo.id)}
    className={props.todo.completed ? 'completed-todo' : null}
  >
    {props.todo.text}
  </li>
);
