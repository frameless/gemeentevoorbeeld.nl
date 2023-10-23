import { Link } from '@utrecht/component-library-react';
import React, { HTMLAttributes } from 'react';
import '../Navigation.css';

interface ExampleNavigationWmebvProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleNavigationWmebv = ({ ...props }: ExampleNavigationWmebvProps) => (
  <div className="example--header-navbar">
    <Link className="example--header-navbar-links" href="#">
      Home
    </Link>
    <Link className="example--header-navbar-links" href="#">
      Wonen en leve
    </Link>
    <Link className="example--header-navbar-links" href="#">
      Zorg en onderwijs
    </Link>
    <Link className="example--header-navbar-links" href="#">
      Werk en inkomen
    </Link>
    <Link className="example--header-navbar-links" href="#">
      Contact
    </Link>
  </div>
);

ExampleNavigationWmebv.displayName = 'ExampleHeaderWmebv';
