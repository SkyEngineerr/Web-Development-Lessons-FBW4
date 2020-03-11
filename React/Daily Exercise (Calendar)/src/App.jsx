import React, { Component } from "react";
import "./App.css";
import RightSide from "./components/RightSide.jsx";
import LeftSide from "./components/LeftSide.jsx";

class App extends Component {
  state = {
    x: "",
    background: ""
  };

  exampleFunc(event) {
    console.log(event.target.value);
    this.setState({ x: event.target.value });
  }

  render() {
    return (
      <div id='deneme'>
        <RightSide sendingInput={this.state.x} />
        <div style={{ background: "ORANGE", width: "500px" }}>
          <input
            type='text'
            onChange={e => {
              this.exampleFunc(e);
            }}
          />
        </div>
        <LeftSide />
      </div>
    );
  }
}

export default App;
