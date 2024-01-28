// About.js
import React from 'react';

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="images/user.jpg" alt="User" />
          </div>
          <div className="about-col-2">
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus vel ligula condimentum dapibus. Integer convallis dolor in libero varius, sit amet ultrices nisl rhoncus. Vivamus euismod, elit vel convallis imperdiet, ipsum justo scelerisque libero, vel pharetra est elit nec nisl. Fusce vel leo ut tortor luctus iaculis eu ut lacus. Aenean in justo et felis cursus consectetur. In hac habitasse platea dictumst. Morbi in efficitur dui. Aliquam erat volutpat. Suspendisse vel bibendum nulla. Nam vitae posuere felis. Praesent sit amet justo vitae odio facilisis bibendum. Nulla facilisi.
            </p>

            <div className="tab-titles">
              <p className="tab-links active-link" onClick={() => opentab('skills')}>Skills</p>
              <p className="tab-links" onClick={() => opentab('experience')}>Experience</p>
              <p className="tab-links" onClick={() => opentab('education')}>Education</p>
            </div>
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li><span>UI/UX</span><br />Designing Web Applications</li>
                <li><span>Web Development</span><br />Web Application Development</li>
                <li><span>Network Device Configuration</span><br />Configuration of Network Devices</li>
              </ul>
            </div>
            <div className="tab-contents" id="experience">
              <ul>
                <li><span>March 2021 - April 2021</span><br />Internship at the</li>
                <li><span>January 2023 - April 2023</span><br />Huawei Web Technologies Kenya</li>
              </ul>
            </div>
            <div className="tab-contents" id="education">
              <ul>
                <li><span>2019</span><br />Graduation From Nova Pioneer High School</li>
                <li><span>2024</span><br />Bachelor in Business Information Technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
