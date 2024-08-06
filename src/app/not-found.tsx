import React from 'react';
import ErrorPage from '@/features/ErrorPage/ErrorPage';

const NotFound = () => {
  return (
    <ErrorPage
      error="404"
      title="Страница не найденa"
      subTitle="Возможно, вы ввели неправильный URL или страница была удалена"
    />
  );
};

export default NotFound;
