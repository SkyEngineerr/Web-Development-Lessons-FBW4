import React, { Component } from "react";
import "./Cards.css";

class Cards extends Component {
  render() {
    return (
      <div id='main'>
        <div id='card'>
          <img
            src='https://previews.123rf.com/images/pandavector/pandavector1704/pandavector170406117/76645972-man-with-beard-icon-flat-single-avatar-icon-.jpg'
            alt=''
            className='img'
          />
          <div id='container'>
            <h4>
              <b>EREN YILMAZ</b>
            </h4>
            <p>Web Developer</p>
          </div>
        </div>
        <div id='card'>
          <img
            src='https://previews.123rf.com/images/pandavector/pandavector1704/pandavector170406117/76645972-man-with-beard-icon-flat-single-avatar-icon-.jpg'
            alt=''
            className='img'
          />
          <div id='container'>
            <h4>
              <b>EREN YILMAZ</b>
            </h4>
            <p>Web Developer</p>
          </div>
        </div>
        <div id='card'>
          <img
            src='https://previews.123rf.com/images/pandavector/pandavector1704/pandavector170406117/76645972-man-with-beard-icon-flat-single-avatar-icon-.jpg'
            alt=''
            className='img'
          />
          <div id='container'>
            <h4>
              <b>EREN YILMAZ</b>
            </h4>
            <p>Web Developer</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
