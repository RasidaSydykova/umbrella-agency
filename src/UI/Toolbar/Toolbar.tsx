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
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link className="link" href="/">
              <img className="img" src="/assets/toolbar/logo.svg" alt="Umrella agency" />
            </Link>
          </div>

          <NavList />

          <div className="link-button">
            <FormLink />
          </div>

          <div className="mobile">
            <div className="burger">
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
            <div className={open ? 'menu active' : 'menu'}>
              <NavList />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Toolbar;
