import React from 'react';
import OurValuesCard from '@/features/AboutUs/OurValues/components/OurValuesCard/OurValuesCard';
import './OurValues.scss';

const OurValues = () => {
  return (
    <section className="our-values container">
      <h3 className="our-values-title">Наши ценности</h3>
      <div className="our-values-cards">
        <div className="our-values-cards-top">
          <OurValuesCard src="/assets/about-us/our-values/trust.svg" text="Партнерство и доверие" />
          <OurValuesCard
            src="/assets/about-us/our-values/insight.svg"
            text="Проактивность и энтузиазм"
          />
          <OurValuesCard
            src="/assets/about-us/our-values/lead-management.svg"
            text="Профессионализм и командный результат"
          />
        </div>
        <div className="our-values-cards-bottom">
          <OurValuesCard
            src="/assets/about-us/our-values/flame.svg"
            text="Вовлеченность и любознательность"
          />
          <OurValuesCard
            src="/assets/about-us/our-values/care.svg"
            text="Забота о клиенте и персонализированный подход"
          />
        </div>
      </div>
    </section>
  );
};

export default OurValues;
