import Home from '@/features/Home/Home';
import Head from 'next/head';
import React from 'react';

const Homepage = () => {
  return (
    <div>
      <Head>
        <title>umbrella agency</title>
      </Head>
      <Home />
    </div>
  );
};

export default Homepage;
