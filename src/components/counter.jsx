import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  };

  render() {
    return <h1>hello World</h1>;
  }

  formatCount() {
    return this.state.count;
  }
}

export default Counter;
