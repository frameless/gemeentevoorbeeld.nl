'use client';

import {
  Article,
  BreadcrumbNavLink,
  BreadcrumbNav,
  ButtonLink,
  Heading1,
  Heading2,
  Link,
  OrderedList,
  OrderedListItem,
  Page,
  PageContent,
  Paragraph,
  SpotlightSection,
  UnorderedList,
  UnorderedListItem,
  Heading3,
  BreadcrumbNavSeparator,
} from '@utrecht/component-library-react';
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
          <TopTaskLink icon={<UtrechtIconPaspoort />}>Paspoort of ID-kaart aanvragen</TopTaskLink>
          <TopTaskLink href="/meldingen/" icon={<UtrechtIconMeldingKlacht />}>
            Meldingen openbare ruimte
          </TopTaskLink>
          <TopTaskLink icon={<UtrechtIconVerhuizen />}>Verhuizing doorgeven</TopTaskLink>
          <TopTaskLink icon={<UtrechtIconWerken />}>Werken bij de gemeente</TopTaskLink>
          <TopTaskLink icon={<UtrechtIconNummerbord />}>Parkeren: kentekenwijziging doorgeven</TopTaskLink>
          <TopTaskLink icon={<UtrechtIconAfvalScheiden />}>Afval</TopTaskLink>
        </TopTaskNavigation>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
