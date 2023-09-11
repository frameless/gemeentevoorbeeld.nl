import React, { HTMLAttributes, PropsWithChildren } from 'react';
import './index.css';

interface NavigationListProps extends PropsWithChildren<HTMLAttributes<HTMLUListElement>> {}
export const NavigationList = ({ children }: NavigationListProps) => (
  <ul className="voorbeeld-navigation-list">{children}</ul>
);

NavigationList.displayName = 'NavigationList';
