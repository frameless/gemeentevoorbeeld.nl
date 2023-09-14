'use client';
import { Link, PageHeader } from '@utrecht/component-library-react';
import Logo from '@/app/styling/assets/voorbeeld-header.svg';
import React, { HTMLAttributes } from 'react';
import './exampleheaderfocus.css';

interface ExampleHeaderFunnelProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleHeaderFunnel = ({ ...props }: ExampleHeaderFunnelProps) => (
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

ExampleHeaderFunnel.displayName = 'ExampleHeaderFunnel';
