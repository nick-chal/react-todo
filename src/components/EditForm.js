import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    const todo = this.props.prevTodo;

    this.state = {
      text: todo.text
    };
  }

  updateOnChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  // checkValidInput = string => [...string].some(el => el !== ' ');

  editTodo = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.editTodo({
      id: this.props.prevTodo.id,
      text: this.state.text ? this.state.text : this.props.prevTodo.text,
      completed: this.props.prevTodo.completed,
      editing: false
    });
  };

  render() {
    return (
      <form onSubmit={this.editTodo}>
        <input
          className="todo-edit"
          name="text"
          onChange={this.updateOnChange}
          type="text"
          placeholder="Edit Todo"
          value={this.state.text}
        />
      </form>
    );
  }
}

export default TodoForm;
