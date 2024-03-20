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

  return (
    <Page>
      <PageContent>
        <Article id="main" className="voorbeeld-article-space">
          <Heading1 id={formHeadingId}>{stepLabel}</Heading1>
          <form action="./ingelogd/stap1" method="get" aria-labelledby={formHeadingId}>
            <ButtonGroup>
              <Button type="submit" appearance="primary-action-button">
                Inloggen
              </Button>
            </ButtonGroup>
          </form>
        </Article>
      </PageContent>
    </Page>
  );
}
