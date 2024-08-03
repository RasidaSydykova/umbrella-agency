import React from 'react';
import Main from '@/features/Service/Main/Main';
import ServiceTabs from '@/features/Service/ServiceTabs/ServiceTabs';
import Process from '@/features/Service/Process/Process';

const ServicePage = () => {
  return (
    <div>
      <Main />
      <ServiceTabs />
      <Process />
    </div>
  );
};

export default ServicePage;