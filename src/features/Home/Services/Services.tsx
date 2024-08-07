import React, { useEffect } from 'react';
import ServiceList from '@/features/Home/Services/components/ServiceList/ServiceList';
import './Services.scss';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectServices } from '@/features/Home/Services/servicesSlice';
import { fetchServices } from '@/features/Home/Services/servicesThunk';

const Services = () => {
  const dispatch = useAppDispatch();
  const services = useAppSelector(selectServices);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <section className="services">
      <div className="services-content container">
        <h3 className="services-content-title">Услуги</h3>
        <div className="services-content-lists">
          {services.map((service) => (
            <ServiceList key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
