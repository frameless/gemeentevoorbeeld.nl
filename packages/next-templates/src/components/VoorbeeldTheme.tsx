import { PropsWithChildren } from 'react';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/index.css';
import '@/app/font';
import './VoorbeeldTheme.scss';
import '../app/globals.css';

export const VoorbeeldTheme = ({ children }: PropsWithChildren<{}>) => (
  <div className="voorbeeld-theme">{children}</div>
);
