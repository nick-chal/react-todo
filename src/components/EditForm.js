import React from 'react';

import { purifyText } from '../utils/utils';
import { checkValidInput } from '../utils/utils';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    const todo = props.prevTodo;

    this.state = {
      text: todo.text
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  onEditTodo = e => {
    e.preventDefault();
    e.stopPropagation();
    if (checkValidInput(this.state.text))
      this.props.onEditTodo({
        id: this.props.prevTodo.id,
        text: purifyText(this.state.text)
          ? this.state.text
          : this.props.prevTodo.text,
        completed: this.props.prevTodo.completed,
        editing: false
      });
  };

  render() {
    return (
      <form onSubmit={this.onEditTodo}>
        <input
          className="todo-edit"
          name="text"
          onChange={this.handleChange}
          type="text"
          placeholder="Edit Todo"
          value={this.state.text}
          autoComplete="off"
        />
      </form>
    );
  }
}

export default TodoForm;
