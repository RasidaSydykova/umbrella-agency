import React from 'react';
import Main from '@/features/AboutUs/Main/Main';
import './AboutUsPage.scss';
import Founders from '@/features/AboutUs/Founders/Founders';
import OurMission from '@/features/AboutUs/OurMission/OurMission';
import OurValues from '@/features/AboutUs/OurValues/OurValues';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <Main />
      <Founders />
      <OurMission />
      <OurValues />
    </div>
  );
};

export default AboutUsPage;
