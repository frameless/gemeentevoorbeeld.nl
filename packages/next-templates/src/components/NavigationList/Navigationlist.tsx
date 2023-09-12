import React, { HTMLAttributes, PropsWithChildren } from 'react';
import './index.css';

interface NavigationListProps extends HTMLAttributes<HTMLUListElement> {}
export const NavigationList = ({ children, ...props }: NavigationListProps) => (
  <ul className={'voorbeeld-navigation-list'} {...props}>
    {children}
  </ul>
);

NavigationList.displayName = 'NavigationList';
