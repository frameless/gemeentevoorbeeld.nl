/**
 * @license EUPL-1.2
 * Copyright (c) 2024 Frameless B.V.
 */

import { ForwardedRef, HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import './ThemeBuilder.scss';

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

export const ThemeBuilderSidebar = ({ children, ...restProps }: PropsWithChildren<ThemeBuilderSidebarProps>) => {
  return (
    <div className="frameless-theme-builder-sidebar" {...restProps}>
      {children}
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
