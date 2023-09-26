import { Button, Link, PageHeader, Textbox } from '@utrecht/component-library-react';
import { PopOverButton } from '../PopOver/PopOverButton';
import { PopOverDialog } from '../PopOver/PopOverDialog';
import Logo from '../../app/styling/assets/voorbeeld-header.svg';
import Search from '../../app/styling/assets/searchbar-icon.svg';
import Xbold from '../../app/styling/assets/x-bold.svg';
import User from '../../app/styling/assets/user-icon.svg';
import React, { HTMLAttributes } from 'react';
import '@utrecht/component-library-css';
import './header.css';
import './header.scss';

interface ExampleHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleHeader = ({ ...props }: ExampleHeaderProps) => (
  <PageHeader className="example--header-home-page">
    <PopOverButton
      aria-label="collapse menu navigation"
      className="example--header-burger-menu-button"
      popoverTarget="popovermenu"
    >
      <div className="example--header-burger-bar-container">
        <span className="example--header-bar"></span>
        <span className="example--header-bar"></span>
        <span className="example--header-bar"></span>
      </div>
      Menu
    </PopOverButton>
    <div className="example--logo">
      <Logo />
    </div>
    <div className="example--header-items">
      <div className="example--header-links-container">
        <Link className="example--header-links">
          <User className="example--header-user-icon" /> Mijn omgeving
        </Link>
        <Link className="example--header-links">Contact</Link>
      </div>
      <div className="example--search-box">
        <Textbox className="example--header-text-box" placeholder="Bijvoorbeeld zwembad of grofvuil" />
        <Button className="example--header-search-secondary-button" appearance="secondary-action-button">
          <Search /> Zoeken
        </Button>
        <Button className="example--header-search-subtle-button" appearance="subtle-button">
          <Search /> Zoeken
        </Button>
      </div>
    </div>
    <PopOverDialog id="popovermenu" className="example--header-popover-menu" role="dialog" popover="auto">
      <div className="example--header-popover-container-button">
        <PopOverButton
          appearance="subtle-button"
          className="example--popover-close"
          popoverTarget="popovermenu"
          popoverTargetAction="hide"
        >
          <Xbold className="example--header-xlogo" />
          Sluiten
        </PopOverButton>
      </div>
      <div className="example--header-popover-container-links">
        <Link className="example--header-links">Home</Link>
        <Link className="example--header-links">About</Link>
        <Link className="example--header-links">Services</Link>
        <Link className="example--header-links">Portfolio</Link>
      </div>
      <div className="example--header-user">
        <Link className="example--header-links">Contact</Link>
        <Link className="example--header-links">
          <User className="example--header-user-icon" /> Mijn omgeving
        </Link>
      </div>
    </PopOverDialog>
  </PageHeader>
);

ExampleHeader.displayName = 'ExampleHeader';
