'use client';
import { Article, Page, PageContent } from '@utrecht/component-library-react';
import { TopTaskNavigation } from '../components/TopTask/TopTaskNavigation';
import { TopTaskLink } from '../components/TopTask/TopTaskLink';
import {
  UtrechtIconAfvalScheiden,
  UtrechtIconMeldingKlacht,
  UtrechtIconNummerbord,
  UtrechtIconPaspoort,
  UtrechtIconVerhuizen,
  UtrechtIconWerken,
} from '@utrecht/web-component-library-react';
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
          <TopTaskLink href="/meldingen-openbare-ruimte/aanhanger-of-bakfiets-melding/form">
            Paspoort of ID-kaart aanvragen
          </TopTaskLink>
          <TopTaskLink href="/meldingen-openbare-ruimte/eenhoornparkeerzone-aanvraag/form">
            Meldingen openbare ruimte
          </TopTaskLink>
          <TopTaskLink href="/meldingen-openbare-ruimte/graffiti-melding/form">Verhuizing doorgeven</TopTaskLink>
          <TopTaskLink href="/meldingen-openbare-ruimte/verloren-sokken-melding/">Werken bij de gemeente</TopTaskLink>
        </TopTaskNavigation>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
