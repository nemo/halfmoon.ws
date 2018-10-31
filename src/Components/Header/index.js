import React, { Component } from 'react';
import './index.css';
import avatar from './nima.jpg'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <a href='/' className="avatar">
          <img src={avatar} alt="Nima Gardideh" />
          <strong>@nimsical</strong>
        </a>
        <ul>
          <li><a href="/">Find Me</a></li>
          <li><a href="/principles">My Principles</a></li>
          <li><a href="http://medium.com/@ngardideh" rel="noopener" target="_blank">Blog</a></li>
        </ul>
      </header>
    );
  }
}

export default Header;
