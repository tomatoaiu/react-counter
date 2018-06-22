import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterA from './counter-a'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.count}</h1>
        </header>
        <p className="App-intro">
          <button name="A" onClick={this.handleClick}>A</button>
          {/* <CounterA name="A" onClick={this.handleClick}>B</CounterA> */}
        </p>
      </div>
    );
  }
}

export default App;
