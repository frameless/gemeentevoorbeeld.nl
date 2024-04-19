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
  Link,
  Page,
  PageContent,
  Paragraph,
  RadioButton,
  Separator,
  Textbox,
  Textarea,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';

import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { IconX, IconArrowLeft, IconChevronRight } from '@tabler/icons-react';

import '@/app/styling/css/wmebv.css';
import '@/app/styling/css/klachtenformulier-niet-ingelogd.css';
import '@utrecht/design-tokens/dist/index.css';

import { useEffect } from 'react';

export default function home() {
  const stepProgressLabel = 'Stap 1 van 4';
  const stepLabel = 'Uw klacht';
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
        <BreadcrumbNav className="voorbeeld-breadcrumb-nav" label="Kruimelpad">
          <BreadcrumbNavLink href="/productpagina-klachtenformulier">
            <IconArrowLeft></IconArrowLeft>Terug
          </BreadcrumbNavLink>
        </BreadcrumbNav>

        <Article id="main" className="voorbeeld-article-space voorbeeld-main-layout">
          <div>
            <Heading1>Klacht over de gemeente doorgeven</Heading1>
            <Paragraph lead>Stap 1 van 4</Paragraph>
            <Paragraph>Vul de vakjes met een * altijd in. Anders kunt u niet verder.</Paragraph>

            <Heading2>Uw klacht</Heading2>
            <form>
              <FormLabel></FormLabel>
              <Fieldset>
                <FormField>
                  <FieldsetLegend>Weet u voor welke afdeling de medewerker werkt? *</FieldsetLegend>
                  {/* TODO: should only the radiobutton be clickable? Or paragraph as well? */}
                  <div className="voorbeeld-radio-buttons">
                    <div className="voorbeeld-radio-button">
                      <RadioButton></RadioButton>
                      <Paragraph>
                        Publiekzaken: bijvoorbeeld paspoort of trouwen of de wachttijd als u ons belt.
                      </Paragraph>
                    </div>

                    <div className="voorbeeld-radio-button">
                      <RadioButton></RadioButton>
                      <Paragraph>
                        Stadsbedrijven: bijvoorbeeld ophalen afval, parken en bomen of sportplekken.
                      </Paragraph>
                    </div>

                    <div className="voorbeeld-radio-button">
                      <RadioButton></RadioButton>
                      <Paragraph>Ruimte: bijvoorbeeld verkeer, bouwen, energie en klimaat of speelruimte.</Paragraph>
                    </div>

                    <div className="voorbeeld-radio-button">
                      <RadioButton></RadioButton>
                      <Paragraph>Werk en Inkomen: bijvoorbeeld bijstand, schulddienstverlening of Wmo.</Paragraph>
                    </div>

                    <div className="voorbeeld-radio-button">
                      <RadioButton></RadioButton>
                      <Paragraph>
                        Vergunningen, Toezicht en Handhaving: bijvoorbeeld handhavers (boa’s) parkeerboetes, of
                        vergunningen.
                      </Paragraph>
                    </div>

                    <div className="voorbeeld-radio-button">
                      <RadioButton></RadioButton>
                      <Paragraph>Anders of ik weet het niet</Paragraph>
                    </div>
                  </div>
                </FormField>

                <FormField>
                  <FieldsetLegend>Over wie gaat uw klacht?</FieldsetLegend>
                  <FormFieldDescription className="utrecht-form-field-description-color">
                    Bijvoorbeeld de naam van een medewerker of een afdeling.
                  </FormFieldDescription>
                  <Textbox></Textbox>
                </FormField>

                <FormField>
                  <FieldsetLegend>Wat is uw klacht? *</FieldsetLegend>
                  {/* <FormFieldDescription></FormFieldDescription> */}
                  {/* Deze staat er in het ontwerp niet bij, is die niet nodig? 
                Wellicht een hint voor de gebruiker: omschrijf uw klacht in maximaal 140 karakters */}
                  <Textarea></Textarea>
                </FormField>

                <FormField>
                  <FieldsetLegend>Wanneer gebeurde dit? *</FieldsetLegend>
                  <FormFieldDescription>Geef de datum(s) door waarover uw klacht gaat.</FormFieldDescription>
                  <Textarea></Textarea>
                </FormField>

                <FormField>
                  <FieldsetLegend>Hoe laat?</FieldsetLegend>
                  <FormFieldDescription>Geef het tijdstip(en) door waarover uw klacht gaat.</FormFieldDescription>
                  <Textarea></Textarea>
                </FormField>

                <FormField>
                  <FieldsetLegend>Wat wilt u dat wij doen om uw klacht op te lossen? *</FieldsetLegend>
                  {/* <FormFieldDescription></FormFieldDescription> */}
                  {/* Deze staat er in het ontwerp niet bij, is die niet nodig? 
                Wellicht een hint voor de gebruiker: omschrijf de gewenste oplossing in maximaal 140 karakters */}
                  <Textarea></Textarea>
                </FormField>
              </Fieldset>
            </form>

            <ButtonLink href="/klachtenformulier-niet-ingelogd/stap2" appearance="primary-action-button">
              Volgende stap
              <IconChevronRight />
            </ButtonLink>

            <Link href="/404" className="voorbeeld-link-stoppen">
              <IconX />
              Stoppen met het formulier
            </Link>

            {/* TODO: import <PreFooterNav/>  */}
          </div>

          {/* TODO: sidenav? or make a FormNav Component?*/}
          <div className="voorbeeld-side-content">
            <Separator>
              <Heading2>Voortgang</Heading2>
            </Separator>
            <UnorderedList>
              <UnorderedListItem>Uw klacht</UnorderedListItem> {/* Current step (1/4) - Bulletpoint dark */}
              <Separator></Separator>
              <UnorderedListItem>Uw gegevens</UnorderedListItem>
              {/* Bulletpoint grey */}
              <Separator></Separator>
              <UnorderedListItem>Bijlage toevoegen</UnorderedListItem>
              {/* Bulletpoint grey */}
              <Separator></Separator>
              <UnorderedListItem>Overzicht</UnorderedListItem>
              {/* Bulletpoint grey */}
              <Separator></Separator>
            </UnorderedList>
          </div>
        </Article>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
