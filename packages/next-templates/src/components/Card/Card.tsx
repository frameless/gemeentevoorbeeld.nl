'use client';

import { Heading2, Paragraph, LinkList } from '@utrecht/component-library-react';

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
