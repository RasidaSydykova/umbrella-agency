import React from 'react';
import './FounderCard.scss';
import { Founder } from '../../../../../../types';

interface Props {
  founder: Founder;
}

const FounderCard: React.FC<Props> = ({ founder }) => {
  return (
    <div className="founder-card">
      <div className="founder-card-wrapper">
        <div className="founder-card-wrapper-img-box">
          <img className="founder-card-wrapper-img-box-img" src={founder.image} alt="Our work" />
        </div>
        <div className="founder-card-wrapper-information">
          <p className="founder-card-wrapper-text">{founder.quote}</p>
        </div>
      </div>
      <div className="founder-card-personal-information">
        <p className="founder-card-personal-information-name">{founder.fullname}</p>
        <p className="founder-card-personal-information-company">
          <span>{founder.position} </span>
          {founder.description}
        </p>
      </div>
    </div>
  );
};

export default FounderCard;
