import React, { Component } from "react";
import "./Dropdown.css";

export default class dropdown extends Component {
  render() {
    return (
      <div className='dropdown'>
        <button className='dropbtn'>DENEME</button>
        <div className='dropdown-content'>
          <a href='#'>BUY</a>
          <a href='#'>RENT</a>
        </div>
      </div>
    );
  }
}
