import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar.jsx";
import axios from "axios";
import Users from "./components/users/Users.jsx";
class App extends Component {
  state = {};
  async componentDidMount() {
    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);
  }
  render() {
    //const title = 'User Search';
    //const number = [1, 2, 3, 4];
    return (
      <div>
        <Navbar />
        <Users />
      </div>
    );
  }
}

export default App;
