import React from 'react';
import './AboutUsCard.scss';

interface Props {
  img: string;
  title: string;
  text: string;
}

const AboutUsCard: React.FC<Props> = ({ img, title, text }) => {
  return (
    <div className="about-us-card">
      <div className="about-us-card-img-box">
        <img className="about-us-card-img-box-img" src={img} alt="Line chart" />
      </div>

      <div className="about-us-card-information">
        <h6 className="about-us-card-information-title">{title}</h6>
        <p className="about-us-card-information-text">{text}</p>
      </div>
    </div>
  );
};

export default AboutUsCard;
