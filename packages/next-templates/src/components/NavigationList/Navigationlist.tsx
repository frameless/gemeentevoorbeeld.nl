import React, { HTMLAttributes, PropsWithChildren } from 'react';
import './Navigationlist.css';

interface NavigationListProps extends HTMLAttributes<HTMLUListElement> {}
export const NavigationList = ({ children, ...props }: NavigationListProps) => (
  <ul className={'voorbeeld-navigation-list'} style={{ listStyleType: 'none' }} {...props}>
    {children}
  </ul>
);

NavigationList.displayName = 'NavigationList';
