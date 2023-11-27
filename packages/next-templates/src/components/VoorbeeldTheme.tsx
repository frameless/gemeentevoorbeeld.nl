import { PropsWithChildren } from 'react';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/index.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import '@/app/font';
import './VoorbeeldTheme.scss';
import '../app/globals.css';

export const VoorbeeldTheme = ({ children }: PropsWithChildren<{}>) => <div className="denhaag-theme">{children}</div>;
