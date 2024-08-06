'use client';
import React, { useEffect } from 'react';
import './ErrorPage.scss';
import Toolbar from '@/UI/Toolbar/Toolbar';

interface Props {
  error: string;
  title: string;
  subTitle: string;
}

const ErrorPage: React.FC<Props> = ({ error, title, subTitle }) => {
  useEffect(() => {
    document.title = `${error}`;
  }, []);

  return (
    <div>
      <Toolbar background="inherit" color="#231f20" logoSrc="/assets/logo-blue.svg" />
      <section className="notFoundPage container">
        <div className="notFoundPage-wrapper">
          <p className="notFoundPage-wrapper-error">{error}</p>
          <p className="notFoundPage-wrapper-title">{title}</p>
          <p className="notFoundPage-wrapper-subtitle">{subTitle}</p>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
