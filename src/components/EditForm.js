import React from 'react';
import PropTypes from 'prop-types';

import { checkValidInput } from '../utils/strings';

/**
 * Handle the edit of the todo.
 */
class EditForm extends React.Component {
  /**
   * @param {props} props
   */
  constructor(props) {
    super(props);
    const todo = props.prevTodo;

    this.state = {
      text: todo.text
    };
  }

  /**
   * Handle the change of the input field.
   *
   * @param {object} e The event object of the form.
   */
  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  };

  /**
   * Submit the edited todo.
   *
   * @param {object} e The event object of the form.
   */
  submitEditTodo = e => {
    e.preventDefault();
    e.stopPropagation();
    if (checkValidInput(this.state.text)) {
      this.props.onEditTodo({
        id: this.props.prevTodo.id,
        text: this.state.text,
        completed: this.props.prevTodo.completed,
        editing: false
      });
    }
  };

  /**
   * Cancel the edit of todo and send original value.
   */
  cancelEdit = () => {
    this.props.onEditTodo({ ...this.props.prevTodo, editing: false });
  };

  /**
   * Render the Editform for each todo.
   */
  render() {
    return (
      <form onSubmit={this.submitEditTodo}>
        <input
          name="text"
          type="text"
          autoComplete="off"
          className="todo-edit"
          placeholder="Edit Todo"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <i className="fa fa-times cancel-edit" onClick={this.cancelEdit} />
        <i className="fa fa-check accept-edit" onClick={this.submitEditTodo} />
      </form>
    );
  }
}

EditForm.propTypes = {
  prevTodo: PropTypes.object,
  onEditTodo: PropTypes.func
};

export default EditForm;
