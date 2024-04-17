'use client';

import {
  Article,
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  ButtonLink,
  Heading1,
  Heading2,
  Paragraph,
  Page,
  PageContent,
} from '@utrecht/component-library-react';

import { UtrechtDigidLogo, UtrechtEherkenningLogo } from '@utrecht/web-component-library-react';

import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { IconChevronRight } from '@tabler/icons-react';

import '@utrecht/design-tokens/dist/index.css';
import '@/app/styling/css/detail-page.css';

import { useEffect } from 'react';

export default function home() {
  const pageTitle = 'Klacht over de gemeente doorgeven';
  const websiteLabel = 'gemeente Voorbeeld';

  useEffect(() => {
    if (typeof document?.title === 'string') {
      document.title = `${pageTitle} - ${websiteLabel}`;
    }
  }, []);

  return (
    <Page>
      <ExampleHeader />
      <ExampleNavigation />

      <BreadcrumbNav label="Kruimelpad" className="breadcrumb-nav">
        <BreadcrumbNavLink href="/" index={0} rel="home">
          Home
        </BreadcrumbNavLink>
        <BreadcrumbNavSeparator>
          <IconChevronRight className="icon-chevron-right" />
        </BreadcrumbNavSeparator>
        <BreadcrumbNavLink href="/wmebv#" index={1} rel="contact">
          Contact
        </BreadcrumbNavLink>
        <BreadcrumbNavSeparator>
          <IconChevronRight className="icon-chevron-right" />
        </BreadcrumbNavSeparator>
        <BreadcrumbNavLink href="/404" index={2} rel="up">
          Producten
        </BreadcrumbNavLink>
        <BreadcrumbNavSeparator>
          <IconChevronRight className="icon-chevron-right" />
        </BreadcrumbNavSeparator>
        <BreadcrumbNavLink href="/404" index={3} rel="up">
          Inloggen
        </BreadcrumbNavLink>
      </BreadcrumbNav>

      <PageContent>
        <Article id="main" className="voorbeeld-article-space">
          <Heading1>{pageTitle}</Heading1>

          <Heading2>Inloggen met DigiD</Heading2>
          <Paragraph>Log in met uw DigiD om verder te gaan.</Paragraph>

          <div className="voorbeeld-button-group">
            <UtrechtDigidLogo className="voorbeeld-digid-logo" aria-label="DigiD logo" role="img" />
            <ButtonLink href="/404" appearance="primary-action-button">
              Doe een klacht met DigiD
              <IconChevronRight />
            </ButtonLink>
          </div>

          <Heading2>Inloggen met eHerkenning</Heading2>
          <Paragraph>Bent u ondernemer? Log dan in met uw eHerkenning om verder te gaan.</Paragraph>

          <div className="voorbeeld-button-group">
            <UtrechtEherkenningLogo className="voorbeeld-digid-logo" aria-label="DigiD logo" role="img" />
            <ButtonLink href="/404" appearance="primary-action-button">
              Doe een klacht met eHerkenning
              <IconChevronRight />
            </ButtonLink>
          </div>

          <Heading2>Een klacht doen zonder inloggen</Heading2>
          <Paragraph>
            Heeft u geen DigiD, eHerkenning of wilt u liever niet inloggen? Ga dan verder zonder inloggen.
          </Paragraph>

          <ButtonLink href="/404" appearance="primary-action-button">
            Doe een klacht zonder inloggen
            <IconChevronRight />
          </ButtonLink>
        </Article>
        {/* After PR #450 <PreFooterNav/> should be placed here */}
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
