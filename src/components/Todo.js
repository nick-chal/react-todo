import React from 'react';
import PropTypes from 'prop-types';

import EditForm from './EditForm';

/**
 * Show individual todo along with the icons.
 *
 * @param {object} props
 */
const Todo = props => (
  <li
    onClick={() => !props.todo.editing && props.toggleCompleted(props.todo.id)}
    className={props.todo.completed ? 'completed-todo' : null}
  >
    {props.todo.editing ? (
      <EditForm prevTodo={props.todo} onEditTodo={props.onEditTodo} />
    ) : (
      <>
        <span>{props.todo.text}</span>
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
      </>
    )}
  </li>
);

Todo.propTypes = {
  todo: PropTypes.object,
  onEditTodo: PropTypes.func,
  toggleCompleted: PropTypes.func,
  deleteTodo: PropTypes.func,
  toggleEditOption: PropTypes.func
};

export default Todo;
