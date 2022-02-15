import React from 'react';

import '../Style/Name.css';
import DisplayContact from './DisplayContact';
import DisplayProfile from './DisplayProfile';

const Name = () => {
  const git = '/resources/git.png';
  const linkedin = '/resources/linkedin.png';
  const socialIconsTwo = [
    { image: git, link: 'https://github.com/Mr-BK' },
    {
      image: linkedin,
      link: 'https://www.linkedin.com/in/kuldip-boghara-5abbb6109/'
    }
  ];

  const phone = '/resorces/phone.png';
  const email = '/resources/email.png';
  const location = '/resources/location.png';
  const contactInfo = [
    { phone, contact_number: '+1 (437)984-8398' },
    { email, email_address: 'bogharakuldip@gmail.com' },
    { location, address: 'Toronto, Canada' }
  ];

  return (
    <div>
      <DisplayProfile socialIconsTwo={socialIconsTwo} />
      <DisplayContact contactInfo={contactInfo} />
    </div>
  );
};

export default Name;
