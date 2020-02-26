import React from "react";
import "./Body.css";

import Dropdown from "../body/dropdown/Dropdown";
import Cards from "../body/cards/Cards";

class Body extends React.Component {
  render() {
    return (
      <div classNkillame='Body'>
        <Dropdown />
        <Cards />
      </div>
    );
  }
}

export default Body;
