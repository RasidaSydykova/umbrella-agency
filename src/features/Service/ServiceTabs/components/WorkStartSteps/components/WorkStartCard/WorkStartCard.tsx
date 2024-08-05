import React from 'react';
import './WorkStartCard.scss';

interface Props {
  index: number;
  title: string;
  text: string;
}

const WorkStartCard: React.FC<Props> = ({ index, title, text }) => {
  return (
    <div className="work-start-card">
      <span className="work-start-card-index">{index}</span>
      <h6 className="work-start-card-title">{title}</h6>
      <p className="work-start-card-text">{text}</p>
    </div>
  );
};

export default WorkStartCard;
