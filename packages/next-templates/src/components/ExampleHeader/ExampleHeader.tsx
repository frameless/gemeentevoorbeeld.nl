import { Button, Link, PageHeader, Textbox } from '@utrecht/component-library-react';
import Logo from '../../app/styling/assets/voorbeeld-header.svg';
import Search from '../../app/styling/assets/searchbar-icon.svg';
import User from '../../app/styling/assets/user-icon.svg';
import React, { HTMLAttributes } from 'react';
import './header.css';

interface ExampleHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleHeader = ({ ...props }: ExampleHeaderProps) => (
  <PageHeader className="example--header-home-page">
    <button
      aria-label="collapse menu navigation"
      className="example--header-burger-menu-button"
      popoverTarget="popovertest"
    >
      <div className="example--header-burger-bar-container">
        <span className="example--header-bar"></span>
        <span className="example--header-bar"></span>
        <span className="example--header-bar"></span>
      </div>
      Menu
    </button>
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
    <div id="popovertest" role="dialog" popover>
      <button popoverTarget="popover" popoverTargetAction="hide">
        <span aria-hidden="true">❌</span>
        <p>Close</p>
      </button>
      <div>
        <div>
          <h2>Pine Forest</h2>
          <p>pine and balsam | 12oz | soy wax</p>
          <p>
            Transport yourself into an earthy forest with notes of fresh pine and balsam. This candle is perfect for
            winding down on the weekend with a good book. <br />
            <br /> Burn time: 40 hours.
          </p>
          <p className="product-preview-price">$36.99</p>
        </div>
      </div>
    </div>
  </PageHeader>
);

ExampleHeader.displayName = 'ExampleHeader';
