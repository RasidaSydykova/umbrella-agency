import React from 'react';
import './VacancyCard.scss';
import Link from 'next/link';
import { Vacancy } from '../../../../../../types';

interface Props {
  vacancy: Vacancy;
}

const VacancyCard: React.FC<Props> = ({ vacancy }) => {
  return (
    <div className="vacancy-card">
      <div className="vacancy-card-wrapper">
        <div className="vacancy-card-wrapper-content">
          <h5 className="vacancy-card-wrapper-content-title">{vacancy.title}</h5>
          <p className="vacancy-card-wrapper-content-text">{vacancy.description}</p>
          {/*<ul className="vacancy-card-wrapper-content-list">*/}
          {/*  {list.map((item, index) => (*/}
          {/*    <li key={index} className="vacancy-card-wrapper-content-list-item">*/}
          {/*      {item}*/}
          {/*    </li>*/}
          {/*  ))}*/}
          {/*</ul>*/}
          <span>вы нам подходите</span>
        </div>
        <div className="vacancy-card-wrapper-link">
          <Link href={vacancy.url}>Посмотреть на вакансию</Link>
        </div>
      </div>
    </div>
  );
};

export default VacancyCard;
