import React from 'react';

import AboutMe from './AboutMe';
import Education from './Education';
import Experience from './Experience';

const RightPanel = () => {
  const experiences = [
    {
      position: 'Intern',
      period: 'Dec 2018 - Apr 2019',
      company_name: 'BISAG, India',
      responsibilities: [
        'Combined remotely collected and satellite data to generate unified geographic mapping information.',
        'Planned website development by converting collected into usable web presence with HTML, JavaScript, and CSS.'
      ]
    },
    {
      position: 'Production Assistance',
      period: 'Jun 2021 - present',
      company_name: 'ECI Tecchnolgy, Toronto',
      responsibilities: [
        'Assisting the production team.',
        'Ensure the quality standards are maintained all throughout the production.'
      ]
    }
  ];

  const education = [
    {
      title: 'Computer System Technology - Networking',
      degree: 'Advanced Diploma',
      duration: '2020 - 2121',
      college: 'Centennial College, ON, Canada'
    },
    {
      title: 'Computer Engineering',
      degree: 'Batchlor of Technology',
      duration: '2015 - 2019',
      college: 'CHARUSAT University, Guj, India'
    }
  ];

  return (
    <div>
      <AboutMe />
      <Experience experiences={experiences} />
      <Education educations={education} />
    </div>
  );
};

export default RightPanel;
