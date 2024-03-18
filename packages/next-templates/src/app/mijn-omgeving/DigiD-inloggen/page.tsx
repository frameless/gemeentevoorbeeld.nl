'use client';

import { Article, Page, PageContent, Heading1, ButtonGroup, Button } from '@utrecht/component-library-react';

import '@/app/styling/css/wmebv.css';
import { useEffect, useId } from 'react';

export default function home() {
  const formHeadingId = useId();

  const stepLabel = 'Doe alsof u inlogt met DigiD';
  const websiteLabel = 'gemeente Voorbeeld';

  useEffect(() => {
    if (typeof document?.title === 'string') {
      document.title = `${stepLabel} - ${websiteLabel}`;
    }
  }, []);
}
