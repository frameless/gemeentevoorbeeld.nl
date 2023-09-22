import { Link } from '@utrecht/component-library-react';
import React, { HTMLAttributes } from 'react';
import './Navigation.css';

interface ExampleNavigationProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleNavigation = ({ ...props }: ExampleNavigationProps) => (
  <div className="example--header-navbar">
    <Link className="example--header-navbar-active" href="#">
      Home
    </Link>
    <Link href="#">About</Link>
    <Link href="#">Services</Link>
    <Link href="#">Portfolio</Link>
    <Link href="#">Contact</Link>
  </div>
);

ExampleNavigation.displayName = 'ExampleHeader';
