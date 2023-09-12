import React, { HTMLAttributes, PropsWithChildren } from 'react';

interface NavigationListProps extends PropsWithChildren<HTMLAttributes<HTMLUListElement>> {}
export const NavigationList = ({ children }: NavigationListProps) => (
  <ul className="voorbeeld-navigation-list" style={{ listStyleType: 'none' }}>
    {children}
  </ul>
);

NavigationList.displayName = 'NavigationList';
