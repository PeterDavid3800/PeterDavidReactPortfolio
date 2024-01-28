// Services.js
import React from 'react';

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <h1>My Services</h1>
        <div className="services-list">
          <div>
            <i className="fas fa-code"></i>
            <h2>Web Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">Learn more</a>
          </div>
          <div>
            <i className="fas fa-crop-alt"></i>
            <h2>Web Development</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">Learn more</a>
          </div>
          <div>
            <i className="fas fa-device"></i>
            <h2>Network Device Configuration</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
