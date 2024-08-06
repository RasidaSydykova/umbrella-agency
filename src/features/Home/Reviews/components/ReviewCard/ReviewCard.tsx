import React from 'react';
import './ReviewCard.scss';
import { positions } from '@mui/system';

interface Props {
  img: string;
  name: string;
  company: string;
  position: string;
  review: string;
}

const ReviewCard: React.FC<Props> = ({ img, name, company, position, review }) => {
  return (
    <div className="review-card">
      <div className="content-wrapper">
        <div className="img-box">
          <img className="img" src={img} alt="Review" />
        </div>
        <div className="information">
          <span className="name">{name}</span>
          <p className="company">
            <span>{company} </span>
            {position}
          </p>
        </div>
      </div>
      <p className="review">{review}</p>
    </div>
  );
};

export default ReviewCard;
