import React from 'react';
import './ReviewCard.scss';

interface Props {
  img: string;
  name: string;
  company: string;
  review: string;
}

const ReviewCard: React.FC<Props> = ({ img, name, company, review }) => {
  return (
    <div className="review-card">
      <div className="content-wrapper">
        <div className="img-box">
          <img className="img" src={img} alt="Review" />
        </div>
        <div className="information">
          <span className="name">{name}</span>
          <span className="company">{company}</span>
        </div>
      </div>
      <p className="review">{review}</p>
    </div>
  );
};

export default ReviewCard;
