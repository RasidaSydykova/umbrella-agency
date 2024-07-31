import React from 'react';
import Link from 'next/link';
import '@/components/FormLink/FormLink.scss';

const FormLink = () => {
  return (
    <div className="form-link">
      <Link className="form-link-btn" href="/form">
        Оставить заявку
        <img
          className="form-link-btn-arrow"
          src="/assets/umbrella-arrow-white.svg"
          alt="umbrella"
        />
      </Link>
    </div>
  );
};

export default FormLink;
