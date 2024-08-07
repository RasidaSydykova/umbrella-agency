'use client';
import React, { useEffect } from 'react';
import './ErrorPage.scss';

interface Props {
  error: string;
  title: string;
  subTitle: string;
}

const ErrorPage: React.FC<Props> = ({ error, title, subTitle }) => {
  useEffect(() => {
    document.title = `${error}`;
  }, [error]);

  return (
    <section className="notFoundPage">
      <div className="notFoundPage-wrapper container">
        <p className="notFoundPage-wrapper-error">{error}</p>
        <p className="notFoundPage-wrapper-title">{title}</p>
        <p className="notFoundPage-wrapper-subtitle">{subTitle}</p>
      </div>
    </section>
  );
};

export default ErrorPage;
