import React, { Component } from "react";

export class RightSide extends Component {
  render() {
    return (
      <div style={{ background: "red", height: "200px", width: "200px" }}>
        <p>{this.props.sendingInput}</p>
      </div>
    );
  }
}

export default RightSide;
