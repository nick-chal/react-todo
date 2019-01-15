import React, { Component } from 'react';

import Menu from './Menu';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import SearchForm from './SearchForm';
import { purifyText } from '../utils/Strings';
import { TODO_STATUS } from '../constants/common';

import '../assets/css/styles';

/**
 * The main container App.
 */
class App extends Component {
  /**
   *
   * @param {object} props Props from the parent.
   */
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      searchQuery: '',
      showState: TODO_STATUS.ALL
    };
  }

  componentDidUpdate = () => {
    const todoList = this.state.todos;

    localStorage.setItem('todo-list', JSON.stringify(todoList));
  };

  componentDidMount = () => {
    const todos = JSON.parse(localStorage.getItem('todo-list'));

    if (todos && todos.length > 0) {
      this.setState({
        todos
      });
    }
  };

  /**
   * Add new todo to the start of array.
   *
   * @param {object} todo Todo item from the TodoForm.
   */
  updateTodoList = todo => {
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos]
    }));
  };

  /**
   * Toggle editing option and show or hide input field in list.
   *
   * @param {int} id The id of the todo to edit from EditForm.
   */
  toggleEditOption = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id
          ? { ...todo, editing: !todo.editing }
          : { ...todo, editing: false }
      )
    }));
  };

  /**
   * Toggle whether the todo is completed or remaining.
   *
   * @param {int} id The id of the todo to toggle.
   */
  toggleCompleted = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      })
    }));
  };

  /**
   * Generate the todo list from main list based on the showState menu and search query.
   *
   * @returns  {Array}  Returns the filtered array of todos.
   */
  generateTodoItems = () => {
    if (this.state.showState === TODO_STATUS.REMAINING) {
      return this.state.todos.filter(
        todo => !todo.completed && todo.text.includes(this.state.searchQuery)
      );
    }

    if (this.state.showState === TODO_STATUS.COMPLETED) {
      return this.state.todos.filter(
        todo => todo.completed && todo.text.includes(this.state.searchQuery)
      );
    }

    if (this.state.showState === TODO_STATUS.ALL) {
      return this.state.todos.filter(todo =>
        todo.text.includes(this.state.searchQuery)
      );
    }
  };

  /**
   * Set the show state ie show all || remaining || compeleted.
   *
   * @param  {String} showState The state selected in the menu component.
   */
  setShowState = showState => {
    this.setState({ showState });
  };

  /**
   * Deletes the todo based on the id.
   *
   * @param  {int} id The id of the todo.
   */
  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  };

  /**
   * Edit the text of the todo.
   *
   * @param  {object}  editedTodo The edited todo from the EditForm.
   */
  onEditTodo = editedTodo => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === editedTodo.id ? editedTodo : todo
      )
    }));
  };

  /**
   * Update the search query in the search form.
   *
   * @param  {String}  string The search text from the search form.
   */
  updateSearchQuery = string => {
    this.setState({
      searchQuery: purifyText(string)
    });
  };

  /**
   */
  render() {
    const todoList = this.generateTodoItems();

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
          todoList={todoList}
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
