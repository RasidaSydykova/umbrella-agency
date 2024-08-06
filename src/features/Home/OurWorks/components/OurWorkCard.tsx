import React from 'react';
import { Portfolio } from '../../../../../types';
import './OurWorkCard.scss';

interface Props {
  portfolio: Portfolio;
}

const OurWorkCard: React.FC<Props> = ({ portfolio }) => {
  return (
    <div className="our-works-card">
      <div className="our-works-card-img-box">
        <img className="our-works-card-img-box-img" src={portfolio.image} alt="Our work" />
      </div>
      <div className="our-works-card-information">
        <p className="our-works-card-information-text">{portfolio.title}</p>
        <span className="our-works-card-information-bold-text">{portfolio.price}</span>
      </div>
    </div>
  );
};

export default OurWorkCard;
