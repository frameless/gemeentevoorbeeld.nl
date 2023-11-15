import { PropsWithChildren } from 'react';
import { VoorbeeldTheme } from './VoorbeeldTheme';
import { Document, SkipLink } from '@utrecht/component-library-react/dist/css-module';

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <VoorbeeldTheme>
      <Document>
        <SkipLink href="#main">Naar inhoud</SkipLink>
        {children}
      </Document>
    </VoorbeeldTheme>
  );
}
