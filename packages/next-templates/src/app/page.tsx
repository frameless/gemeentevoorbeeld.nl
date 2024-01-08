'use client';

import { Page, PageContent } from '@utrecht/component-library-react';
import { TopTaskNavigation } from '../components/TopTaskNavigation';
import { TopTaskLink } from '../components/TopTaskLink';
import { UtrechtIconRijbewijs } from '@utrecht/web-component-library-react';
import '@/app/styling/css/detail-page.css';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';
import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';

export default function Home() {
  return (
    <Page>
      <ExampleHeader />
      <ExampleNavigation />
      <PageContent className="voorbeeld-page-content-flex">
        <TopTaskNavigation className="grid">
          <TopTaskLink>dd</TopTaskLink>
        </TopTaskNavigation>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
