import React from 'react';
import './Main.scss';

const Main = () => {
  const bannerMainImg = `url("/assets/service/service-banner.jpg")`;
  const bannerImg = `url("/assets/service/target.gif")`;

  return (
    <section className="service-main">
      <div
        className="service-main-banner"
        style={{ backgroundImage: bannerMainImg, backgroundSize: 'cover' }}
      >
        <div className="service-main-wrapper container">
          <div className="service-main-wrapper-inner">
            <div className="service-main-wrapper-inner-content">
              <span className="service-main-wrapper-inner-content-type">Стратегия и аудит</span>
              <h1 className="service-main-wrapper-inner-content-title">
                Мы стремимся стать партнером в digital-маркетинге, которому вы доверяете
              </h1>
            </div>

            <div className="service-main-wrapper-inner-img-box">
              <img
                className="service-main-wrapper-inner-img-box-img"
                src="/assets/service/target.gif"
                alt="Target"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
