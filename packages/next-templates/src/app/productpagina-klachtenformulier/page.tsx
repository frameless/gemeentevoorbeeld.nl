'use client';

import {
  Article,
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  ButtonLink,
  ButtonGroup,
  Heading1,
  Heading2,
  Link,
  Paragraph,
  Page,
  PageContent,
  SpotlightSection,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';

import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { PreFooterNav } from '@/components/PreFooterNav/PreFooterNav';
import { IconChevronRight } from '@tabler/icons-react';

import '@utrecht/design-tokens/dist/index.css';
import '@/app/styling/css/productpagina-klachtenformulier.css';
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
      </BreadcrumbNav>

      <PageContent>
        <Article id="main" className="voorbeeld-article-space">
          <Heading1 id="naar-boven">{pageTitle}</Heading1>
          <Paragraph lead>
            Vindt u dat u niet netjes bent behandeld door een ambtenaar of bestuurder? U kunt dan online een klacht
            doorgeven. Een klacht handelen wij meestal binnen 6 weken af.
          </Paragraph>
          <SpotlightSection className="utrecht-spotlight-section">
            <Heading2 className="voorbeeld-spotlight-section">Is het een klacht of een melding?</Heading2>
            <Paragraph>
              Gaat uw klacht over iets dat kapot is op straat, ziet u vervuiling of merkt u overlast? Doe dan een
              melding. Meldingen gaan bijvoorbeeld over afval, vervuiling, groen, obstakels op de weg, kapotte
              lantaarnpalen, verkeer, overlast, graffiti, woonfraude of bedrijven die zich niet aan milieuregels houden.
            </Paragraph>
            <Paragraph>U laat ons via een melding weten wat er aan de hand is en op welke plek dit is.</Paragraph>
            <ButtonGroup>
              <ButtonLink href="/meldingen" appearance="secondary-action-button">
                Doe een melding
                <IconChevronRight />
              </ButtonLink>
            </ButtonGroup>
          </SpotlightSection>
          <Heading2>Waarover kunt u een klacht doorgeven?</Heading2>
          <UnorderedList>
            <UnorderedListItem>De persoonlijke behandeling door medewerkers of bestuurders.</UnorderedListItem>
            <UnorderedListItem>Het krijgen van te weinig of onjuiste informatie.</UnorderedListItem>
            <UnorderedListItem>Het niet reageren op vragen.</UnorderedListItem>
            <UnorderedListItem>
              Het niet juist omgaan met <Link href="/404">uw privacy</Link>. Bijvoorbeeld het zonder uw toestemming
              doorgeven van uw medische gegevens.
            </UnorderedListItem>
          </UnorderedList>
          <ButtonLink href="/productenpagina-klachtenformulier/step-1" appearance="primary-action-button">
            Ga naar het klachtenformulier
            <IconChevronRight />
          </ButtonLink>
          <Heading2>Geen klacht maar wel bezwaar maken?</Heading2>
          <Paragraph>
            Bent u het niet eens met een beslissing? <Link href="/404">Maak dan bezwaar</Link>.
          </Paragraph>
          <Heading2>Waarover kunt u geen klacht doorgeven?</Heading2>
          <UnorderedList>
            <UnorderedListItem>Over iets wat meer dan 1 jaar geleden gebeurde.</UnorderedListItem>
            <UnorderedListItem>Over onze regels.</UnorderedListItem>
            <UnorderedListItem>Over iets waarover u al eerder een klacht doorgaf.</UnorderedListItem>
            <UnorderedListItem>
              Over gedrag of een actie waar u bezwaar tegen had kunnen maken of in beroep had kunnen gaan.
            </UnorderedListItem>
            <UnorderedListItem>Over gedrag dat Justitie al onderzoekt.</UnorderedListItem>
          </UnorderedList>
          <Heading2>Behandeling van uw klacht</Heading2>
          <UnorderedList>
            <UnorderedListItem>
              Wij laten u na het doorgeven van uw klacht weten dat wij deze hebben gekregen.
            </UnorderedListItem>
            <UnorderedListItem>
              We nemen binnen 5 werkdagen contact met u op. U mag uw klacht ook tijdens een gesprek uitleggen.
            </UnorderedListItem>
            <UnorderedListItem>
              Binnen 6 weken handelen we uw klacht af. Dit kunnen we met maximaal 4 weken verlengen.
            </UnorderedListItem>
            <UnorderedListItem>
              Kunnen we uw klacht niet behandelen of hoort deze niet bij ons thuis? Dan krijgt u binnen 4 weken een
              brief daarover. Hoort uw klacht niet bij ons thuis? Dan proberen wij deze door te sturen.
            </UnorderedListItem>
          </UnorderedList>
          <Heading2>Klacht schriftelijk of telefonisch doorgeven</Heading2>
          <UnorderedList>
            <UnorderedListItem>Telefonisch: via 00 000.</UnorderedListItem>
            <UnorderedListItem>
              <Paragraph>
                Schriftelijk: stuur een brief naar (geen postzegel nodig):
                <br />
                Gemeente Voorbeeld
                <br />
                Klachtenbehandeling
                <br />
                Antwoordnummer 00000
                <br />
                Voorbeeld Stad
              </Paragraph>
            </UnorderedListItem>
          </UnorderedList>
          <Heading2>Niet eens met de uitspraak?</Heading2>
          <Paragraph>
            Bent u niet tevreden over de manier waarop uw klacht is opgelost? Neem dan contact op met de Nationale
            ombudsman.
          </Paragraph>
          <Heading2>Klachtenrapportage</Heading2>
          <Paragraph>
            Meer weten over de klachtenafhandeling in 2021? Lees dan de{' '}
            <Link href="/404">Klachtenrapportage en de raadsbrief</Link>.
          </Paragraph>
        </Article>
        <PreFooterNav />
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
