'use client';
import React, { useEffect } from 'react';
import Main from '@/features/Service/Main/Main';
import ServiceTabs from '@/features/Service/ServiceTabs/ServiceTabs';
import Footer from '@/UI/Footer/Footer';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectServicePage } from '@/features/Service/serviceSlice';
import { fetchServicePage } from '@/features/Service/serviceThunk';

const ServicePage = () => {
  useEffect(() => {
    document.title = 'Услуга';
  }, []);
  
  const id = window.location.pathname.replace('/service/', '');

  const dispatch = useAppDispatch();
  const servicePage = useAppSelector(selectServicePage).filter((service) => service?.id === Number(id));

  useEffect(() => {
    dispatch(fetchServicePage());
  }, [dispatch]);
  
  return (
    <div>
      <div>
        <Main
          title={servicePage[0]?.title}
          short_description_for_banner={servicePage[0]?.short_description_for_banner}
          gif={servicePage[0]?.gif}
        />
        <ServiceTabs tabs={servicePage[0]?.tabs}/>
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
