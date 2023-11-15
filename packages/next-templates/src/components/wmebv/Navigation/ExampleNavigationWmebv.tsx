import { Link } from '@utrecht/component-library-react';
import React, { HTMLAttributes } from 'react';
import { ExampleNavigation } from '../../ExampleNavigation/ExampleNavigation';
import './Navigation.scss';

interface ExampleNavigationWmebvProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleNavigationWmebv = ({ ...props }: ExampleNavigationWmebvProps) => (
  <ExampleNavigation
    links={[
      { label: 'Home', href: '/' },
      { label: 'Wonen en leven', href: '/wonen-en-leven/' },
      { label: 'Zorg en onderwijs', href: '/zorg-en-onderwijs/' },
      { label: 'Werk en inkomen', href: '/werk-en-inkomen/' },
      { label: 'Contact', href: '/wmebv/' },
    ]}
  ></ExampleNavigation>
);

ExampleNavigationWmebv.displayName = 'ExampleNavigationWmebv';
