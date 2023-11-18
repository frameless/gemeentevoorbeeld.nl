/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import '@utrecht/components/paragraph/css/index.scss';
import './Address.scss';

export type AddressProps = HTMLAttributes<HTMLElement>;

export const Address = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<AddressProps>, ref: ForwardedRef<HTMLElement>) => (
    <address
      {...restProps}
      ref={ref}
      className={clsx('utrecht-paragraph', 'utrecht-paragraph--html-address', 'utrecht-paragraph--voorbeeld-address')}
    >
      {children}
    </address>
  ),
);

Address.displayName = 'Address';
