import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  updateTodoList = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  toggleCompleted = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) return { ...todo, completed: !todo.completed };
        return { ...todo };
      })
    }));
  };

  render() {
    return (
      <>
        <TodoForm updateTodo={this.updateTodoList} />
        <ul>
          {this.state.todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleCompleted={this.toggleCompleted}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default TodoList;
