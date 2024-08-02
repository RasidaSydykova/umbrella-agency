import React from 'react';
import './Vacancies.scss';
import VacancyCard from '@/features/AboutUs/Vacancies/components/VacancyCard/VacancyCard';

const Vacancies = () => {
  const jobList = [
    'быстро адаптируетесь к ситуациям',
    'имеете хорошие коммуникативные навыки',
    'умеете организовывать рабочий процесс',
  ];

  return (
    <section className="vacancies container">
      <h3 className="vacancies-title">Вакансии</h3>
      <div className="vacancies-cards">
        {[...Array(4)].map((_, index) => (
          <VacancyCard
            key={index}
            title="Продуктовый менеджер"
            text="Мы всегда талантливых и увлеченных продуктовых менеджеров. Если вы:"
            list={jobList}
          />
        ))}
      </div>
    </section>
  );
};

export default Vacancies;
