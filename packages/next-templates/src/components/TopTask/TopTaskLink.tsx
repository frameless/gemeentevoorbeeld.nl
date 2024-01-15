/**
 * @license EUPL-1.2
 * Copyright (c) 2024 Gemeentevoorbeeld.nl
 * Copyright (c) 2024 Ryan van Valkenhoef
 */

import clsx from 'clsx';
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import './TopTaskLink.css';

// Somehow `placeholder` incorrectly is a global HTML attribute in React, ignore that
export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'placeholder'> {
  icon?: ReactNode;
  boxContent?: boolean;
  external?: boolean;
  placeholder?: boolean;
}

export const TopTaskLink = forwardRef(
  (
    {
      boxContent,
      children,
      className,
      icon,
      external,
      href,
      placeholder,
      role,
      ...restProps
    }: PropsWithChildren<LinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    // "example-link--telephone" does not have a corresponding API,
    // since it is primarily a basis for implementing input[href^="tel"].
    // Telephone number rendering in React is best achieved using composition
    // of the TelephoneValue component.
    <a
      href={placeholder ? '#' : href}
      ref={ref}
      role={role || (placeholder ? 'link' : undefined)}
      className={clsx(
        'example-toptask-link',
        'example-toptask-link--html-a',
        {
          'example-toptask-link--box-content': boxContent,
          'example-toptask-link--external': external,
          'example-toptask-link--placeholder': placeholder,
        },
        className,
      )}
      aria-disabled={placeholder ? 'true' : undefined}
      rel={external ? 'external noopener noreferrer' : undefined}
      {...restProps}
    >
      {icon && <span className="example-toptask-link__icon">{icon}</span>}
      <span className="example-toptask-link__title">{children}</span>
    </a>
  ),
);

TopTaskLink.displayName = 'TopTaskLink';
