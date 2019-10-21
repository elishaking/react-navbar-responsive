//@ts-check
import React, { Component } from 'react';
import './Navbar.scss';

export default class Navbar extends Component {

  /** @param {React.MouseEvent<HTMLDivElement>} e */
  slideNav = (e) => {
    const burger = document.querySelector("#burger");
    const links = document.querySelector("#links");
    const allLinks = document.querySelectorAll("#links li");

    links.classList.toggle('show-links');
    burger.classList.toggle('show-links');

    allLinks.forEach((link) => {
      link.classList.toggle('scale-fade-animation');
    });
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
