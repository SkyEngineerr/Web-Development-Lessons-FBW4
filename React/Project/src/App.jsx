import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar.jsx";
import Useritem from "./components/users/Useritem.jsx";

class App extends Component {
  render() {
    //const number = [1, 2, 3, 4];
    return (
      <div>
        <Navbar />
        <Useritem />
      </div>
    );
  }
}

export default App;
