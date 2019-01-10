import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  updateOnChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  submitTodo = e => {
    e.preventDefault();
    if (/\S/.test(this.state.text)) {
      this.props.updateTodo({
        id: Date.now().toString(),
        text: this.state.text,
        completed: false
      });
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitTodo}>
          <input
            onChange={this.updateOnChange}
            type="text"
            placeholder="Add Todo"
            value={this.state.text}
          />
        </form>
      </>
    );
  }
}

export default TodoForm;
