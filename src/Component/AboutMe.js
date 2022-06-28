import React from 'react';

import '../Style/AboutMe.css';
import HeadDesign from './HeadDesign';

const AboutMe = () => {
  return (
    <div className="about-me">
      <HeadDesign headText="About Me" />
      <div className="about-me-text-block">
        <ul>
          <li className="about-me-text">
            Looking forward to work in Global delivery environment with
            experience on Web and Software development
          </li>
          <li className="about-me-text">
            I have experience with JS, React JS, Redux, Node.js, REST API,
            MySQL, Semantic UI
          </li>
          <li className="about-me-text">
            Hands on with VS Code, Jira, Amazon AWS, Amazon S3, Firebase
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
