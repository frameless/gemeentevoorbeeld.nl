'use client';

import { Heading, Link, Paragraph } from '@utrecht/component-library-react';
import clsx from 'clsx';
import Image from 'next/image';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import './index.style.css';
import { CardList } from '../card-list/page';
import { type } from 'os';

interface CardListItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'children'> {
  headingLevel: number;
  title?: string;
  preHeading?: string;
  children?: any;
  imageHeight?: number;
  imageWidth?: number;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  cardRole?: 'article' | string;
}

export const CardListItem = ({
  headingLevel,
  children,
  title,
  preHeading,
  imageHeight,
  imageWidth,
  imageSrc,
  imageAlt,
  href,
  cardRole,
  ...props
}: PropsWithChildren<CardListItemProps>) => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);

  let headingContent: any = title;
  if (typeof href === 'string') {
    headingContent = <Link href={href}>{title}</Link>;
  } else {
    headingContent;
  }

  let card = (
    <div className={'utrecht-card-list-item__content'}>
      <hgroup>
        <Heading level={headingLevel} className="utrecht-card-list-item__title">
          {headingContent}
        </Heading>
        {preHeading && <p className="utrecht-card-list-item__pre-heading">{preHeading}</p>}
      </hgroup>
      {children}
    </div>
  );

  if (cardRole === 'article') {
    card = (
      <li
        {...props}
        className={clsx('utrecht-card-list-item', props.className)}
        onClick={() => linkRef.current?.click()}
      >
        {imageSrc && imageAlt && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            height={imageHeight}
            width={imageWidth}
            className={'utrecht-card-list-item__image'}
          />
        )}
        <article>{card}</article>
      </li>
    );
  } else {
    card = (
      <li
        {...props}
        className={clsx('utrecht-card-list-item', props.className)}
        onClick={() => linkRef.current?.click()}
      >
        {imageSrc && imageAlt && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            height={imageHeight}
            width={imageWidth}
            className={'utrecht-card-list-item__image'}
          />
        )}
        {card}
      </li>
    );
  }

  return card;
};
export default function Home() {
  return (
    <CardList>
      <CardListItem
        headingLevel={2}
        title="test"
        imageAlt="test"
        imageSrc="/business_corgi.jpeg"
        imageWidth={500}
        imageHeight={300}
        cardRole="article"
        preHeading="optional testje"
      >
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at ipsum rhoncus, rhoncus nisl eu, sollicitudin
          erat. Duis posuere bibendum diam, semper iaculis mi varius in. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Aliquam erat volutpat.
        </Paragraph>
      </CardListItem>
      <CardListItem
        headingLevel={2}
        title="test"
        imageAlt="test"
        imageSrc="/business_corgi.jpeg"
        imageWidth={500}
        imageHeight={300}
        href="#"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at ipsum rhoncus, rhoncus nisl eu, sollicitudin
        erat. Duis posuere bibendum diam, semper iaculis mi varius in. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Aliquam erat volutpat.
      </CardListItem>
    </CardList>
  );
}
