'use client';
import React from 'react';
import './ServiceTabs.scss';
import { Box, Tab, Tabs } from '@mui/material';
import CustomTabPanel from '@/features/Service/ServiceTabs/components/CustomTabPanel/CustomTabPanel';

import Team from '@/features/Service/ServiceTabs/components/Team/Team';
import WorkStartSteps from '@/features/Service/ServiceTabs/components/WorkStartSteps/WorkStartSteps';
import { IProcess, Portfolio, Section, TeamMember } from '../../../../types';
import Process from '@/features/Service/ServiceTabs/components/Process/Process';

interface Props {
  tabs: {
    id: number;
    portfolios: {
      id: number;
      img: string | null;
      title: string
    }[]
    title: string;
    sections?: Section[];
    processes?: IProcess[];
    team?: TeamMember[];
  }[]
}

const ServiceTabs: React.FC<Props> = ({ tabs }) => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

  return (
    <div className="service-tabs">
      <div className="service-tabs-content">
        <div className="service-tabs-content-box">
          <div className="service-tabs-content-box-inner container">
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile={false}
              >
                {tabs?.map((tab, index) => {
                  return <Tab label={tab.title} {...a11yProps(index)}/>
                })}
              </Tabs>
            </Box>
          </div>
        </div>

        {tabs?.map((data, index) => (
          <CustomTabPanel key={index} value={value} index={index}>
            {data.sections?.map((section) => {
              return (
                <div className="service-tabs-content-info container" key={section.id}>
                  <h3 className="service-tabs-content-info-title">
                    {section?.title}
                  </h3>
                  <p className="service-tabs-content-info-text">
                    {section?.description}
                  </p>
                </div>
              )
            })}
            <div>
              <Process processes={data.processes}/>
              <Team team={data.team}/>
              <WorkStartSteps />
            </div>
          </CustomTabPanel>
        ))}
      </div>
    </div>
  );
};

export default ServiceTabs;
