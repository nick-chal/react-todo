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

  toggleEditOption = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id
          ? { ...todo, editing: !todo.editing }
          : { ...todo, editing: false }
      )
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

  setShowState = showState => {
    this.setState({ showState });
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  };

  editTodo = editedTodo => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === editedTodo.id ? editedTodo : todo
      )
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>TODO List</h1>
        <Menu
          viewType={this.state.showState}
          setShowState={this.setShowState}
        />
        <TodoForm updateTodo={this.updateTodoList} />
        <TodoList
          editTodo={this.editTodo}
          toggleEditOption={this.toggleEditOption}
          deleteTodo={this.deleteTodo}
          toggleCompleted={this.toggleCompleted}
          generateTodoItems={this.generateTodoItems}
        />
      </div>
    );
  }
}

export default App;
