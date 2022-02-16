import React from 'react';

import DisplayContact from './DisplayContact';
import DisplayProfile from './DisplayProfile';
import DisplaySkill from './DisplaySkill';

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

  const phone = 'resources/phone.svg';
  const email = '/resources/email.svg';
  const location = '/resources/location.svg';
  const contactInfo = [
    { image: phone, detail: '+1 (437)984-8398' },
    { image: email, detail: 'bogharakuldip@gmail.com' },
    { image: location, detail: 'Toronto, Canada' }
  ];

  const skills = [
    { name: 'Java Script', value: 110 },
    { name: 'React', value: 110 },
    { name: 'HTML & CSS', value: 105 },
    { name: 'JAVA', value: 100 },
    { name: 'SQL', value: 80 },
    { name: 'Graphic Design', value: 60 }
  ];

  return (
    <div>
      <DisplayProfile socialIconsTwo={socialIconsTwo} />
      <DisplayContact contactInfo={contactInfo} />
      <DisplaySkill skills={skills} />
    </div>
  );
};

export default Name;
