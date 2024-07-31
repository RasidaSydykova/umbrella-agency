import React from 'react';
import Link from 'next/link';
import './OurWorkCard.scss';

interface Props {
  img: string;
  link: string;
  text: string;
  boldText: string;
}

const OurWorkCard: React.FC<Props> = ({ img, link, text, boldText }) => {
  return (
    <div className="our-works-card">
      <Link href={link}>
        <div className="our-works-card-img-box">
          <img className="our-works-card-img-box-img" src={img} alt="Our work" />
        </div>
        <div className="our-works-card-information">
          <p className="our-works-card-information-text">{text}</p>
          <span className="our-works-card-information-bold-text">{boldText}</span>
        </div>
      </Link>
    </div>
  );
};

export default OurWorkCard;
