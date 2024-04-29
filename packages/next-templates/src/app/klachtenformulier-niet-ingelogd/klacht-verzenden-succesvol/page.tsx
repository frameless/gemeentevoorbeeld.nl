'use client';

import {
  Alert,
  Article,
  ButtonLink,
  ButtonGroup,
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Heading1,
  Heading2,
  Icon,
  Link,
  Page,
  PageContent,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';

import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { IconCircleCheck, IconChevronRight, IconChevronUp, IconDownload, IconPrinter } from '@tabler/icons-react';

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
        <BreadcrumbNav label="Kruimelpad" className="voorbeeld-breadcrumb-nav">
          <BreadcrumbNavLink href="/" index={0} rel="home">
            Home
          </BreadcrumbNavLink>
          <BreadcrumbNavSeparator>
            <IconChevronRight className="icon-chevron-right" />
          </BreadcrumbNavSeparator>
          <BreadcrumbNavLink href="/productpagina-klachtenformulier" index={1} rel="up">
            Producten
          </BreadcrumbNavLink>
        </BreadcrumbNav>

        <Article id="main" className="voorbeeld-article-space ">
          <Alert type="ok">
            <Heading1>
              <Icon>
                <IconCircleCheck />
              </Icon>
              Formulier is succesvol verstuurd
            </Heading1>
            <Paragraph>Referentienummer OF-3V3RGM</Paragraph>
            {/* Zaaknummer: {storedData?.code} */}
          </Alert>

          <Heading2>Wat gaat er nu gebeuren?</Heading2>

          <UnorderedList>
            <UnorderedListItem>U ontvangt een bevestigingmail op [uw@email.nl]</UnorderedListItem>
            <UnorderedListItem>U krijgt een e-mail als er nieuws is. Dit kan X dagen duren</UnorderedListItem>
          </UnorderedList>

          <ButtonGroup className="voorbeeld-buttongroup-flex">
            <Link href="/404">
              <Icon>
                <IconDownload />
              </Icon>
              Download een kopie met ingevulde gegevens over deze klacht (pdf, 314kB){' '}
            </Link>
            <Link href="/404">
              <Icon>
                <IconPrinter />
              </Icon>
              Print uw aanvraag
            </Link>
          </ButtonGroup>

          <ButtonGroup>
            <ButtonLink href="/" appearance="primary-action-button">
              Formulier afsluiten
            </ButtonLink>
          </ButtonGroup>

          <Link>
            <Icon>
              <IconChevronUp />
            </Icon>
            Naar boven
          </Link>
          {/* PreFooterNav variant? */}
        </Article>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
