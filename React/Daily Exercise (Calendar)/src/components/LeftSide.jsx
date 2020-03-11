import React, { Component } from "react";

export class LeftSide extends Component {
  buttonClick() {
    this.props.messageToBody("black");
  }

  render() {
    return (
      <div style={{ background: "yellow", width: "200px", height: "200px" }}>
        LEFT
        <button
          onClick={e => {
            this.buttonClick(e);
          }}
        >
          BUTTONNN
        </button>
      </div>
    );
  }
}

export default LeftSide;
