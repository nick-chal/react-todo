import React from 'react';

import { purifyText } from '../utils/utils';
import { checkValidInput } from '../utils/utils';

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

  submitTodo = e => {
    e.preventDefault();
    if (checkValidInput(this.state.text)) {
      this.props.updateTodo({
        id: Date.now().toString(),
        editing: false,
        completed: false,
        text: purifyText(this.state.text)
      });
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitTodo}>
          <input
            name="text"
            type="text"
            autoComplete="off"
            className="todo-input"
            placeholder="Add Todo"
            value={this.state.text}
            onChange={this.updateOnChange}
          />
          <i className="fa fa-plus add-todo" onClick={this.submitTodo} />
        </form>
      </>
    );
  }
}

export default TodoForm;
