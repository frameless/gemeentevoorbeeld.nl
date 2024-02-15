/**
 * @license EUPL-1.2
 * Copyright (c) 2024 Gemeentevoorbeeld.nl
 * Copyright (c) 2024 Ryan van Valkenhoef
 */

import clsx from 'clsx';
import { HTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import './TopTaskHeader.css';

export type DivProps = HTMLAttributes<HTMLDivElement>;

export const TopTaskHeader = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<DivProps>, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={clsx('example-toptask-header', className)} {...restProps}>
        {children}
      </div>
    );
  },
);

TopTaskHeader.displayName = 'TopTaskHeader';
