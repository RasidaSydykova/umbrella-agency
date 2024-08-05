import React from 'react';
import Main from '@/features/Home/Main/Main';
import AboutUs from '@/features/Home/AboutUs/AboutUs';
import OurWorks from '@/features/Home/OurWorks/OurWorks';
import Services from '@/features/Home/Services/Services';
import OurApproach from '@/features/Home/OurApproach/OurApproach';
import Reviews from '@/features/Home/Reviews/Reviews';
import Footer from '@/UI/Footer/Footer';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Main />
      <AboutUs />
      <OurWorks />
      <Services />
      <OurApproach />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
