import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.searchValue
    };
  }

  updateOnChange = e => {
    const { value, name } = e.target;
    this.setState(
      {
        [name]: value
      },
      this.props.updateSearchQuery(value)
    );
  };

  submitTodo = e => {
    e.preventDefault();
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
            placeholder="Search Todo"
            value={this.state.text}
            onChange={this.updateOnChange}
          />
        </form>
      </>
    );
  }
}

export default SearchForm;
