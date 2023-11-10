'use client';
import { Link, PageHeader } from '@utrecht/component-library-react';
import Logo from '@/app/styling/assets/voorbeeld-header.svg';
import React, { HTMLAttributes } from 'react';
import '../../ExampleHeader/ExampleHeaderFunnel/exampleheaderfunnel.css';
import { UtrechtButtonLink } from '@utrecht/web-component-library-react';

interface ExampleHeaderFunnelWmebvEmptyProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleHeaderFunnelWmebvEmpty = ({ ...props }: ExampleHeaderFunnelWmebvEmptyProps) => (
  <PageHeader className="example--header-home-page">
    <div className="logo">
      <Logo />
    </div>
    <div className="example--header-items"></div>
  </PageHeader>
);

ExampleHeaderFunnelWmebvEmpty.displayName = 'ExampleHeaderFunnelWmebvEmpty';
