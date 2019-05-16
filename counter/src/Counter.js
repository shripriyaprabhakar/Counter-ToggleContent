import React, { Component } from "react";

import "./App.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decreaseCounter = () => {
    if (this.state.counter === 0) {
      this.setState({ counter: 0 });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  render() {
    return (
      <div className="App">
        {this.state.counter}
        <div className="btn-group">
          <button className="btn" onClick={this.increaseCounter}>
            Increment
          </button>
          <button className="btn" onClick={this.decreaseCounter}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
