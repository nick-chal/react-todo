import React from 'react';
import PropTypes from 'prop-types';

import { purifyText, checkValidInput } from '../utils/strings';

/**
 * Form to add new todo.
 */
class TodoForm extends React.Component {
  /**
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  /**
   * Handle the change on input field.
   *
   * @param {object} e
   */
  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  };

  /**
   * Submit the new todo along with its properties.
   *
   * @param {object} e
   */
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

  /**
   * Renders the form to add new todo.
   */
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
            onChange={this.handleChange}
          />
          <i className="fa fa-plus add-todo" onClick={this.submitTodo} />
        </form>
      </>
    );
  }
}

TodoForm.propTypes = {
  updateTodo: PropTypes.func
};

export default TodoForm;
