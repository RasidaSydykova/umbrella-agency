import React from 'react';
import './FooterContactInfo.scss';

const FooterContactInfo = () => {
  return (
    <div className="footer-contact-info">
      <a className="footer-contact-info-link phone" href="tel:+996704204846">
        +996 704 20 48 46
      </a>
      <a
        className="footer-contact-info-link email"
        href="mailto:umbrella.agency@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        Umbrella.agency@gmail.com
      </a>
      <span className="footer-contact-info-link address">
        901 Thornridge Cir. Shiloh, Hawaii 81063
      </span>
    </div>
  );
};

export default FooterContactInfo;
