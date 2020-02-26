import React, { Component } from "react";

class Useritem extends Component {
  state = {
    id: 1,
    login: "mojombo",
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo"
  };
  render() {
    return (
      <div className='card text-center'>
        <a href={this.state.html_url} target='_blank' rel='noopener noreferrer'>
          <img
            src={this.state.avatar_url}
            alt=''
            className='round-img'
            style={{ width: "60px" }}
          />
        </a>

        <h3>{this.state.login}</h3>
      </div>
    );
  }
}

export default Useritem;
