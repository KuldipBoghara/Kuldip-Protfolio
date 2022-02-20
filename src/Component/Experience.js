import React from 'react';

import HeadDesign from './HeadDesign';
import '../Style/Experience.css';

const Experience = ({ experiences }) => {
  return (
    <div className="experience">
      <HeadDesign headText="Experience" />
      {experiences.map((experience, index) => (
        <div key={index} className="experience-list-wrapper">
          <div className="experience-title">
            {[
              experience.position,
              <span key={index} className="experience-period">
                {experience.period}
              </span>
            ]}
          </div>
          <div className="experience-company">{experience.company_name}</div>

          <ul>
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index} className="experience-responsibilty">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
