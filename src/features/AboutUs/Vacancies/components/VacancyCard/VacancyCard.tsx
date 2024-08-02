import React from 'react';
import './VacancyCard.scss';
import Link from 'next/link';

interface Props {
  title: string;
  text: string;
  list: string[];
}

const VacancyCard: React.FC<Props> = ({ title, text, list }) => {
  return (
    <div className="vacancy-card">
      <div className="vacancy-card-wrapper">
        <div className="vacancy-card-wrapper-content">
          <h5 className="vacancy-card-wrapper-content-title">{title}</h5>
          <p className="vacancy-card-wrapper-content-text">{text}</p>
          <ul className="vacancy-card-wrapper-content-list">
            {list.map((item, index) => (
              <li key={index} className="vacancy-card-wrapper-content-list-item">
                {item}
              </li>
            ))}
          </ul>
          <span>вы нам подходите</span>
        </div>
        <div className="vacancy-card-wrapper-link">
          <Link href="/">Посмотреть на вакансию</Link>
        </div>
      </div>
    </div>
  );
};

export default VacancyCard;
