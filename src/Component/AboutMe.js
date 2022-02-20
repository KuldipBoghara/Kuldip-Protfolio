import React from 'react';

import '../Style/AboutMe.css';
import HeadDesign from './HeadDesign';

const AboutMe = () => {
  return (
    <div className="about-me">
      <HeadDesign headText="About Me" />
      <div className="about-me-text-block">
        <p className="about-me-text">
          Motivated entry-level grad, enthusiastic to work in an ever-evolving
          environment of web development and design. I am a passionate learner,
          attended numerous coding Bootcamp to learn new skills while polishing
          existing ones.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
