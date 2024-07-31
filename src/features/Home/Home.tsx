import React from 'react';
import Main from '@/features/Home/Main/Main';
import AboutUs from '@/features/Home/AboutUs/AboutUs';
import OurWorks from '@/features/Home/OurWorks/OurWorks';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Main />
      <AboutUs />
      <OurWorks />
    </div>
  );
};

export default Home;
