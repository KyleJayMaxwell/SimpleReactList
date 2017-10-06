import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }
  onChange = (event) => {
    this.setState({term: event.target.value});
  }
  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
      </form>
    );
  }
}
