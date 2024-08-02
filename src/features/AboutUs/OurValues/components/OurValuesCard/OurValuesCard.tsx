import React from 'react';
import './OurValuesCard.scss';

interface Props {
  src: string;
  text: string;
}

const OurValuesCard: React.FC<Props> = ({ src, text }) => {
  const iconLink = `url(${src})`;

  return (
    <div className="our-values-card">
      <p className="our-values-card-text" style={{ backgroundImage: iconLink }}>
        {text}
      </p>
    </div>
  );
};

export default OurValuesCard;
