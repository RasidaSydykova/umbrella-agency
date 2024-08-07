'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import NavList from '@/UI/Toolbar/components/NavList/NavList';
import FormLink from '@/components/FormLink/FormLink';
import '../Toolbar/Toolbar.scss';

const Toolbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="content">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-wrapper-logo-desktop">
              <Link className="header-wrapper-logo-desktop-link" href="/">
                <img
                  className="header-wrapper-logo-desktop-logo-img"
                  src="/assets/toolbar/logo.svg" // Default logo
                  alt="Umbrella agency"
                />
              </Link>
            </div>

            <div className="header-wrapper-nav">
              <NavList />
            </div>

            <div className="header-wrapper-link-button">
              <FormLink />
            </div>

            <div className="header-wrapper-mobile">
              <div className="header-wrapper-mobile-burger">
                {open ? (
                  <img
                    src="/assets/toolbar/close-menu.svg"
                    alt="Close"
                    onClick={() => setOpen(!open)}
                  />
                ) : (
                  <img src="/assets/toolbar/menu.svg" alt="Menu" onClick={() => setOpen(!open)} />
                )}
              </div>
              <div
                className={
                  open ? 'header-wrapper-mobile-menu active' : 'header-wrapper-mobile-menu'
                }
              >
                <div className="header-wrapper-mobile-menu-logo">
                  <Link className="header-wrapper-mobile-menu-logo-link" href="/">
                    <img
                      className="header-wrapper-mobile-menu-logo-img"
                      src="/assets/toolbar/logo-mobile.svg"
                      alt="Umrella agency"
                    />
                  </Link>
                </div>
                <div className="header-wrapper-mobile-menu-nav">
                  <NavList isMobile={true} />
                  <FormLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Toolbar;
