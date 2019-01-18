import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  updateOnChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  checkValidInput = string => [...string].some(el => el !== ' ');

  submitTodo = e => {
    e.preventDefault();
    if (this.checkValidInput(this.state.text)) {
      this.props.updateTodo({
        id: Date.now().toString(),
        text: this.state.text,
        completed: false,
        editing: false
      });
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitTodo}>
          <input
            className="todo-input"
            name="text"
            onChange={this.updateOnChange}
            type="text"
            placeholder="Add Todo"
            value={this.state.text}
          />
          <i className="fa fa-plus add-todo" onClick={this.submitTodo} />
        </form>
      </>
    );
  }
}

export default TodoForm;
