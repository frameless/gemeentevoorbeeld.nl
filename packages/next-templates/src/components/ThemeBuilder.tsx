/**
 * @license EUPL-1.2
 * Copyright (c) 2024 Frameless B.V.
 */

import { ForwardedRef, HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import './ThemeBuilder.scss';
import clsx from 'clsx';
import { Document, Surface } from '@utrecht/component-library-react/dist/css-module';

export interface ThemeBuilderProps extends HTMLAttributes<HTMLDivElement> {}

export const ThemeBuilder = ({ children, ...restProps }: PropsWithChildren<ThemeBuilderProps>) => {
  return (
    <div className="frameless-theme-builder" {...restProps}>
      {children}
    </div>
  );
};

ThemeBuilder.displayName = 'ThemeBuilder';

export interface ThemeBuilderSidebarProps extends HTMLAttributes<HTMLDivElement> {}

export const ThemeBuilderSidebar = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<ThemeBuilderSidebarProps>) => {
  return (
    <div className={clsx('frameless-theme-builder-sidebar', className)} {...restProps}>
      <Surface>
        <Document>
          <div className="frameless-theme-builder-sidebar__content">{children}</div>
        </Document>
      </Surface>
    </div>
  );
};

ThemeBuilderSidebar.displayName = 'ThemeBuilderSidebar';

export interface ThemeBuilderCanvasProps extends HTMLAttributes<HTMLDivElement> {}

export const ThemeBuilderCanvas = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<ThemeBuilderCanvasProps>, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className="frameless-theme-builder-canvas" {...restProps}>
        {children}
      </div>
    );
  },
);

ThemeBuilderCanvas.displayName = 'ThemeBuilderCanvas';
