/**
 * @license EUPL-1.2
 * Copyright (c) 2024 Gemeentevoorbeeld.nl
 * Copyright (c) 2024 Ryan van Valkenhoef
 */

import clsx from 'clsx';
import { HTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import './TopTaskCard.css';

export type TopTaskCardProps = HTMLAttributes<HTMLDivElement>;

export const TopTaskHeader = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<TopTaskCardProps>, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={clsx('example-toptask-card', className)} {...restProps}>
        {children}
      </div>
    );
  },
);

TopTaskHeader.displayName = 'TopTaskCard';
