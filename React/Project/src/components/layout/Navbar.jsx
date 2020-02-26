import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
  static defaultProps = {
    title: "User Search",
    icon: "fa fa-github"
  };

  //defining the type of my props
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };
  render() {
    console.log(this.props);
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon}> </i> {this.props.title}{" "}
        </h1>{" "}
      </nav>
    );
  }
}

export default Navbar;
