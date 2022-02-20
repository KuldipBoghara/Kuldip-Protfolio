import React from 'react';

import '../Style/HeadDesign.css';

const HeadDesign = ({ headText }) => {
  return (
    <div className="head">
      <div className="head-block">
        <div className="head-text">{headText}</div>
      </div>
      <div className="head-line"></div>
    </div>
  );
};

export default HeadDesign;
