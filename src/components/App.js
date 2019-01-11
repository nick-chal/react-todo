import React, { Component } from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Menu from './Menu';

import '../assets/css/styles';

class App extends Component {
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

  generateTodoItems = () => {
    if (this.state.showState === 'remaining')
      return this.state.todos.filter(todo => !todo.completed);

    if (this.state.showState === 'completed')
      return this.state.todos.filter(todo => todo.completed);

    return this.state.todos;
  };

  toggleShowState = showState => {
    this.setState({ showState });
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>TODO List</h1>
        <Menu
          viewType={this.state.showState}
          toggleShowState={this.toggleShowState}
        />
        <TodoForm updateTodo={this.updateTodoList} />
        <TodoList
          generateTodoItems={this.generateTodoItems}
          deleteTodo={this.deleteTodo}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
