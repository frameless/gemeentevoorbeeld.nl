import { Drawer, Link } from '@utrecht/component-library-react';
import React, { HTMLAttributes } from 'react';
import './Navigation.css';
import { PopOverButton } from '../PopOver/PopOverButton';
import Xbold from '../../app/styling/assets/x-bold.svg';
import User from '../../app/styling/assets/user-icon.svg';
import { UtrechtFlexWrapFallback } from '@utrecht/web-component-library-react';

interface ExampleNavigationProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleNavigation = ({ ...props }: ExampleNavigationProps) => (
  <UtrechtFlexWrapFallback>
    <div id="nav" className="example--header-navbar" {...props}>
      <Link className="example--header-navbar-links" href="#">
        Home
      </Link>
      <Link className="example--header-navbar-links" href="#">
        About
      </Link>
      <Link className="example--header-navbar-links" href="#">
        Services
      </Link>
      <Link className="example--header-navbar-links" href="#">
        Portfolio
      </Link>
      <Link className="example--header-navbar-links" href="#">
        Contact
      </Link>
    </div>
    <Drawer data-modal="true" id="popovermenu" className="example--header-popover-menu">
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
        <Link href="#" className="example--header-links">
          Home
        </Link>
        <Link href="#" className="example--header-links">
          About
        </Link>
        <Link href="#" className="example--header-links">
          Services
        </Link>
        <Link href="#" className="example--header-links">
          Portfolio
        </Link>
      </div>
      <div className="example--header-user">
        <Link href="#" className="example--header-links">
          Contact
        </Link>
        <Link href="#" className="example--header-links">
          <User className="example--header-user-icon" /> Mijn omgeving
        </Link>
      </div>
    </Drawer>
  </UtrechtFlexWrapFallback>
);

ExampleNavigation.displayName = 'ExampleHeader';
