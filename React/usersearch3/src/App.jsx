import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar.jsx";
import axios from "axios";
import Users from "./components/users/Users.jsx";
import Spinner from "./components/layout/Spinner.jsx";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);
    this.setState({ users: res.data, loading: false });
  }

  render() {
    //const title = 'User Search';
    //const number = [1, 2, 3, 4];
    return (
      <div>
        <Navbar />
        <Users loading={this.state.loading} users={this.state.users} />
        <Spinner users={!this.state.users} />
      </div>
    );
  }
}

export default App;
