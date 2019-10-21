//@ts-check
import React, { Component } from 'react';
import './Navbar.scss';

export default class Navbar extends Component {

  /** @param {React.MouseEvent<HTMLDivElement>} event */
  slideNav = (event) => {
    const burger = event.target;
    const links = document.querySelector("#links");


  };

  render() {
    return (
      <div id="navbar">
        <h1>Logo</h1>

        <ul id="links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Sign In</li>
        </ul>

        <div id="burger" onClick={this.slideNav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    )
  }
}
