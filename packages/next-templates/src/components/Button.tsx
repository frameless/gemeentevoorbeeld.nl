/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { Button as UtrechtButton, ButtonProps } from '@utrecht/component-library-react';
import '@utrecht/components/button/css/index.scss';
import './Button.scss';

/**
 * Token list check, to allow spaces and case insensitive matches
 * Like in CSS:
 * `[list~='query' i]` vs `[list="query"]`
 */
const matchesTokenList = (list: string, query: string | string[]): boolean => {
  if (Array.isArray(query)) {
    const listNormalized = query.map((item) => item.toLowerCase());
    const queryNormalized = query.map((item) => item.toLowerCase());
    return listNormalized.some((item) => queryNormalized.includes(item));
  } else {
    const queryLowerCase = query.toLowerCase();
    const listNormalized = list.trim().split(/\s+/g);
    return listNormalized.some((item) => item.toLowerCase() === queryLowerCase);
  }
};

export const Button = forwardRef(
  (
    { children, className, rel, ...restProps }: PropsWithChildren<ButtonProps>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const isNav = !!rel && matchesTokenList(rel, ['up', 'next', 'prev', 'home', 'search', 'help', 'license']);

    return (
      <UtrechtButton
        {...restProps}
        rel={rel}
        ref={ref}
        className={clsx(
          {
            'utrecht-button--nav': isNav,
          },
          className,
        )}
      >
        {children}
      </UtrechtButton>
    );
  },
);

Button.displayName = 'Button';
