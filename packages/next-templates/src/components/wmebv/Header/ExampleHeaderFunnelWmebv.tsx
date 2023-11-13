'use client';
import { Link, PageHeader } from '@utrecht/component-library-react';
import Logo from '@/app/styling/assets/voorbeeld-header.svg';
import React, { HTMLAttributes } from 'react';
import '../../ExampleHeader/ExampleHeaderFunnel/exampleheaderfunnel.css';
import { UtrechtButtonLink } from '@utrecht/web-component-library-react';

interface ExampleHeaderFunnelWmebvProps extends HTMLAttributes<HTMLDivElement> {
  username?: string;
  userURL?: string;
}
export const ExampleHeaderFunnelWmebv = ({ username, userURL, ...props }: ExampleHeaderFunnelWmebvProps) => (
  <PageHeader className="example--header-home-page">
    <div className="logo">
      <Logo />
    </div>
    <div className="example--header-items">
      {username && (
        <div className="example--search-box">
          <UtrechtButtonLink href={userURL} appearance="subtle-button" className="voorbeeld-button-link">
            {username}
          </UtrechtButtonLink>
        </div>
      )}
    </div>
  </PageHeader>
);

ExampleHeaderFunnelWmebv.displayName = 'ExampleHeaderFunnelWmebv';
