'use client';

//importeert WEB COMPONENTS uit Utrecht library
// import {
//   UtrechtPage,
//   UtrechtPageContent,
// } from '@utrecht/web-component-library-react';

//importeert COMPONENTS uit Utrecht library
import {
  Article,
  ButtonLink,
  ButtonGroup,
  Button,
  Document,
  Heading1,
  Heading2,
  Heading3,
  Link,
  Paragraph,
  Page,
  PageContent,
  SpotlightSection,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';

//importeert LOKALE components (snowflakes?)
import { ExampleHeaderFunnelWmebv } from '@/components/wmebv/Header/ExampleHeaderFunnelWmebv';
import { ExampleFooterWmebv } from '@/components/wmebv/Footer/ExampleFooterWmebv';
import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader'; //welke header nodig?
import { BreadcrumbNav, BreadcrumbNavLink } from '@utrecht/component-library-react';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { IconChevronRight } from '@tabler/icons-react';
import '@utrecht/design-tokens/dist/index.css'; //importeert ?
import '@/app/styling/css/detail-page.css'; //importeert css styling -> moet nog aangepast worden naar styling voor productenpagina-klachtenform!
import { useEffect } from 'react'; //importeert ?

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
      <ExampleHeaderFunnelWmebv />
      <ExampleNavigation />

      <PageContent className="voorbeeld-page-content-flex">
        <Article id="main" className="voorbeeld-article-space ">
          <BreadcrumbNav label="Kruimelpad">
            <BreadcrumbNavLink href="/wmebv#">Terug</BreadcrumbNavLink>
          </BreadcrumbNav>
          <Heading1>{pageTitle}</Heading1>
          <Paragraph lead>
            Vindt u dat u niet netjes bent behandeld door een ambtenaar of bestuurder? U kunt dan online een klacht
            doorgeven. Een klacht handelen wij meestal binnen 6 weken af.
          </Paragraph>
          <SpotlightSection className="utrecht-spotlight-section">
            <Heading2>Is het een klacht of een melding?</Heading2>
            <Paragraph>
              Gaat uw klacht over iets dat kapot is op straat, ziet u vervuiling of merkt u overlast? Doe dan een
              melding. Meldingen gaan bijvoorbeeld over afval, vervuiling, groen, obstakels op de weg, kapotte
              lantaarnpalen, verkeer, overlast, graffiti, woonfraude of bedrijven die zich niet aan milieuregels houden.
            </Paragraph>
            <Paragraph>U laat ons via een melding weten wat er aan de hand is en op welke plek dit is.</Paragraph>
            <ButtonGroup>
              <ButtonLink href="/meldingen">
                Doe een melding<IconChevronRight></IconChevronRight>
              </ButtonLink>
            </ButtonGroup>
          </SpotlightSection>
          <Heading2>Waarover kunt u een klacht doorgeven?</Heading2>
          <UnorderedList>
            <UnorderedListItem>De persoonlijke behandeling door medewerkers of bestuurders.</UnorderedListItem>
            <UnorderedListItem>Het krijgen van te weinig of onjuiste informatie.</UnorderedListItem>
            <UnorderedListItem>Het niet reageren op vragen.</UnorderedListItem>
            <UnorderedListItem>
              {/* uw privacy = link? (niet in Figma, wel op Utrecht website) */}
              Het niet juist omgaan met uw privacy. Bijvoorbeeld het zonder uw toestemming doorgeven van uw medische
              gegevens.
            </UnorderedListItem>
          </UnorderedList>
          <ButtonLink href="/productenpagina-klachtenformulier/step-1">
            Ga naar het klachtenformulier<IconChevronRight></IconChevronRight>
          </ButtonLink>
          <Heading2>Geen klacht maar wel bezwaar maken?</Heading2>
          <Paragraph>Bent u het niet eens met een beslissing? Maak dan bezwaar.</Paragraph>
          {/* bezwaar = link? (niet in Figma, wel op Utrecht website) */}
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
              {/* hier moet een flex oid opkomen: 6 regels onder elkaar */}
              Schriftelijk: stuur een brief naar Gemeente Voorbeeld Klachtenbehandeling Antwoordnummer 00000 0000 AB
              Voorbeeld Stad (geen postzegel nodig)
            </UnorderedListItem>
          </UnorderedList>
          <Heading2>Niet eens met de uitspraak?</Heading2>
          <Paragraph>
            Bent u niet tevreden over de manier waarop uw klacht is opgelost? Neem dan contact op met de Nationale
            ombudsman.
          </Paragraph>
          <Heading2>Klachtenrapportage</Heading2> {/* is deze section relevant voor GV? */}
          <Paragraph>
            {/* klachtenrapportage t/m raadsbrief = link? (niet in Figma, wel op Utrecht website) */}
            Meer weten over de klachtenafhandeling in 2021? Lees dan de Klachtenrapportage 2021 en de raadsbrief.
          </Paragraph>
          {/* in Figma staat deze section in = <UtrechtPreFooterNavLink> deze is niet importeerbaar vanuit Utrecht Library */}
          <ButtonLink href="">
            <IconChevronRight></IconChevronRight>
            Wat vindt u van deze pagina
            {/* lege link - bestemmingspagina bestaat nog niet */}
            {/* styling: border weg = in Figma */}
          </ButtonLink>
        </Article>
      </PageContent>

      <ExampleFooterWmebv />
    </Page>
  );
}
