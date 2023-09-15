import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';
import type { Metadata } from 'next';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/index.css';
import './globals.css';
import React, { PropsWithChildren } from 'react';
import './font';

export const metadata: Metadata = {
  title: 'Demo Utrecht formulieren',
  description: 'Demo van Utrecht formulieren voor verschillende services',
};

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="nl">
      {/* <body className="voorbeeld-theme">{children}</body> */}
      <body className="voorbeeld-theme">
        <div className="utrecht-document">{children}</div>
      </body>
    </html>
  );
}
