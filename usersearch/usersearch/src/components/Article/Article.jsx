import React from "react";
import "./Article.css";

class Article extends React.Component {
  render() {
    return (
      <div className='Article'>
        <p>
          This is an example of class components using only normal JS ES6
          modules
        </p>
        <p>We will test the module export and import capabilities</p>
      </div>
    );
  }
}

export default Article;
