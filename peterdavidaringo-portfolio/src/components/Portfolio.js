// Portfolio.js
import React from 'react';

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src="images/work1.jpg" alt="Work 1" />
            <div className="layer">
              <h3>Savify</h3>
              <p>This app allows students to get deals to fun activities.</p>
              <a href="#"><i className="fas fa-external-link-alt"></i></a>
            </div>
          </div>
        </div>
        <div className="work-list">
          <div className="work">
            <img src="images/work2.jpg" alt="Work 2" />
            <div className="layer">
              <h3>Web development</h3>
              <p>In the process of developing web applications.</p>
              <a href="#"><i className="fas fa-external-link-alt"></i></a>
            </div>
          </div>
        </div>
        <div className="work-list">
          <div className="work">
            <img src="images/work3.jpg" alt="Work 3" />
            <div className="layer">
              <h3>Device Configuration</h3>
              <p>I am able to assist in configuring network devices.</p>
              <a href="#"><i className="fas fa-external-link-alt"></i></a>
            </div>
          </div>
        </div>
        <a href="#" className="btn">See More</a>
      </div>
    </div>
  );
};

export default Portfolio;