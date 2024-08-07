import React from 'react';
import './Main.scss';

interface Props {
  title?: string;
  short_description_for_banner?: string;
  gif?: string;
}

const Main: React.FC<Props> = ({ title, short_description_for_banner, gif }) => {
  const bannerMainImg = `url("/assets/service/service-banner.jpg")`;

  return (
    <section className="service-main">
      <div
        className="service-main-banner"
        style={{ backgroundImage: bannerMainImg, backgroundSize: 'cover' }}
      >
        <div className="service-main-wrapper container">
          <div className="service-main-wrapper-inner">
            <div className="service-main-wrapper-inner-content">
              <span className="service-main-wrapper-inner-content-type">{title}</span>
              <h1 className="service-main-wrapper-inner-content-title">
                {short_description_for_banner}
              </h1>
            </div>

            <div className="service-main-wrapper-inner-img-box">
              <img className="service-main-wrapper-inner-img-box-img" src={gif} alt="Target" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
