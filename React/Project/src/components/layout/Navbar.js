import React, { Component } from "react";

class Navbar extends Component {
  static defaultProps = {
    title: "User Search",
    icon: "fa fa-github"
  };

  render() {
    console.log(this.props);
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon}></i>
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
