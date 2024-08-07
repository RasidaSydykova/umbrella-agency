'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import './ServiceList.scss';

const ServiceList = () => {
  const [isHovered, setIsHovered] = useState(false);

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
          <li
            className="services-list-content-item"
            key={index}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link href="/service/1" className="services-list-content-item-link">
              <img
                className="services-list-content-item-link-img"
                src={isHovered ? '/assets/umbrella-primary.svg' : '/assets/umbrella.svg'}
                alt="umbrella"
                style={{
                  transition: 'transform 1.5s',
                }}
              />
              Разработка стратегии Маркетинг 360
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
