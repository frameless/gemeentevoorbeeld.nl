'use client';
import { Button, Link, Page, PageHeader, Textbox } from '@utrecht/component-library-react';
import Logo from '@/app/styling/assets/voorbeeld-header.svg';
import React, { HTMLAttributes } from 'react';
import '@/components/ExampleHeaderFocus/exampleheaderfocus.css';

interface ExampleHeaderFocusProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleHeaderFocus = ({ ...props }: ExampleHeaderFocusProps) => (
  <PageHeader className="example--header-home-page">
    <div className="logo">
      <Logo />
    </div>
    <div className="example--header-items">
      <div className="example--search-box">
        <Link>Terug naar voorbeeld.nl</Link>
      </div>
    </div>
  </PageHeader>
);

ExampleHeaderFocus.displayName = 'ExampleHeaderFocus';
