import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';
/**
 * Show the list of the todos.
 *
 * @param {*} props
 * @returns
 */
const TodoList = props => {
  const todoList = props.todoList;

  return (
    <ul className={todoList && todoList.length > 0 ? '' : 'empty'}>
      {todoList && todoList.length > 0 ? (
        todoList.map(todo => (
          <Todo
            todo={todo}
            key={todo.id}
            toggleEditOption={props.toggleEditOption}
            onEditTodo={props.onEditTodo}
            deleteTodo={props.deleteTodo}
            toggleCompleted={props.toggleCompleted}
          />
        ))
      ) : (
        <div className="no-items"> {`No Items Found`}</div>
      )}
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  toggleEditOption: PropTypes.func,
  onEditTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  toggleCompleted: PropTypes.func
};

export default TodoList;
