'use client';
import React from 'react';
import './ServiceTabs.scss';
import { Box, Tab, Tabs } from '@mui/material';
import CustomTabPanel from '@/features/Service/ServiceTabs/components/CustomTabPanel/CustomTabPanel';

const ServiceTabs = () => {
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
                <Tab label="Контекстная реклама" {...a11yProps(0)} />
                <Tab label="Разработка digital-стратегии" {...a11yProps(1)} />
                <Tab label="Разработка digital-стратегии" {...a11yProps(2)} />
                <Tab label="Разработка digital-стратегии" {...a11yProps(3)} />
                <Tab label="Разработка digital-стратегии" {...a11yProps(4)} />
              </Tabs>
            </Box>
          </div>
        </div>

        {[...Array(6)].map((_, index) => (
          <CustomTabPanel key={index} value={value} index={index}>
            <div className="service-tabs-content-info container">
              <h3 className="service-tabs-content-info-title">
                Настройка и ведение контекстной рекламы
              </h3>
              <p className="service-tabs-content-info-text">
                Наши эксперты учитывают рыночные тенденции и используют передовые инструменты для
                оптимизации, обеспечивая максимальную отдачу от ваших рекламных инвестиций.
              </p>
            </div>
          </CustomTabPanel>
        ))}
      </div>
    </div>
  );
};

export default ServiceTabs;
