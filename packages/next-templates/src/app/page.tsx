'use client';
import { Button, Link, PageHeader, Textbox } from '@utrecht/component-library-react';
import Logo from './styling/assets/voorbeeld-footer.svg';
import './styling/component-styles/header.css';

export default function Home() {
  return (
    <main className="voorbeeld-theme">
      <PageHeader className="example--header-home-page">
        {/* SVGR gebruiken ipv react-component*/}
        <div className="logo">
          <Logo />
        </div>
        <div className="example--header-items">
          <div className="example--nav-links">
            <Link>Mijn omgeving</Link>
            <Link>Contact</Link>
          </div>
          <div className="example--search-box">
            <Textbox placeholder="Bijvoorbeeld zwembad of grofvuil" />
            <Button>Zoeken</Button>
          </div>
        </div>
      </PageHeader>
    </main>
  );
}
