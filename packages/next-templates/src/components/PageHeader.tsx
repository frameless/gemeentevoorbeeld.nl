import {
  PageHeader as UtrechtPageHeader,
  PageHeaderProps as UtrechtPageHeaderProps,
} from '@utrecht/component-library-react/dist/css-module';
import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import './PageHeader.scss';

export interface PageHeaderProps extends UtrechtPageHeaderProps {}

export const PageHeader = ({ children, className, ...props }: PropsWithChildren<PageHeaderProps>) => (
  <UtrechtPageHeader className={clsx('example-page-header', className)} {...props}>
    <div className="example-page-header__content">{children}</div>
  </UtrechtPageHeader>
);

PageHeader.displayName = 'PageHeader';
