import React from 'react';
import Link from 'next/link';
import './ServiceList.scss';

const ServiceList = () => {
  return (
    <div className="services-list">
      <ul className="services-list-content">
        <h6 className="services-list-content-title">
          Стратегия и аудит
          <img
            className="services-list-content-title-arrow"
            src="/assets/umbrella-arrow-white.svg"
            alt="umbrella"
          />
        </h6>
        {[...Array(6)].map((_, index) => (
          <li className="services-list-content-item" key={index}>
            <Link href="/service/1">Разработка стратегии Маркетинг 360</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
