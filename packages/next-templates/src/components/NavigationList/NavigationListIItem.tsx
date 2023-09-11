import { Link } from '@utrecht/component-library-react';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import './index.css';

interface NavigationListItemProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  href: string;
  label: string;
}
export const NavigationListItem = ({ href, label }: NavigationListItemProps) => (
  <li className="voorbeeld-navigation-list__item">
    <Link href={href}>{label}</Link>
  </li>
);

NavigationListItem.displayName = 'NavigationListItem';
