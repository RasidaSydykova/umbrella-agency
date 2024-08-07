'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import './ServiceList.scss';
import { Service } from '../../../../../../types';

interface Props {
  service: Service;
}

const ServiceList: React.FC<Props> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="services-list">
      <ul className="services-list-content">
        <h6 className="services-list-content-title">
          {service.title}
          <img
            className="services-list-content-title-arrow"
            src="/assets/umbrella-arrow-white.svg"
            alt="umbrella"
          />
        </h6>
        {service.category.map((category) => (
          <li
            className="services-list-content-item"
            key={category.id}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link href="/service" className="services-list-content-item-link">
              <img
                className="services-list-content-item-link-img"
                src={isHovered ? '/assets/umbrella-primary.svg' : '/assets/umbrella.svg'}
                alt="umbrella"
                style={{
                  transition: 'transform 1.5s',
                }}
              />
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
