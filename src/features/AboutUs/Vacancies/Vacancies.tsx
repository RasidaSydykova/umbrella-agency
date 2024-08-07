import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectVacancies } from '@/features/AboutUs/Vacancies/vacanciesSlice';
import { fetchVacancies } from '@/features/AboutUs/Vacancies/vacanciesThunk';
import VacancyCard from '@/features/AboutUs/Vacancies/components/VacancyCard/VacancyCard';
import './Vacancies.scss';

const Vacancies = () => {
  const dispatch = useAppDispatch();
  const vacancies = useAppSelector(selectVacancies);

  useEffect(() => {
    dispatch(fetchVacancies());
  }, [dispatch]);

  return (
    <section className="vacancies container">
      <h3 className="vacancies-title">Вакансии</h3>
      <div className="vacancies-cards">
        {vacancies.map((vacancy) => (
          <VacancyCard key={vacancy.id} vacancy={vacancy} />
        ))}
      </div>
    </section>
  );
};

export default Vacancies;
