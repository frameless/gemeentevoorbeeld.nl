'use client';
import { Article, Page, PageContent } from '@utrecht/component-library-react';
import { TopTaskNavigation } from '@/components/TopTask/TopTaskNavigation';
import { TopTaskLink } from '@/components/TopTask/TopTaskLink';
import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
export default function Home() {
  return (
    <Page className="voorbeeld-page--flex">
      <ExampleHeader />
      <ExampleNavigation />
      <PageContent className="voorbeeld-page-content--flex">
        <TopTaskNavigation className="grid">
          <TopTaskLink href="/meldingen/aanhanger-of-bakfiets-melding">Aanvraag aanhanger of bakfiets</TopTaskLink>
          <TopTaskLink href="/meldingen/eenhoornparkeerzone-melding">Aanvraag eenhoornparkeerzone</TopTaskLink>
          <TopTaskLink href="/meldingen/graffiti-melding">Melding graffiti</TopTaskLink>
          <TopTaskLink href="/meldingen/verloren-sokken-melding">Melding verloren sokken</TopTaskLink>
          <TopTaskLink href="/meldingen/random">Random</TopTaskLink>
        </TopTaskNavigation>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
