'use client';

import { Button } from '@utrecht/component-library-react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles['example-main']}>
      <div className={styles['example-description']}>
        <p className={styles['example-description__paragraph']}>
          Get started by editing&nbsp;
          <code className={styles['example-code']}>src/app/page.tsx</code>
        </p>
        <Button appearance="primary-action-button">Hello World!±</Button>
        <div className={styles['example-description__illustration']}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['example-description__link']}
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles['example-logo--vercel']}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className={styles['example-layout--center']}>
        <Image
          className={styles['example-logo--nextjs']}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className={styles['example-grid']}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles['example-card']}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles['example-card__title']}>
            Docs <span className={styles['example-card__arrow']}>-&gt;</span>
          </h2>
          <p className={styles['example-card__description']}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles['example-card']}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles['example-card__title']}>
            Learn <span className={styles['example-card__arrow']}>-&gt;</span>
          </h2>
          <p className={styles['example-card__description']}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles['example-card']}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles['example-card__title']}>
            Templates <span className={styles['example-card__arrow']}>-&gt;</span>
          </h2>
          <p className={styles['example-card__description']}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles['example-card']}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles['example-card__title']}>
            Deploy <span className={styles['example-card__arrow']}>-&gt;</span>
          </h2>
          <p className={styles['example-card__description']}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
