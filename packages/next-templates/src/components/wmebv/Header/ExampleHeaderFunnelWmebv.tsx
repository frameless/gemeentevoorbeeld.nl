'use client';
import { Link, PageHeader } from '@utrecht/component-library-react';
import Logo from '@/app/styling/assets/voorbeeld-header.svg';
import React, { HTMLAttributes } from 'react';
import '../ExampleHeaderFunnel/exampleheaderfunnel.css';
import { UtrechtButtonLink } from '@utrecht/web-component-library-react';

interface ExampleHeaderFunnelWmebvProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleHeaderFunnelWmebv = ({ ...props }: ExampleHeaderFunnelWmebvProps) => (
  <PageHeader className="example--header-home-page">
    <div className="logo">
      <Logo />
    </div>
    <div className="example--header-items">
      <div className="example--search-box">
        <UtrechtButtonLink appearance="subtle-button" className="voorbeeld-button-link">
          J. van Drouwen
        </UtrechtButtonLink>
      </div>
    </div>
  </PageHeader>
);

ExampleHeaderFunnelWmebv.displayName = 'ExampleHeaderFunnelWmebv';
