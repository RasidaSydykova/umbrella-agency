import React from 'react';
import Main from '@/features/Home/Main/Main';
import AboutUs from '@/features/Home/AboutUs/AboutUs';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Main />
      <AboutUs />
    </div>
  );
};

export default Home;
