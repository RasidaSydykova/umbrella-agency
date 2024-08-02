import React from 'react';
import FooterTop from '@/UI/Footer/components/FooterTop/FooterTop';
import FooterBottom from '@/UI/Footer/components/FooterBottom/FooterBottom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer" id="contacts">
      <div className="top">
        <FooterTop />
      </div>
      <div className="bottom">
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
