import './globals.css';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';
import type { Metadata } from 'next';
import '@utrecht/component-library-css';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/index.css';
import React from 'react';

export const metadata: Metadata = {
  title: 'Demo Utrecht formulieren',
  description: 'Demo van Utrecht formulieren voor verschillende services',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      {/* <body className="voorbeeld-theme">{children}</body> */}
      <body className="utrecht-theme">{children}</body>
    </html>
  );
}
