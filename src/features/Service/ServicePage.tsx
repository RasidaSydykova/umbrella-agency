import React from 'react';
import Main from '@/features/Service/Main/Main';
import ServiceTabs from '@/features/Service/ServiceTabs/ServiceTabs';
import Process from '@/features/Service/Process/Process';
import Team from '@/features/Service/Team/Team';

const ServicePage = () => {
  return (
    <div>
      <Main />
      <ServiceTabs />
      <Process />
      <Team />
    </div>
  );
};

export default ServicePage;