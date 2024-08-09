'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import DropdownList from '@/UI/Toolbar/components/Dropdown/DropdownList';
import './NavList.scss';
import { useDispatch } from 'react-redux';
import { fetchServices } from '@/features/Home/Services/servicesThunk';
import { selectServices } from '@/features/Home/Services/servicesSlice';
import { useAppSelector } from '@/lib/hooks';

interface Props {
  isMobile?: boolean;
}

const NavList: React.FC<Props> = ({ isMobile }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch()
  const services = useAppSelector(selectServices);

  useEffect(() => {
    dispatch(fetchServices())
  }, [])

  const dropdownData = services.map((service) => {return {
    title: service.title, list: service.category?.map((tab) => {return tab.title}), id: service.id
  }})

  const handleItemClick = () => {
    setOpen(false);
    setIsHovered(false);
  };

  return (
    <nav className="nav">
      <ul className="lists">
        <li
          className="list service"
          onClick={() => setOpen(!open)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Услуги
          {isMobile ? (
            ''
          ) : (
            <img
              className="arrow"
              src={isHovered ? '/assets/arrow-green.svg' : '/assets/arrow.svg'}
              alt="umbrella"
              style={{
                transform: open ? 'rotate(-90deg)' : 'rotate(0deg)',
                transition: 'transform 0.5s ease',
              }}
            />
          )}
          {isMobile && (
            <img
              className="arrow"
              src={isHovered ? '/assets/arrow-right-green.svg' : '/assets/arrow-right.svg'}
              alt="umbrella"
              style={{
                transition: 'transform 0.5s ease',
              }}
            />
          )}
          {open && (
            <div className={open ? 'dropdown active' : 'dropdown'}>
              <h6 className="dropdown-title">{dropdownData[0]?.title}</h6>
              {dropdownData.map((item, index) => (
                <DropdownList key={index} list={item.list} id={item.id}/>
              ))}
            </div>
          )}
        </li>
        <li className="list">
          <Link href="/about-us" onClick={handleItemClick}>
            О компании
          </Link>
        </li>
        <li className="list">
          <Link href="/#our-approach" onClick={handleItemClick}>
            Наш подход
          </Link>
        </li>
        <li className="list">
          <Link href="/#contacts" onClick={handleItemClick}>
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
