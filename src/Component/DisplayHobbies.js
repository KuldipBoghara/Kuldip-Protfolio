import React from 'react';

import '../Style/hobbies.css';

const DisplayHobbies = ({ hobbies }) => {
  return (
    <div className="hobbies">
      <div className="hobbies-title-block">
        <div className="hobbies-title">Hobbies</div>
      </div>

      <div className="h-list">
        {hobbies.map((hobbie, index) => (
          <div key={index} className="hobbie-box">
            <img src={hobbie.image} alt={index} />
            <div key={index} className="hobbie-text">
              {hobbie.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayHobbies;
