import React from 'react';
import FooterTop from '@/UI/Footer/components/FooterTop/FooterTop';
import FooterBottom from '@/UI/Footer/components/FooterBottom/FooterBottom';
import './FormPage.scss';

const FormPage = () => {
  return (
      <section className="formPage">
        <div className="top">
          <FooterTop />
        </div>
        <div className="bottom">
          <FooterBottom />
        </div>
      </section>
  );
};

export default FormPage;
