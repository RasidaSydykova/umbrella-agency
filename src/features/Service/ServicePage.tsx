import React from 'react';
import Main from '@/features/Service/Main/Main';
import ServiceTabs from '@/features/Service/ServiceTabs/ServiceTabs';
import Footer from '@/UI/Footer/Footer';

const ServicePage = () => {
  return (
    <div>
      <Main />
      <ServiceTabs />
      <Footer />
    </div>
  );
};

export default ServicePage;
