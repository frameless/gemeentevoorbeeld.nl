import { Link } from '@utrecht/component-library-react';
import React, { HTMLAttributes } from 'react';
import './Navigation.css';

interface ExampleNavigationProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleNavigation = ({ ...props }: ExampleNavigationProps) => (
  <div className="example--header-navbar">
    <Link className="example--header-navbar-active" href="#">
      Home
    </Link>
    <Link>About</Link>
    <Link>Services</Link>
    <Link>Portfolio</Link>
    <Link>Contact</Link>
  </div>
);

ExampleNavigation.displayName = 'ExampleHeader';
