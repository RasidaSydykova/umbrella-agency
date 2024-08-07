'use client';
import React, { useEffect } from 'react';
import Main from '@/features/Service/Main/Main';
import ServiceTabs from '@/features/Service/ServiceTabs/ServiceTabs';
import Footer from '@/UI/Footer/Footer';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectServicePage } from '@/features/Service/serviceSlice';
import { fetchServicePage } from '@/features/Service/serviceThunk';
import ServiceList from '@/features/Home/Services/components/ServiceList/ServiceList';

const ServicePage = () => {
  useEffect(() => {
    document.title = 'Услуга';
  }, []);

  const dispatch = useAppDispatch();
  const servicePage = useAppSelector(selectServicePage);

  useEffect(() => {
    dispatch(fetchServicePage());
  }, [dispatch]);

  return (
    <div>
      <div>
        {servicePage.map((service) => (
          <div key={service.id}>
            <Main
              title={service.title}
              short_description_for_banner={service.short_description_for_banner}
              gif={service.gif}
            />
            {service.tabs.map((tab, index) => (
              <ServiceTabs
                key={index}
                title={tab.title}
                sections={tab.sections}
                processes={tab.processes}
                team={tab.team}
              />
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
