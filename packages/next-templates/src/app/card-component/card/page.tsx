'use client';

import { Heading } from '@utrecht/component-library-react';
import clsx from 'clsx';
import Image from 'next/image';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import './index.style.css';

interface CardListItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'children'> {
  headinglevel: number;
  title?: string;
  preHeading?: string;
  children?: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  cardRole?: boolean | false;
}

export const CardListItem = ({
  headinglevel,
  children,
  title,
  preHeading,
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
        <Image src={imageSrc} alt={imageAlt} className={'utrecht-card-list-item__image'} width={312} height={200} />
      )}
      {cardRole ? (
        <article>
          <div className={'utrecht-card-list-item__content'}>
            <hgroup>
              <Heading level={headinglevel} className="utrecht-card-list-item__title">
                <a ref={linkRef} href={href} className={'utrecht-link utrecht-link--html-a'}>
                  {title}
                </a>
              </Heading>
              {preHeading && <p className="utrecht-card-list-item__pre-heading">{preHeading}</p>}
            </hgroup>
            {children}
          </div>
        </article>
      ) : (
        <div className={'utrecht-card-list-item__content'}>
          <hgroup>
            <Heading level={headinglevel} className="utrecht-card-list-item__title">
              <a ref={linkRef} href={href} className={'utrecht-link utrecht-link--html-a'}>
                {title}
              </a>
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
    <ul>
      <CardListItem
        headinglevel={2}
        title="test"
        imageAlt="test"
        imageSrc="/business_corgi.jpeg"
        href="#"
        preHeading="optional testje"
      >
        test test test test test test test test test test test test test test test test
      </CardListItem>
    </ul>
  );
}
