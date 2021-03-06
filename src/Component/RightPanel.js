import React from 'react';

import AboutMe from './AboutMe';
import Education from './Education';
import Experience from './Experience';

const RightPanel = () => {
  const experiences = [
    {
      position: 'FRONTEND DEVELOPER',
      period: 'June 2021 - Present',
      company_name: 'HARSH INFOTECH, Canada',
      responsibilities: [
        'I have worked on a web application for an employment agency that provides functionality Where employee can register, view pay stub, request for ROE and, Request for T4'
      ]
    },
    {
      position: 'FULL-STACK DEVELOPER',
      period: 'Dec 2018 - Dec 2019',
      company_name: 'AWADH Techsol LLP, India',
      responsibilities: [
        'Developed a website by converting mockups of satellite data into user friendly web presentation. Using the technology like PostgreSQL and Geo-Server with JS, CSS and MySQL',
        'Experience with developing SPA and RWD'
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
