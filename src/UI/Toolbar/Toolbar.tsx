'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import NavList from '@/UI/Toolbar/components/NavList/NavList';
import ApplicationButton from '@/components/ApplicationButton/ApplicationButton';
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
          <ApplicationButton />
        </div>
      </div>
    </header>
  );
};

export default Toolbar;
