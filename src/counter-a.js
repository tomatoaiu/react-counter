import React, { Component } from 'react';
import { Button } from 'react-dom';

class CounterA extends Component {
  render() {
    return ( 
      <div><Button onClick={this.props.action.bind(this)} />props.name</div>
    )
  }
}

export default CounterA;