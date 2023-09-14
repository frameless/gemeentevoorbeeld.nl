import { Button, Link, Page, PageHeader, Textbox } from '@utrecht/component-library-react';
import Logo from '../../app/styling/assets/voorbeeld-header.svg';
import Search from '../../app/styling/assets/searchbar-icon.svg';
import User from '../../app/styling/assets/user-icon.svg';
import React, { HTMLAttributes } from 'react';
import './header.css';

interface ExampleHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleHeader = ({ ...props }: ExampleHeaderProps) => (
  <div className="example--header-navbar">
    <Link className="example--header-navbar-active">Home</Link>
    <Link>About</Link>
    <Link>Services</Link>
    <Link>Portfolio</Link>
    <Link>Contact</Link>
  </div>
);

ExampleHeader.displayName = 'ExampleHeader';
