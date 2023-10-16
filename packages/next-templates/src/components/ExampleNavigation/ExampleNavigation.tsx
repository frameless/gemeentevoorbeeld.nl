import { Link } from '@utrecht/component-library-react';
import React, { HTMLAttributes } from 'react';
import './Navigation.css';

interface ExampleNavigationProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleNavigation = ({ ...props }: ExampleNavigationProps) => (
  <div className="example--header-navbar" {...props}>
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
);

ExampleNavigation.displayName = 'ExampleHeader';
