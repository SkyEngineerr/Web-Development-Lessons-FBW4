import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar title='User Search' icon='fa fa-github' />
      </div>
    );
  }
}

export default App;
