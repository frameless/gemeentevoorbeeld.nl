'use client';
import { Article, Page, PageContent } from '@utrecht/component-library-react';
import { TopTaskNavigation } from '../components/TopTask/TopTaskNavigation';
import { TopTaskLink } from '../components/TopTask/TopTaskLink';
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
          <TopTaskLink href="/meldingen-/aanhanger-of-bakfiets-melding/form">
            Paspoort of ID-kaart aanvragen
          </TopTaskLink>
          <TopTaskLink href="/meldingen/eenhoornparkeerzone-aanvraag/form">Meldingen openbare ruimte</TopTaskLink>
          <TopTaskLink href="/meldingen/graffiti-melding/form">Verhuizing doorgeven</TopTaskLink>
          <TopTaskLink href="/meldingen/verloren-sokken-melding/">Werken bij de gemeente</TopTaskLink>
        </TopTaskNavigation>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
