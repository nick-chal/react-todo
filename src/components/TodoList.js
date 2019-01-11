import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    const renderTodo = this.props.generateTodoItems();

    return (
      <ul className={!renderTodo.length ? 'empty' : ''}>
        {renderTodo.length ? (
          renderTodo.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleCompleted={this.props.toggleCompleted}
              deleteTodo={this.props.deleteTodo}
            />
          ))
        ) : (
          <div className="no-items">'No Items Found'</div>
        )}
      </ul>
    );
  }
}

export default TodoList;
