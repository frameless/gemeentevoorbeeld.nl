'use client';

import {
  Article,
  ButtonLink,
  BreadcrumbNav,
  BreadcrumbNavLink,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading1,
  Heading2,
  Heading3,
  Link,
  Page,
  PageContent,
  Paragraph,
  RadioButton,
  Separator,
  SpotlightSection,
  Textbox,
  Textarea,
  UnorderedList,
  UnorderedListItem,
  Button,
} from '@utrecht/component-library-react';

import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { IconAlertTriangleFilled, IconArrowLeft, IconChevronRight, IconX } from '@tabler/icons-react';

import '@/app/styling/css/wmebv.css';
import '@/app/styling/css/detail-page.css';
import '@/app/styling/css/klachtenformulier-niet-ingelogd.css';
import '@utrecht/design-tokens/dist/index.css';

import { useEffect } from 'react';

export default function home() {
  const stepProgressLabel = 'Stap 3 van 4';
  const stepLabel = 'Bestanden toevoegen';
  const websiteLabel = 'gemeente voorbeeld';

  useEffect(() => {
    if (typeof document?.title === 'string') {
      document.title = `${stepProgressLabel}: ${stepLabel} - ${websiteLabel}`;
    }
  }, []);

  return (
    <Page>
      <ExampleHeader />
      <ExampleNavigation />
      <PageContent className="voorbeeld-page-content-flex">
        <BreadcrumbNav label="Kruimelpad">
          <BreadcrumbNavLink href="//klachtenformulier-niet-ingelogd/stap2">
            <IconArrowLeft></IconArrowLeft>Vorige Stap
          </BreadcrumbNavLink>
        </BreadcrumbNav>

        <Article id="main" className="voorbeeld-article-space ">
          <Heading1>Klacht over de gemeente doorgeven</Heading1>
          <Paragraph>Stap 3 van 4</Paragraph>
          <Paragraph>Vul de vakjes met een * altijd in. Anders kunt u niet verder.</Paragraph>

          <Heading2>Bestanden toevoegen</Heading2>
          <form>
            <FormField>
              <FieldsetLegend>Wilt u een bestand meesturen? </FieldsetLegend>
              <div className="voorbeeld-radio-button">
                <RadioButton></RadioButton>
                <Paragraph>Ja, ik wil een bestand meesturen</Paragraph>
              </div>
              <div className="voorbeeld-radio-button">
                <RadioButton></RadioButton>
                <Paragraph>Nee, geen bestand meesturen</Paragraph>
              </div>

              <SpotlightSection className="utrecht-spotlight-section voorbeeld-spotlight-section">
                <Heading2>Bestanden per post</Heading2>
                <Paragraph className="voorbeeld-paragraph-spotlight">
                  Hebt u bestanden die u niet digitaal kunt versturen? Stuur het formulier en de bijlagen dan per post
                  naar Gemeente Voorbeeld (geen postzegel nodig). Zet op elke bijlage het zaaknummer.
                  {/* optie: tot nu toe ingevulde klacht printen? */}
                  {/* aangeven dat gebruiker kan stoppen met dit formulier? */}
                  {/* buttonlink naar adresgegevens? */}
                  {/* deze melding aan het begin van het formulier */}
                </Paragraph>
                {/* eventueel adresgegevens hier al neerzetten? */}
                {/* <Paragraph>
                  Gemeente Voorbeeld
                  <br />
                  Klachtenbehandeling
                  <br />
                  Antwoordnummer 00000
                  <br />
                  Voorbeeld Stad
                </Paragraph> */}
              </SpotlightSection>

              <FieldsetLegend>Bestanden toevoegen </FieldsetLegend>
              <UnorderedList>
                <UnorderedListItem>U kunt meerdere bestanden tegelijk toevoegen.</UnorderedListItem>
                <UnorderedListItem>U mag maximaal 10 Mb aan bestanden toevoegen.</UnorderedListItem>
                <UnorderedListItem>
                  Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif.
                </UnorderedListItem>
              </UnorderedList>
            </FormField>

            <ButtonLink href="/404" appearance="secondary-action-button">
              <FieldsetLegend>Bestanden kiezen</FieldsetLegend>
            </ButtonLink>

            <FieldsetLegend>
              Ik wil na behandeling van mijn klacht meewerken aan een tevredenheidsonderzoek.  
            </FieldsetLegend>
            <div className="voorbeeld-radio-button">
              <RadioButton></RadioButton>
              <Paragraph>Ja, ik doe mee met een tevredenheidsonderzoek</Paragraph>
            </div>
            <div className="voorbeeld-radio-button">
              <RadioButton></RadioButton>
              <Paragraph>Nee, ik doe niet mee met een tevredenheidsonderzoek</Paragraph>
            </div>
          </form>

          <ButtonLink href="/klachtenformulier-niet-ingelogd/stap2" appearance="primary-action-button">
            Volgende stap
            <IconChevronRight />
          </ButtonLink>

          <Link href="/404" className="voorbeeld-link-stoppen">
            <IconX />
            Stoppen met het formulier
          </Link>
          {/* TODO: <PreFooterNav/> */}

          {/* TODO: sidenav */}
          <Heading2>Voortgang</Heading2>
          <UnorderedList>
            <UnorderedListItem>Uw klacht</UnorderedListItem>
            <UnorderedListItem>Uw gegevens</UnorderedListItem>
            <UnorderedListItem>Bijlage toevoegen</UnorderedListItem>
            <UnorderedListItem>Overzicht</UnorderedListItem>
          </UnorderedList>
        </Article>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
