import React from 'react';
import './OurMission.scss';

const OurMission = () => {
  return (
    <section className="our-mission">
      <div className="our-mission-wrapper container">
        <div className="our-mission-wrapper-text">
          <h3 className="our-mission-wrapper-text-title">Наша миссия</h3>
          <p className="our-mission-wrapper-text-subtext">
            Мы объединяем разносторонний опыт в области digital-маркетинга для создания успешных
            персонализированных решений, которые помогают клиентам достигать их бизнес-целей с
            партнером, которому доверяют.
          </p>
        </div>
        <div className="our-mission-wrapper-img-box">
          <img
            className="our-mission-wrapper-img-box-img"
            src="/assets/about-us/our-mission/our-mission-umbrella.png"
            alt="Umrella agency"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
