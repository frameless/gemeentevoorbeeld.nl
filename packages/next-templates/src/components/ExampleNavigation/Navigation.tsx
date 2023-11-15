import { Button, LinkButton, Link, Textbox, LinkProps, LinkButtonProps } from '@utrecht/component-library-react';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';
import './Navigation.scss';
import Search from '../../app/styling/assets/searchbar-icon.svg';

export interface NavigationLinkListProps {
  center?: boolean;
}

export const NavigationLinkList = ({ children, center }: PropsWithChildren<NavigationLinkListProps>) => (
  <nav className="example-nav-bar__nav">
    <ul
      role="list"
      className={clsx('example-nav-bar__link-list', {
        'example-nav-bar__link-list--center': center,
      })}
    >
      {children}
    </ul>
  </nav>
);

export interface NavigationLinkProps extends LinkProps {
  center?: boolean;
}

export const NavigationLink = ({ center, children, ...restProps }: PropsWithChildren<NavigationLinkProps>) => (
  <li
    className={clsx('example-nav-bar__link-list-item', {
      'example-nav-bar__link-list-item--center': center,
    })}
  >
    <Link className="example-nav-bar__link" {...restProps}>
      {children}
    </Link>
  </li>
);

export interface NavigationLinkButtonProps extends LinkButtonProps {
  center?: boolean;
}

export const NavigationLinkButton = ({
  center,
  children,
  ...restProps
}: PropsWithChildren<NavigationLinkButtonProps>) => (
  <li
    className={clsx('example-nav-bar__link-list-item', {
      'example-nav-bar__link-list-item--center': center,
    })}
  >
    <LinkButton className="example-nav-bar__link" {...restProps}>
      {children}
    </LinkButton>
  </li>
);

export interface NavigationItemProps {
  end?: boolean;
}
export const NavigationItem = ({ end, children, ...restProps }: PropsWithChildren<NavigationItemProps>) => (
  <li
    className={clsx('example-nav-bar__item', {
      'example-nav-bar__item--end': end,
    })}
  >
    <LinkButton className="example-nav-bar__link" {...restProps}>
      {children}
    </LinkButton>
  </li>
);

interface NavigationProps extends HTMLAttributes<HTMLDivElement> {
  /* TODO: `center` should probably not be a boolean property, but an enum such as `appearance` */
  center?: boolean;
}

export const Navigation = ({ center = false, children }: PropsWithChildren<NavigationProps>) => (
  <div className="example-nav-bar">
    <div
      className={clsx('example-nav-bar__content', {
        'example-nav-bar__content--center': center,
      })}
    >
      {children}
    </div>
  </div>
);

Navigation.displayName = 'Navigation';

export const useNavigation = ({
  links = [],
  center,
}: NavigationProps & {
  links: { href?: string; label: string }[];
}): Partial<NavigationProps> => ({
  children: (
    <NavigationLinkList center={center}>
      {links.map(({ label, href }, index) =>
        href ? (
          <NavigationLink center={center} href={href} key={index}>
            {label}
          </NavigationLink>
        ) : (
          <NavigationLinkButton className="example-navbar__link" key={index}>
            {label}
          </NavigationLinkButton>
        ),
      )}
    </NavigationLinkList>
  ),
});
