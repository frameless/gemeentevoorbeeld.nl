'use client';
import { Link } from '@utrecht/component-library-react';
import React from 'react';
import './exampleheaderfunnel.css';
import { PageHeaderLogo } from '@/components/PageHeaderLogo';
import { PageHeader } from '@/components/PageHeader';
import { UtrechtUrlData } from '@utrecht/web-component-library-react';

export const ExampleHeaderFunnel = () => (
  <PageHeader className="example--header-home-page">
    <PageHeaderLogo />
    <Link href="/">
      Terug naar <UtrechtUrlData>gemeentevoorbeeld.nl</UtrechtUrlData>
    </Link>
  </PageHeader>
);

ExampleHeaderFunnel.displayName = 'ExampleHeaderFunnel';
