import React from 'react';

import '../Style/skill.css';

const DisplaySkill = ({ skills }) => {
  return (
    <div className="skill">
      <div className="title">Professional Skill</div>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-name">
            {skill.name}
            <div className="main-block"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplaySkill;
