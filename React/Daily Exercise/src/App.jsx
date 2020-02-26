import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Dropdown from "./components/dropdown/Dropdown";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Dropdown />
      </div>
    );
  }
}

export default App;
