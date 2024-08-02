import React from 'react';
import Main from '@/features/AboutUs/Main/Main';
import './AboutUsPage.scss';
import Founders from '@/features/AboutUs/Founders/Founders';
import OurMission from '@/features/AboutUs/OurMission/OurMission';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <Main />
      <Founders />
      <OurMission />
    </div>
  );
};

export default AboutUsPage;
