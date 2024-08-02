import React from 'react';
import Main from '@/features/AboutUs/Main/Main';
import './AboutUsPage.scss';
import Founders from '@/features/AboutUs/Founders/Founders';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <Main />
      <Founders />
    </div>
  );
};

export default AboutUsPage;
