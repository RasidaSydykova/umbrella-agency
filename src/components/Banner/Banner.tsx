import React from 'react';
import './Banner.scss';

interface Props {
  src: string;
  title: string;
  subTitle: string;
}

const Banner: React.FC<Props> = ({ src, title, subTitle }) => {
  const bannerLink = `url(${src})`;

  return (
    <div className="banner" style={{ backgroundImage: bannerLink, backgroundSize: 'cover' }}>
      <div className="banner-wrapper container">
        <div className="banner-wrapper-row">
          <h1 className="banner-wrapper-row-title">{title}</h1>
          <p className="banner-wrapper-row-subtitle">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
