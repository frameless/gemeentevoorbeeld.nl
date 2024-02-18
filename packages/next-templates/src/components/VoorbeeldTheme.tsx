import { HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/index.css';
import '@/app/font';
import './VoorbeeldTheme.scss';
import '../app/globals.css';

export const VoorbeeldTheme = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <div className={clsx('voorbeeld-theme', className)} {...restProps}>
    {children}
  </div>
);
