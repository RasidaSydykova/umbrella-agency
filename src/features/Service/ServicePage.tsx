import React from 'react';
import Main from '@/features/Service/Main/Main';
import ServiceTabs from '@/features/Service/ServiceTabs/ServiceTabs';
import Process from '@/features/Service/ServiceTabs/components/Process/Process';
import Team from '@/features/Service/ServiceTabs/components/Team/Team';
import WorkStartSteps from '@/features/Service/ServiceTabs/components/WorkStartSteps/WorkStartSteps';

const ServicePage = () => {
  return (
    <div>
      <Main />
      <ServiceTabs />
      {/*<Process />*/}
      {/*<Team />*/}
      {/*<WorkStartSteps />*/}
    </div>
  );
};

export default ServicePage;
