import type { Metadata } from 'next';
import React, { PropsWithChildren } from 'react';
import '@utrecht/design-tokens/dist/index.css';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/index.css';
import './globals.css';
import './font';
import './styling/css/rich-text.scss';

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
