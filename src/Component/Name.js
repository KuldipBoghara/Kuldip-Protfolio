import React from 'react';

import DisplayContact from './DisplayContact';
import DisplayHobbies from './DisplayHobbies';
import DisplayProfile from './DisplayProfile';
import DisplaySkill from './DisplaySkill';

const Name = () => {
  const git = '/resources/git.svg';
  const linkedin = '/resources/Linkedin.svg';
  const socialIconsTwo = [
    { image: git, link: 'https://github.com/KuldipBoghara' },
    {
      image: linkedin,
      link: 'https://www.linkedin.com/in/kuldip-boghara/'
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
    { name: 'JAVA', value: 105 },
    { name: 'HTML & CSS', value: 105 },
    { name: 'SQL & NoSQL', value: 80 },
    { name: 'Firebase', value: 70 }
  ];

  const music = '/resources/Music.svg';
  const travel = '/resources/Travel.svg';
  const cricket = '/resources/Cricket.svg';
  const chess = '/resources/Chess.svg';

  const hobbies = [
    { image: music, text: 'Music' },
    { image: travel, text: 'Travel' },
    { image: cricket, text: 'Cricket' },
    { image: chess, text: 'Chess' }
  ];

  return (
    <div>
      <DisplayProfile socialIconsTwo={socialIconsTwo} />
      <DisplayContact contactInfo={contactInfo} />
      <DisplaySkill skills={skills} />
      <DisplayHobbies hobbies={hobbies} />
    </div>
  );
};

export default Name;
