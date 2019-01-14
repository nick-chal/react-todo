import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    const renderTodo = this.props.itemsToShow;

    return (
      <ul className={renderTodo && renderTodo.length > 0 ? '' : 'empty'}>
        {renderTodo && renderTodo.length > 0 ? (
          renderTodo.map(todo => (
            <Todo
              todo={todo}
              key={todo.id}
              toggleEditOption={this.props.toggleEditOption}
              onEditTodo={this.props.onEditTodo}
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
