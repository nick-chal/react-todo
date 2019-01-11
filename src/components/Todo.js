import React from 'react';

const Todo = props => (
  <li
    onClick={() => props.toggleCompleted(props.todo.id)}
    className={props.todo.completed ? 'completed-todo' : null}
  >
    <span> {props.todo.text}</span>
    <i
      className="fa fa-trash delete"
      onClick={() => props.deleteTodo(props.todo.id)}
    />
    <i className="fa fa-pencil" />
  </li>
);

export default Todo;
