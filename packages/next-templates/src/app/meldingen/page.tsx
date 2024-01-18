'use client';
import { Article, Page, PageContent } from '@utrecht/component-library-react';
import { TopTaskNavigation } from '@/components/TopTask/TopTaskNavigation';
import { TopTaskLink } from '@/components/TopTask/TopTaskLink';
import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
export default function Home() {
  return (
    <Page>
      <ExampleHeader />
      <ExampleNavigation />
      <PageContent className="voorbeeld-page-content--flex">
        <TopTaskNavigation className="grid">
          <TopTaskLink href="/meldingen-/aanhanger-of-bakfiets-melding/form">
            Aanvraag aanhanger of bakfiets
          </TopTaskLink>
          <TopTaskLink href="/meldingen/eenhoornparkeerzone-aanvraag/form">Aanvraag eenhoornparkeerzone</TopTaskLink>
          <TopTaskLink href="/meldingen/graffiti-melding/form">Melding graffiti</TopTaskLink>
          <TopTaskLink href="/meldingen/verloren-sokken-melding/">Melding verloren sokken</TopTaskLink>
        </TopTaskNavigation>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
