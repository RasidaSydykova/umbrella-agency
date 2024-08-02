import React from 'react';
import './FounderCard.scss';

interface Props {
  img: string;
  text: string;
  name: string;
  company: string;
}

const FounderCard: React.FC<Props> = ({ img, text, name, company }) => {
  return (
    <div className="founder-card">
      <div className="founder-card-wrapper">
        <div className="founder-card-wrapper-img-box">
          <img className="founder-card-wrapper-img-box-img" src={img} alt="Our work" />
        </div>
        <div className="founder-card-wrapper-information">
          <p className="founder-card-wrapper-text">{text}</p>
        </div>
      </div>
      <div className="founder-card-personal-information">
        <p className="founder-card-personal-information-name">{name}</p>
        <p className="founder-card-personal-information-company">{company}</p>
      </div>
    </div>
  );
};

export default FounderCard;
