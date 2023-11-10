import { Link } from '@utrecht/component-library-react';
import React, { HTMLAttributes } from 'react';
import { ExampleNavigation } from '../../ExampleNavigation/ExampleNavigation';
import './Navigation.scss';

interface ExampleNavigationWmebvProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleNavigationWmebv = ({ ...props }: ExampleNavigationWmebvProps) => (
  <ExampleNavigation
    links={[
      { label: 'Home', href: '' },
      { label: 'Wonen en leven', href: '' },
      { label: 'Zorg en onderwijs', href: '' },
      { label: 'Werk en inkomen', href: '' },
      { label: 'Contact', href: '' },
    ]}
  ></ExampleNavigation>
);

ExampleNavigationWmebv.displayName = 'ExampleNavigationWmebv';
