import React, { Component } from "react";
import "./App.css";
import Light from "./Light.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
  }
  changeToggle = () => {
    this.setState(function(prevState) {
      return {
        isToggleOn: !prevState.isToggleOn
      };
    });
  };
  render() {
    return (
      <>
        <button onClick={this.changeToggle}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        <Light isToggleOn={this.state.isToggleOn} />
      </>
    );
  }
}

export default App;
