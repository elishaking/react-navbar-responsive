//@ts-check
import React, { Component } from 'react';
import './Navbar.scss';

export default class Navbar extends Component {

  /** @param {{links: {to: string, text: string, isRoute: boolean, html: JSX.Element}[]}} props */
  constructor(props) {
    super(props);

    this.state = {
      links: props.links
    };
  }

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
    const { links } = this.state;
    return (
      <div id="navbar">
        <h1>Logo</h1>

        <ul id="links">
          {/* <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Sign In</li> */}
          {
            links.map((link) => {
              if (link.html) return link.html;

              return (
                <li><a href={link.to}>{link.text}</a></li>
              );
            })
          }
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
