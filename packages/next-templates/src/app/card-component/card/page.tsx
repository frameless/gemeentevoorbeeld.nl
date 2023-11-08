'use client';

import { Heading2, Paragraph } from '@utrecht/component-library-react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, HTMLAttributes } from 'react';
import './index.style.css';

interface CardListItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'children'> {
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  link: {
    href: string;
  };
}

export const CardListItem: FC<CardListItemProps> = ({
  description,
  title,
  image: { url = '', alt },
  link: { href },
  ...props
}) => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);

  return (
    <li {...props} className={clsx('utrecht-card-list-item', props.className)} onClick={() => linkRef.current?.click()}>
      {url && <Image src={url} alt={alt} className={'utrecht-card-list-item__image'} width={312} height={200} />}
      <div className={'utrecht-card-list-item__content'}>
        <Heading2 className="utrecht-card-list-item__title">
          <Link ref={linkRef} href={href} className={'utrecht-link utrecht-link--html-a'}>
            {title}
          </Link>
        </Heading2>
        <Paragraph className="utrecht-card-list-item__body">{description}</Paragraph>
      </div>
    </li>
  );
};
export default function Home() {
  return (
    <ul>
      <CardListItem
        description="test test test test test test test test"
        title="test"
        image={{ url: '/business_corgi.jpeg', alt: 'test' }}
        link={{ href: '#' }}
      />
    </ul>
  );
}
