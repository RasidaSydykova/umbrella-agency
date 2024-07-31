import React from 'react';
import ServiceList from '@/features/Home/Services/components/ServiceList/ServiceList';
import './Services.scss';

const Services = () => {
  return (
    <section className="services">
      <div className="services-content container">
        <h3 className="services-content-title">Услуги</h3>
        <div className="services-content-lists">
          {[...Array(6)].map((_, index) => (
            <ServiceList key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
