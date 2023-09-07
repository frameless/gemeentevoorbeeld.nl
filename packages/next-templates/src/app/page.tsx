'use client';
import { Button, Link, Page, PageHeader, Textbox } from '@utrecht/component-library-react';
import Logo from './styling/assets/voorbeeld-header.svg';
import Search from './styling/assets/searchbar-icon.svg';
import User from './styling/assets/user-icon.svg';
import './styling/component-styles/header.css';

export default function Home() {
  return (
    <Page>
      <PageHeader className="example--header-home-page">
        {/* SVGR gebruiken ipv react-component*/}
        <div className="example--logo">
          <Logo />
        </div>
        <div className="example--header-items">
          <div className="example--nav-links">
            <Link>
              <User /> Mijn omgeving
            </Link>
            <Link>Contact</Link>
          </div>
          <div className="example--search-box">
            <Textbox placeholder="Bijvoorbeeld zwembad of grofvuil" />
            <Button appearance="secondary-action-button">
              <Search /> Zoeken
            </Button>
          </div>
        </div>
      </PageHeader>
      <main></main>
    </Page>
  );
}
