import React, { Component } from 'react';
import '../assets/css/App.css';
import '../assets/css/styles';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TODO List</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
