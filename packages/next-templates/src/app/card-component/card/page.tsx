'use client';

import { Heading, Link } from '@utrecht/component-library-react';
import clsx from 'clsx';
import Image from 'next/image';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import './index.style.css';
import { CardList } from '../card-list/page';

interface CardListItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'children'> {
  headingLevel: number;
  title?: string;
  preHeading?: string;
  children?: string;
  imageHeight?: number;
  imageWidth?: number;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  cardRole?: boolean | false;
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

  return (
    <li {...props} className={clsx('utrecht-card-list-item', props.className)} onClick={() => linkRef.current?.click()}>
      {imageSrc && imageAlt && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          height={imageHeight}
          width={imageWidth}
          className={'utrecht-card-list-item__image'}
        />
      )}
      {cardRole ? (
        <article>
          <div className={'utrecht-card-list-item__content'}>
            <hgroup>
              <Heading level={headingLevel} className="utrecht-card-list-item__title">
                <Link ref={linkRef} href={href} className="utrecht-link utrecht-link--html-a">
                  {title}
                </Link>
              </Heading>
              {preHeading && <p className="utrecht-card-list-item__pre-heading">{preHeading}</p>}
            </hgroup>
            {children}
          </div>
        </article>
      ) : (
        <div className={'utrecht-card-list-item__content'}>
          <hgroup>
            <Heading level={headingLevel} className="utrecht-card-list-item__title">
              <Link ref={linkRef} href={href} className="utrecht-link utrecht-link--html-a">
                {title}
              </Link>
            </Heading>
            {preHeading && <p className="utrecht-card-list-item__pre-heading">{preHeading}</p>}
          </hgroup>
          {children}
        </div>
      )}
    </li>
  );
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
        imageHeight={500}
        href="#"
        preHeading="optional testje"
      >
        test test test test test test test test test test test test test test test test
      </CardListItem>
    </CardList>
  );
}
