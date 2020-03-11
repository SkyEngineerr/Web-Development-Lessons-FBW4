import React, {
  Component
} from "react";
import "./body.css";
import LeftSide from "../LeftSide/leftSide";
import RightSide from "../RigthSide/rightSide";
import Article from "../Article/article";

class Body extends Component {
  state = {
    title: ""
  };
  Handlemeassage = value => {
    this.setState({
      title: value
    });
  };

  render() {
    return ( <
      div className = 'Body' >
      <
      LeftSide newTitle = {
        this.state.title
      }
      /> <
      Article messageToApp = {
        this.Handlemeassage
      }
      /> <
      RightSide / >
      <
      /div>
    );
  }
}

export default Body;