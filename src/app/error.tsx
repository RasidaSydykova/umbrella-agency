'use client';
import React from 'react';
import ErrorPage from '@/features/ErrorPage/ErrorPage';

const Error = () => {
  return (
    <ErrorPage
      error="502"
      title="Плохой шлюз"
      subTitle="К сожалению, веб-сервер получил недействительный ответ от прокси-сервера или шлюза,
      к которому он пытался получить доступ"
    />
  );
};

export default Error;
