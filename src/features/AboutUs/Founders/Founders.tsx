import React from 'react';
import './Founders.scss';
import FounderCard from '@/features/AboutUs/Founders/components/FounderCard/FounderCard';

const Founders = () => {
  return (
    <section className="founders container">
      <h2 className="founders-title">Основатели</h2>
      <div className="founders-cards">
        {[...Array(3)].map((_, index) => (
          <FounderCard
            key={index}
            img="/assets/about-us/founders/founder-img.jpg"
            text="“Мы верим в силу интегрированного подхода, объединяющего клиентский и агентский опыт”"
            name="Андрей Александров"
            company="Бывший маркетинг-директор компании из списка Forbes"
          />
        ))}
      </div>
    </section>
  );
};

export default Founders;
