import { Link } from '@utrecht/component-library-react';
import React, { HTMLAttributes } from 'react';
import './Navigationlist.css';

interface NavigationListItemProps extends HTMLAttributes<HTMLElement> {
  href: string;
  label: string;
}

export const NavigationListItem = ({ href, label }: NavigationListItemProps) => (
  <li className="voorbeeld-navigation-list__item">
    <Link href={href}>{label}</Link>
  </li>
);

NavigationListItem.displayName = 'NavigationListItem';
