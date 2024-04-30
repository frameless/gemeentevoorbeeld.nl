'use client';

import { Heading2, Paragraph, LinkList } from '@utrecht/component-library-react';
import IconChevronRight from '../../app/styling/assets/chevronRight.svg';
// import clsx from 'clsx';
// import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
// import { UtrechtIcon } from '@utrecht/web-component-library-react';
import '././card.css';

export const Card = () => (
  <section className="example-section">
    <div className="example-card-group">
      <div className="example-card">
        <Paragraph>Vraag aan de gemeente</Paragraph>
        <LinkList links={[{ href: './mijn-omgeving/mijn-zaken', children: 'Bekijk zaken' }]} />
      </div>
    </div>
  </section>
);

Card.displayName = 'Card';
