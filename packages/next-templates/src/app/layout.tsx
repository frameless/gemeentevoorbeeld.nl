import type { Metadata } from 'next';
import React, { PropsWithChildren } from 'react';
import RootLayout from '@/components/RootLayout';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/index.css';
import './globals.css';
import './font';

export const metadata: Metadata = {
  title: 'gemeente Voorbeeld',
  description: 'Website voor gemeente Voorbeeld voor gebruikerstesten met NL Design System.',
};

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="nl">
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
