'use client';

import { Heading2, Paragraph, LinkList } from '@utrecht/component-library-react';
import IconChevronRight from '../../app/styling/assets/chevronRight.svg';
// import clsx from 'clsx';
// import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
// import { UtrechtIcon } from '@utrecht/web-component-library-react';
// import './pre-footer-nav.css';

export const Card = () => (
  <section className="example-section">
    <Heading2>Zelf regelen</Heading2>
    <div className="example-card-group">
      <div className="example-card">
        <div className="example-card__icon">
          <IconChevronRight />
        </div>
        <Paragraph className="example-card__title">Pasport vernieuwen of aanvragen</Paragraph>
        <LinkList
          icon={() => <IconChevronRight />}
          links={[
            { href: '#', children: 'Direct regelen' },
            { href: '#', children: 'Meer informatie op Rotterdam.nl' },
          ]}
        />
      </div>
    </div>
  </section>
);

Card.displayName = 'Card';
