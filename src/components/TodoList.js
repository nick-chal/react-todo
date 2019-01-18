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
              todo={todo}
              key={todo.id}
              toggleEditOption={this.props.toggleEditOption}
              editTodo={this.props.editTodo}
              deleteTodo={this.props.deleteTodo}
              toggleCompleted={this.props.toggleCompleted}
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
