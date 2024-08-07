import React from 'react';
import Link from 'next/link';
import './FooterBottom.scss';

const FooterBottom = () => {
  return (
    <div className="footerBottom">
      <div className="footer-bottom container">
        <div className="footer-bottom-logo">
          <img
            className="footer-bottom-logo-img"
            src="/assets/footer/footer-logo.svg"
            alt="Umrella agency"
          />
          <span className="footer-bottom-logo-rights">Все права защищены</span>
        </div>

        <div className="footer-bottom-nav">
          <ul className="footer-bottom-nav-lists">
            <li className="footer-bottom-nav-lists-list">
              <Link className="footer-bottom-nav-lists-list" href="/">Стратегия и аудит</Link>
            </li>
            <li className="footer-bottom-nav-lists-list">
              <Link className="footer-bottom-nav-lists-list" href="/">PPC</Link>
            </li>
            <li className="footer-bottom-nav-lists-list">
              <Link className="footer-bottom-nav-lists-list" href="/">SEO</Link>
            </li>
          </ul>
        </div>

        <div className="footer-bottom-nav">
          <ul className="footer-bottom-nav-lists">
            <li className="footer-bottom-nav-lists-list">
              <Link className="footer-bottom-nav-lists-list" href="/">Консалтинг</Link>
            </li>
            <li className="footer-bottom-nav-lists-list">
              <Link className="footer-bottom-nav-lists-list" href="/">Email-маркетинг</Link>
            </li>
            <li className="footer-bottom-nav-lists-list">
              <Link className="footer-bottom-nav-lists-list" href="/">Digital-аналитика</Link>
            </li>
          </ul>
        </div>

        <div className="footer-bottom-social-links">
          <a className="link whatsapp" href="/" target="_blank" rel="noreferrer"></a>
          <a className="link instagram" href="/" target="_blank" rel="noreferrer"></a>
          <a className="link facebook" href="/" target="_blank" rel="noreferrer"></a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
