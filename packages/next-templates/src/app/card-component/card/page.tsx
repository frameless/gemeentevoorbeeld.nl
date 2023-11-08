'use client';

import { Heading, Paragraph } from '@utrecht/component-library-react';
import clsx from 'clsx';
import Image from 'next/image';
import React, { FC, HTMLAttributes } from 'react';
import './index.style.css';

interface CardListItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'children'> {
  headerlevel: number;
  title: string;
  children: string;
  image: {
    url: string;
    alt: string;
  };
  link: {
    href: string;
  };

  // do we want an article around the card content. Default is no
  useArticle: boolean | false;
}

export const CardListItem: FC<CardListItemProps> = ({
  headerlevel,
  children,
  title,
  image: { url = '', alt },
  link: { href },

  // expect a useArticle parameter given
  useArticle,
  ...props
}) => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);

  return (
    <li {...props} className={clsx('utrecht-card-list-item', props.className)} onClick={() => linkRef.current?.click()}>
      {url && <Image src={url} alt={alt} className={'utrecht-card-list-item__image'} width={312} height={200} />}

      {/* is we want a useArticle then add  an article*/}
      {useArticle && '<article>'}

      <div className={'utrecht-card-list-item__content'}>
        <hgroup>
          <Heading level={headerlevel} className="utrecht-card-list-item__title">
            <a ref={linkRef} href={href} className={'utrecht-link utrecht-link--html-a'}>
              {title}
            </a>
          </Heading>
          <p className="preheading">preheading</p>
        </hgroup>
        <p className="utrecht-card-list-item__body">{children}</p>
      </div>

      {/* closing tag  */}
      {useArticle && '</article>'}
    </li>
  );
};
export default function Home() {
  return (
    <ul>
      <CardListItem
        headerlevel={2}
        title="test"
        image={{ url: '/business_corgi.jpeg', alt: 'test' }}
        link={{ href: '#' }}
        // testing if the article shows when true...not yet, we get the the article tags as text
        useArticle={true}
      >
        test test test test test test test test test test test test test test test test
      </CardListItem>
    </ul>
  );
}
