import React from 'react';
import PropTypes from 'prop-types';

import { purifyText } from '../utils/Strings';

/**
 *
 *
 * @class SearchForm
 * @extends {React.Component}
 */
class SearchForm extends React.Component {
  /**
   * Creates an instance of SearchForm.
   *
   * @param {object} props
   * @memberof SearchForm
   */
  constructor(props) {
    super(props);

    this.state = {
      text: props.searchValue
    };
  }

  /**
   * Handle the change of the input field.
   *
   * @param {*} e
   */
  handleChange = e => {
    const { value, name } = e.target;

    this.setState(
      {
        [name]: value
      },
      this.props.updateSearchQuery(value)
    );
  };

  /**
   * Clear the input field value.
   *
   */
  clearSearch = () => {
    this.setState({ text: '' });
    this.props.updateSearchQuery('');
  };

  /**
   * Prevents the refresh of the page on pressing enter.
   *
   * @param {*} e
   */
  submitTodo = e => {
    e.preventDefault();
  };

  /**
   *
   *
   * @returns {React.Component}
   * @memberof SearchForm
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
            placeholder="Search Todo"
            value={this.state.text}
            onChange={this.handleChange}
          />
          {purifyText(this.state.text) ? (
            <i className="fa fa-times add-todo" onClick={this.clearSearch} />
          ) : null}
        </form>
      </>
    );
  }
}

SearchForm.propTypes = {
  searchValue: PropTypes.string,
  updateSearchQuery: PropTypes.func
};
export default SearchForm;
