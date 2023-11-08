import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { Navigation, NavigationLink, NavigationLinkButton, NavigationLinkList } from './Navigation';
import './Navigation.scss';

interface NavigationProps extends HTMLAttributes<HTMLDivElement> {
  /* TODO: `center` should probably not be a boolean property, but an enum such as `appearance` */
  center?: boolean;
  links?: { href: string; label: string }[];
}

export const ExampleNavigation = ({
  links = [
    {
      label: 'Home',
      href: '#',
    },
    {
      label: 'About',
      href: '#',
    },
    {
      label: 'Services',
      href: '#',
    },
    {
      label: 'Portfolio',
      href: '#',
    },
    {
      label: 'Contact',
      href: '#',
    },
    {
      label: 'Uitloggen',
      href: '',
    },
  ],
  center = true,
}: NavigationProps) => (
  <Navigation center={center}>
    <NavigationLinkList center={center}>
      {links.map(({ label, href }) =>
        href ? (
          <NavigationLink center={center} href={href}>
            {label}
          </NavigationLink>
        ) : (
          <NavigationLinkButton className="example-navbar__link">{label}</NavigationLinkButton>
        ),
      )}
    </NavigationLinkList>
  </Navigation>
);

ExampleNavigation.displayName = 'ExampleNavigation';
