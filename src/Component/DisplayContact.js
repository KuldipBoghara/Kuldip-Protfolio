import React from 'react';

import '../Style/Contact.css';

const DisplayContact = ({ contactInfo }) => {
  return (
    <div className="contact">
      {contactInfo.map((ci, index) => (
        <div key={index} className="phone">
          <img className="contact_icons" src={ci.image} alt={index} />
          <div className="contact_detail">{ci.detail}</div>
        </div>
      ))}
    </div>
  );
};

export default DisplayContact;
