import React, { Component } from "react";

import "./App.css";
import Counter from "./Counter";
import TogglePara from "./TogglePara";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Counter />
        <TogglePara />
      </div>
    );
  }
}

export default App;
