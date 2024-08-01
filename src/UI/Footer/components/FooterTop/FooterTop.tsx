import React from 'react';
import FooterForm from '@/UI/Footer/components/FooterForm/FooterForm';
import FooterContactInfo from '@/UI/Footer/components/FooterContactInfo/FooterContactInfo';
import './FooterTop.scss';

const FooterTop = () => {
  return (
    <div className="footer-top container">
      <div className="footer-top-left">
        <p className="footer-top-left-title">Оставьте заявку и получите бесплатную консультацию</p>
        <div className="footer-top-left-info">
          <FooterContactInfo />
        </div>
      </div>

      <div className="footer-top-right">
        <p className="footer-top-right-title">Наши менеджеры ответят вам в течение 15 минут</p>
        <div className="footer-top-right-form">
          <FooterForm />
        </div>
      </div>
      <div className="footer-top-info">
        <FooterContactInfo />
      </div>
    </div>
  );
};

export default FooterTop;