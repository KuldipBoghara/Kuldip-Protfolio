import React from 'react';

import '../Style/Profile.css';

const DisplayProfile = ({ socialIconsTwo }) => {
  //console.log(socialIconsTwo);
  return (
    <div className="avatar">
      <div className="avatar-img">
        <img
          className="avatar-image"
          src="/resources/avatar.png"
          alt="avtr"
          height={124}
          width={110}
        />
      </div>
      <div className="name-text"> KULDIP BOGHARA</div>
      <div className="social-icons">
        {socialIconsTwo.map((si, index) => (
          <a
            className="icons"
            key={index}
            href={si.link}
            target="_blank"
            rel="noreferrer"
          >
            <img alt={index} src={si.image} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default DisplayProfile;
