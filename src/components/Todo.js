import React from 'react';

import EditForm from './EditForm';

const Todo = props => (
  <li
    onClick={() => !props.todo.editing && props.toggleCompleted(props.todo.id)}
    className={props.todo.completed ? 'completed-todo' : null}
  >
    {props.todo.editing ? (
      <EditForm prevTodo={props.todo} onEditTodo={props.onEditTodo} />
    ) : (
      <span>{props.todo.text}</span>
    )}
    <i
      className="fa fa-trash delete"
      onClick={() => props.deleteTodo(props.todo.id)}
    />
    <i
      className="fa fa-pencil edit"
      onClick={e => {
        e.stopPropagation();
        props.toggleEditOption(props.todo.id);
      }}
    />
  </li>
);

export default Todo;
