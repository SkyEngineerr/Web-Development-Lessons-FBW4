import React, { Component } from "react";

export class titleHeader extends Component {
  state = {
    title: ""
  };

  render() {
    return <h1>{this.state.title}</h1>;
  }
}

export default titleHeader;
