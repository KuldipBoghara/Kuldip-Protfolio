import React from 'react';

import '../Style/education.css';
import HeadDesign from './HeadDesign';

const Education = ({ educations }) => {
  return (
    <div className="education">
      <HeadDesign headText="Education" />
      {educations.map((education, index) => (
        <div key={index} className="education-wrapper">
          <div className="education-title">{education.title} </div>
          <div className="education-degree">
            {[
              education.degree,
              <span key={index} className="education-duration">
                {education.duration}
              </span>
            ]}
          </div>
          <div className="education-college">{education.college}</div>
        </div>
      ))}
    </div>
  );
};

export default Education;
