import React from 'react';
import PropTypes from 'prop-types';

import { purifyText, checkValidInput } from '../utils/Strings';

/**
 * Form to add new todo.
 *
 * @class TodoForm
 * @extends {React.Component}
 */
class TodoForm extends React.Component {
  /**
   * Creates an instance of TodoForm.
   *
   * @param {*} props
   * @memberof TodoForm
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
   * @param {*} e
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
   * @param {*} e
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
   *
   *
   * @returns
   * @memberof TodoForm
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
