import React, { Component } from "react";

import "./App.css";

class TogglePara extends Component {
  constructor() {
    super();
    this.state = {
      isPresent: false
    };
  }

  showPara = () => {
    let cond = this.state.isPresent;
    if (cond) {
      cond = false;
    } else {
      cond = true;
    }
    this.setState({ isPresent: cond });
    console.log(cond);
  };

  renderContent = () => {
    if (this.state.isPresent) {
      return (
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.renderContent()}
        <button onClick={this.showPara}>Toggle Text</button>
      </div>
    );
  }
}

export default TogglePara;
