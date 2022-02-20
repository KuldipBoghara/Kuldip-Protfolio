import React, { useEffect } from 'react';

import '../Style/skill.css';

const DisplaySkill = ({ skills }) => {
  useEffect(() => {}, []);

  return (
    <div className="skill">
      <div className="title">Professional Skill</div>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-name">
            {skill.name}
            <div key={index} className="main-block">
              <div
                className="second-block"
                style={{ width: skill.value }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplaySkill;
