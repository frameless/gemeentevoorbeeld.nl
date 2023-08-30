import './globals.css';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Aanhanger of bakfiets lenen',
  description: 'Reservering van een aanhanger of bakfiets bij de afvalscheidingsstations',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="utrecht-theme">{children}</body>
    </html>
  );
}
