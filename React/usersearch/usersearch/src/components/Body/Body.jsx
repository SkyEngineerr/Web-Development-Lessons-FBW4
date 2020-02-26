import React from "react";
import "./Body.css";

import LeftSide from "../LeftSide/LeftSide.jsx";
import RightSide from "../RightSide/RightSide.jsx";
import Article from "../Article/Article.jsx";

class Body extends React.Component {
  render() {
    return (
      <div className='Body'>
        <Article />
        <RightSide />
        <LeftSide />
      </div>
    );
  }
}

export default Body;
