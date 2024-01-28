// Header.js
import React from 'react';

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <nav>
          <img src="images/logo.png" className="logo" alt="Logo" />
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="header-text">
          <p>BBIT Student</p>
          <h1>Hi, I'm<span> Peter David Aringo</span><br /> from Kenya</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
