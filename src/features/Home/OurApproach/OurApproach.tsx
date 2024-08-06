import React from 'react';
import './OurApproach.scss';

const OurApproach = () => {
  return (
    <section className="our-approach" id="our-approach">
      <div className="our-approach-content container">
        <div className="our-approach-content-wrapper">
          <h3 className="our-approach-content-wrapper-title">Наш подход</h3>
          <p className="our-approach-content-wrapper-text">
            Мы называем наш подход <b>«зонтичным решением»</b>, когда через детальную диагностику
            вашего бизнеса мы разрабатываем уникальные стратегии продвижения, которые точно
            соответствуют вашим потребностям и целям. Мы тщательно анализируем вашу целевую
            аудиторию, выявляем её драйверы и «боли» и{' '}
            <b>создаём решения, которые эффективно и правильно адресуют нужную коммуникацию.</b>
          </p>
        </div>
        <div className="our-approach-content-img-box">
          <img
            className="our-approach-content-img-box-img"
            src="/assets/home/our-approach/umrella.svg"
            alt="Umrella agency"
          />
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
