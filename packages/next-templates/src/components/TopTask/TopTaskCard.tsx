/**
 * @license EUPL-1.2
 * Copyright (c) 2024 Gemeentevoorbeeld.nl
 * Copyright (c) 2024 Ryan van Valkenhoef
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import './TopTaskCard.css';
import { UtrechtIcon } from '@utrecht/web-component-library-react';

export interface TopTaskCardProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
}

export const TopTaskHeader = forwardRef(
  (
    { children, className, icon, ...restProps }: PropsWithChildren<TopTaskCardProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div ref={ref} className={clsx('example-toptask-card', className)} {...restProps}>
        {icon && <UtrechtIcon className="example-toptask-card__icon">{icon}</UtrechtIcon>}
        {children}
      </div>
    );
  },
);

TopTaskHeader.displayName = 'TopTaskCard';
