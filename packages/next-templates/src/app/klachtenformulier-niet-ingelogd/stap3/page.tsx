'use client';

import {
  Article,
  ButtonLink,
  ButtonGroup,
  BreadcrumbNav,
  BreadcrumbNavLink,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormLabel,
  Heading1,
  Heading2,
  Link,
  Page,
  PageContent,
  Paragraph,
  RadioButton,
  SpotlightSection,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';

import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { FormFieldFile } from '@/components/FormFieldFile';
import { FormNav } from '@/components/FormNav/FormNav';
import { IconChevronUp, IconArrowLeft, IconChevronRight, IconX } from '@tabler/icons-react';

import { useEffect } from 'react';

import '@/app/styling/css/wmebv.css';
import '@/app/styling/css/detail-page.css';
import '@/app/styling/css/klachtenformulier-niet-ingelogd.css';
import '@utrecht/design-tokens/dist/index.css';

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
        <BreadcrumbNav className="voorbeeld-breadcrumb-nav" label="Kruimelpad">
          <BreadcrumbNavLink href="/klachtenformulier-niet-ingelogd/stap2">
            <IconArrowLeft />
            Vorige Stap
          </BreadcrumbNavLink>
        </BreadcrumbNav>

        <Article id="main" className="voorbeeld-article-space voorbeeld-main-layout">
          <div>
            <Heading1>Klacht over de gemeente doorgeven</Heading1>
            <Paragraph lead>Stap 3 van 4</Paragraph>
            <Paragraph>Vul de vakjes met een * altijd in. Anders kunt u niet verder.</Paragraph>

            <Heading2>Bestanden toevoegen</Heading2>
            <SpotlightSection className="utrecht-spotlight-section voorbeeld-spotlight-section">
              <Heading2>Bestanden per post</Heading2>
              <Paragraph>
                Hebt u bestanden die u niet digitaal kunt versturen?
                <br />
                Stuur het formulier en de bijlagen dan per post naar
                <br />
                Gemeente Voorbeeld (geen postzegel nodig).
                <br />
                Zet op elke bijlage het zaaknummer.
              </Paragraph>
              <details>
                <summary>Adresgegevens Gemeente Voorbeeld</summary>
                <p>
                  Gemeente Voorbeeld
                  <br />
                  Klachtenbehandeling
                  <br />
                  Antwoordnummer 00000
                  <br />
                  Voorbeeld Stad
                </p>
              </details>
              {/* optie: tot nu toe ingevulde klacht printen? */}
              {/* aangeven dat gebruiker kan stoppen met dit formulier? */}
              {/* buttonlink naar adresgegevens? */}
              {/* deze melding aan het begin van het formulier */}
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
            <form>
              <Fieldset role="radiogroup">
                <FieldsetLegend>Wilt u een bestand meesturen?</FieldsetLegend>
                <FormField type="radio">
                  <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                    <FormLabel htmlFor="ja-bestand-meesturen" type="radio">
                      <RadioButton
                        name="bestand-meesturen"
                        id="ja-bestand-meesturen"
                        className="utrecht-form-field__input"
                      ></RadioButton>
                      Ja, ik wil een bestand meesturen
                    </FormLabel>
                  </Paragraph>
                </FormField>

                <FormField type="radio">
                  <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                    <FormLabel htmlFor="nee-bestand-meesturen" type="radio">
                      <RadioButton
                        name="bestand-meesturen"
                        id="nee-bestand-meesturen"
                        className="utrecht-form-field__input"
                      ></RadioButton>
                      Nee, geen bestand meesturen
                    </FormLabel>
                  </Paragraph>
                </FormField>
              </Fieldset>

              <FormFieldFile
                id="file-field"
                label="Bestand toevoegen"
                buttonLabel="Bestand kiezen"
                description={
                  <>
                    <UnorderedList className="voorbeeld-unordered-list-space">
                      <UnorderedListItem>U kunt meerdere bestanden tegelijk toevoegen.</UnorderedListItem>
                      <UnorderedListItem>U mag maximaal 10 Mb aan bestanden toevoegen.</UnorderedListItem>
                      <UnorderedListItem>
                        Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif.
                      </UnorderedListItem>
                    </UnorderedList>
                  </>
                }
                status={<Paragraph>Geen bestand gekozen</Paragraph>}
              ></FormFieldFile>

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

              <ButtonGroup direction="column">
                <ButtonLink
                  type="submit"
                  href="/klachtenformulier-niet-ingelogd/stap4"
                  appearance="primary-action-button"
                >
                  Volgende stap
                  <IconChevronRight />
                </ButtonLink>

                <Link href="/404" className="voorbeeld-link-stoppen">
                  <IconX />
                  Stoppen met het formulier
                </Link>
              </ButtonGroup>

              <Link href="#">
                <IconChevronUp />
                Naar boven
              </Link>
            </form>
          </div>

          <div className="voorbeeld-formnav__stap3">
            <FormNav />
          </div>
        </Article>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
