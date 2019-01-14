import React, { Component } from 'react';

import Menu from './Menu';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import SearchForm from './SearchForm';
import { purifyText } from '../utils/utils';
import { TODO_STATUS } from '../constants/common';

import '../assets/css/styles';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      searchQuery: '',
      showState: TODO_STATUS.ALL
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
        return todo;
      })
    }));
  };

  generateTodoItems = () => {
    if (this.state.showState === TODO_STATUS.REMAINING)
      return this.state.todos.filter(
        todo => !todo.completed && todo.text.includes(this.state.searchQuery)
      );

    if (this.state.showState === TODO_STATUS.COMPLETED)
      return this.state.todos.filter(
        todo => todo.completed && todo.text.includes(this.state.searchQuery)
      );

    if (this.state.showState === TODO_STATUS.ALL)
      return this.state.todos.filter(todo =>
        todo.text.includes(this.state.searchQuery)
      );
  };

  setShowState = showState => {
    this.setState({ showState });
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  };

  onEditTodo = editedTodo => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === editedTodo.id ? editedTodo : todo
      )
    }));
  };

  updateSearchQuery = string => {
    this.setState(prevState => ({
      searchQuery: purifyText(string)
    }));
  };

  render() {
    const todoList = this.generateTodoItems();
    console.log(this.state.searchQuery);
    return (
      <div className="App">
        <h1>TODO List</h1>
        <Menu
          viewState={this.state.showState}
          setShowState={this.setShowState}
        />
        <SearchForm
          searchValue={this.state.searchQuery}
          updateSearchQuery={this.updateSearchQuery}
        />
        <TodoForm updateTodo={this.updateTodoList} />
        <TodoList
          itemsToShow={todoList}
          onEditTodo={this.onEditTodo}
          deleteTodo={this.deleteTodo}
          toggleCompleted={this.toggleCompleted}
          toggleEditOption={this.toggleEditOption}
        />
      </div>
    );
  }
}

export default App;
