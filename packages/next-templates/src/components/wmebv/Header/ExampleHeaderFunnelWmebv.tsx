'use client';
import React, { HTMLAttributes } from 'react';
import '../../ExampleHeader/ExampleHeaderFunnel/exampleheaderfunnel.css';
import { UtrechtButtonLink } from '@utrecht/web-component-library-react';
import { IconChevronDown } from '@tabler/icons-react';
import { PageHeader } from '@/components/PageHeader';
import { PageHeaderLogo } from '@/components/PageHeaderLogo';

interface ExampleHeaderFunnelWmebvProps extends HTMLAttributes<HTMLDivElement> {
  username?: string;
  userURL?: string;
}
export const ExampleHeaderFunnelWmebv = ({ username, userURL }: ExampleHeaderFunnelWmebvProps) => (
  <PageHeader className="example--header-home-page">
    <PageHeaderLogo />
    <div className="example--header-items">
      {username && (
        <div className="example--search-box">
          <UtrechtButtonLink href={userURL} appearance="subtle-button" className="voorbeeld-button-link">
            {username}
            <IconChevronDown />
          </UtrechtButtonLink>
        </div>
      )}
    </div>
  </PageHeader>
);

ExampleHeaderFunnelWmebv.displayName = 'ExampleHeaderFunnelWmebv';
