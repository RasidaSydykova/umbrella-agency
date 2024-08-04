import React, { useState } from 'react';
import Link from 'next/link';
import DropdownList from '@/UI/Toolbar/components/Dropdown/DropdownList';
import './NavList.scss';

const NavList = () => {
  const [open, setOpen] = useState<boolean>(false);

  const listData = ['Разработка стратегии Маркетинг 360'];

  const dropdownData = [
    { title: 'Поисковая оптимизация (SEO)', list: listData },
    { title: 'Поисковая оптимизация (SEO)', list: listData },
    { title: 'Поисковая оптимизация (SEO)', list: listData },
    { title: 'Поисковая оптимизация (SEO)', list: listData },
    { title: 'Поисковая оптимизация (SEO)', list: listData },
  ];

  return (
    <nav className="nav">
      <ul className="lists">
        <li className="list" onClick={() => setOpen(!open)}>
          Услуги
          <img className="arrow" src="/assets/arrow.svg" alt="arrow" />
          {open && (
            <div className={open ? 'dropdown active' : 'dropdown'}>
              <h6 className="dropdown-title">{dropdownData[0].title}</h6>
              {dropdownData.map((item, index) => (
                <DropdownList key={index} list={item.list} />
              ))}
            </div>
          )}
        </li>
        <li className="list">
          <Link href="/about-us" onClick={() => setOpen(false)}>
            О компании
          </Link>
        </li>
        <li className="list">
          <Link href="#our-approach" onClick={() => setOpen(false)}>
            Наш подход
          </Link>
        </li>
        <li className="list">
          <Link href="#contacts" onClick={() => setOpen(false)}>
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
