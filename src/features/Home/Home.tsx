import React from 'react';
import Main from '@/features/Home/Main/Main';
import AboutUs from '@/features/Home/AboutUs/AboutUs';
import OurWorks from '@/features/Home/OurWorks/OurWorks';
import Services from '@/features/Home/Services/Services';
import './Home.scss';
import OurApproach from '@/features/Home/OurApproach/OurApproach';

const Home = () => {
  return (
    <div className="home">
      <Main />
      <AboutUs />
      <OurWorks />
      <Services />
      <OurApproach />
    </div>
  );
};

export default Home;
