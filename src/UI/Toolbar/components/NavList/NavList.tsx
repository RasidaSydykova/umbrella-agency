import React from 'react';
import Link from 'next/link';
import './NavList.scss';

const NavList = () => {
  return (
    <nav className="nav">
      <ul className="lists">
        <li className="list">
          <Link href="/">
            Услуги
            <img className="arrow" src="/assets/arrow.svg" alt="arrow" />
          </Link>
        </li>
        <li className="list">
          <Link href="/about-us">О компании</Link>
        </li>
        <li className="list">
          <Link href="#our-approach">Наш подход</Link>
        </li>
        <li className="list">
          <Link href="#contacts">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;