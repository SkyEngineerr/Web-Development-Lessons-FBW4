import React from "react";
//import logo from './logo.svg';
import "./App.css";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Body from "./components/Body/Body.jsx";

function App() {
  return (
    <div className='App'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
