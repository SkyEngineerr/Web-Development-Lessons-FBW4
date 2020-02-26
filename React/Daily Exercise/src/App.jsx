import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
