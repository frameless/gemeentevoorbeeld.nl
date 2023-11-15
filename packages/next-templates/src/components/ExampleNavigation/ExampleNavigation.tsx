import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { Navigation, NavigationLink, NavigationLinkButton, NavigationLinkList, useNavigation } from './Navigation';
import './Navigation.scss';

export const ExampleNavigation = () => (
  <Navigation
    {...useNavigation({
      links: [
        { label: 'Home', href: '/' },
        { label: 'Wonen en leven', href: '/wonen-en-leven/' },
        { label: 'Zorg en onderwijs', href: '/zorg-en-onderwijs/' },
        { label: 'Werk en inkomen', href: '/werk-en-inkomen/' },
        { label: 'Contact', href: '/wmebv/' },
      ],
    })}
  />
);

ExampleNavigation.displayName = 'ExampleNavigation';
