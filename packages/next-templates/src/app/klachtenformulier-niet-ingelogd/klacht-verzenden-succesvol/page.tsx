'use client';

import {
  Article,
  ButtonLink,
  BreadcrumbNav,
  BreadcrumbNavLink,
  Heading1,
  Heading2,
  Link,
  Page,
  PageContent,
  Paragraph,
  SpotlightSection,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';

import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { IconCircleCheck, IconChevronRight, IconX } from '@tabler/icons-react';

import { useEffect } from 'react';

import '@/app/styling/css/wmebv.css';
import '@/app/styling/css/klachtenformulier-niet-ingelogd.css';
import '@utrecht/design-tokens/dist/index.css';

export default function home() {
  const stepLabel = 'Uw vraag is met succes verstuurd';
  const websiteLabel = 'gemeente voorbeeld';

  useEffect(() => {
    if (typeof document?.title === 'string') {
      document.title = `${stepLabel} - ${websiteLabel}`;
    }
  }, []);

  return (
    <Page>
      <ExampleHeader />
      <ExampleNavigation />

      <PageContent className="voorbeeld-page-content-flex">
        <BreadcrumbNav label="Kruimelpad">
          <BreadcrumbNavLink href="/">Home</BreadcrumbNavLink>
          <IconChevronRight></IconChevronRight>
          <BreadcrumbNavLink href="/productpagina-klachtenformulier">Product pagina</BreadcrumbNavLink>
        </BreadcrumbNav>

        <Article id="main" className="voorbeeld-article-space ">
          <SpotlightSection>
            <IconCircleCheck />
            <Heading1>Formulier is succesvol verstuurd</Heading1>
            <Paragraph>Referentienummer OF-3V3RGM</Paragraph>
          </SpotlightSection>

          <Heading2>Wat gaat er nu gebeuren?</Heading2>

          <UnorderedList>
            <UnorderedListItem>U ontvangt een bevestigingmail op [uw@email.nl]</UnorderedListItem>
            <UnorderedListItem>U krijgt een e-mail als er nieuws is. Dit kan X dagen duren</UnorderedListItem>
          </UnorderedList>

          <Link href="/404">Download een kopie met ingevulde gegevens over deze klacht (pdf, 314kB) </Link>
          <Link href="/404">Print uw aanvraag</Link>

          <ButtonLink href="/">Formulier afsluiten</ButtonLink>

          {/* PreFooterNav variant? */}
        </Article>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
