import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  render() {
    return (
      <div className='dropdown navbar bg-primary'>
        <button className='dropbtn'>DENEME</button>
        <div className='dropdown-content'>
          <a href='#'>BUY</a>
          <a href='#'>RENT</a>
        </div>
      </div>
    );
  }
}

export default Dropdown;
