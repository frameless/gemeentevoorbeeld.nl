'use client';
import { Button, Link, PageHeader, Textbox } from '@utrecht/component-library-react';
import Logo from './styling/assets/voorbeeld.svg';
import './styling/component-styles/header.css';

export default function Home() {
  return (
    <main className="voorbeeld-theme">
      <PageHeader className="header--home-page">
        {/* SVGR gebruiken ipv react-component*/}
        <div className="logo">
          <Logo />
        </div>
        <div className="header-items">
          <div className="nav-links">
            <Link>Mijn omgeving</Link>
            <Link>Contact</Link>
          </div>
          <div className="search-box">
            <Textbox placeholder="Bijvoorbeeld zwembad of grofvuil" />
            <Button>Zoeken</Button>
          </div>
        </div>
      </PageHeader>
    </main>
  );
}
