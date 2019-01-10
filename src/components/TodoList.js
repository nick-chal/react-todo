import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      showState: 'all'
    };
  }

  updateTodoList = todo => {
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos]
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

  populateTodo = showState => {
    if (showState === 'remaining')
      return this.state.todos.filter(todo => !todo.completed);
    else if (showState === 'completed')
      return this.state.todos.filter(todo => todo.completed);
    else return this.state.todos;
  };

  toggleShowState = showState => {
    this.setState({ showState });
  };

  render() {
    const renderTodo = this.populateTodo(this.state.showState);
    return (
      <>
        <div>
          <button
            className={this.state.showState === 'all' ? 'active' : null}
            onClick={() => this.toggleShowState('all')}
          >
            Show All
          </button>
          <button
            className={this.state.showState === 'remaining' ? 'active' : null}
            onClick={() => this.toggleShowState('remaining')}
          >
            Remaining
          </button>
          <button
            className={this.state.showState === 'completed' ? 'active' : null}
            onClick={() => this.toggleShowState('completed')}
          >
            Completed
          </button>
        </div>
        <TodoForm updateTodo={this.updateTodoList} />
        <ul>
          {renderTodo.map(todo => (
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
