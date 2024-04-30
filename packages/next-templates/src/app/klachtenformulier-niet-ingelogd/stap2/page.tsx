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
  FormFieldDescription,
  FormLabel,
  Heading1,
  Heading2,
  Heading3,
  Icon,
  Link,
  Page,
  PageContent,
  Paragraph,
  RadioButton,
  Textbox,
} from '@utrecht/component-library-react';

import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { FormNav } from '@/components/FormNav/FormNav';
import { IconChevronUp, IconChevronRight, IconX, IconArrowLeft } from '@tabler/icons-react';

import { useEffect } from 'react';
// import { SP } from 'next/dist/shared/lib/utils';

import '@/app/styling/css/wmebv.css';
import '@/app/styling/css/klachtenformulier-niet-ingelogd.css';
import '@utrecht/design-tokens/dist/index.css';

export default function home() {
  const stepProgressLabel = 'Stap 2 van 4';
  const stepLabel = 'Uw gegevens';
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
          <BreadcrumbNavLink href="/klachtenformulier-niet-ingelogd/stap1">
            <IconArrowLeft></IconArrowLeft>Vorige Stap
          </BreadcrumbNavLink>
        </BreadcrumbNav>

        <Article id="main" className="voorbeeld-article-space voorbeeld-main-layout">
          <div>
            <Heading1>Klacht over de gemeente doorgeven </Heading1>
            <Paragraph lead>Stap 2 van 4</Paragraph>
            <Paragraph>Vul de vakjes met een * altijd in. Anders kunt u niet verder.</Paragraph>

            <Heading2>Uw gegevens</Heading2>

            <form>
              <Fieldset>
                <FieldsetLegend>Bent u een persoon of een bedrijf?</FieldsetLegend>
                <FormField type="radio">
                  <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                    <FormLabel htmlFor="persoon" type="radio">
                      <RadioButton
                        name="persoon-of-bedrijf"
                        id="persoon"
                        className="utrecht-form-field__input"
                      ></RadioButton>
                      Persoon
                    </FormLabel>
                  </Paragraph>
                </FormField>

                <FormField type="radio">
                  <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                    <FormLabel htmlFor="bedrijf" type="radio">
                      <RadioButton
                        name="persoon-of-bedrijf"
                        id="bedrijf"
                        className="utrecht-form-field__input"
                      ></RadioButton>
                      Bedrijf
                    </FormLabel>
                  </Paragraph>
                </FormField>
              </Fieldset>

              {/* staat in figma niet in fieldset - wel gedaan want h3 per sectie in form - h3 in fieldsetlegend */}
              <Fieldset>
                <FieldsetLegend>
                  <Heading3>Persoonsgegevens</Heading3>
                </FieldsetLegend>
                <FormField>
                  <FormLabel htmlFor="voorletter">Voorletter(s)</FormLabel>
                  <FormFieldDescription></FormFieldDescription>
                  {/* zonder formfielddescription komt textbox naast formlabel te staan, met descrpt. eronder?  */}
                  <Textbox id="voorletter"></Textbox>
                  {/* is in Figma een korte textbox, bestaat die optie? */}
                </FormField>

                <FormField>
                  <FormLabel htmlFor="tussenvoegsel">Tussenvoegsel(s)</FormLabel>
                  <FormFieldDescription></FormFieldDescription>
                  <Textbox id="tussenvoegsel"></Textbox>
                </FormField>

                <FormField>
                  <FormLabel htmlFor="achternaam">Achternaam</FormLabel>
                  <FormFieldDescription></FormFieldDescription>
                  <Textbox id="achternaam"></Textbox>
                </FormField>
              </Fieldset>

              <Fieldset>
                <FieldsetLegend>
                  <Heading3>Adresgegevens</Heading3>
                </FieldsetLegend>

                <FormField>
                  <FormLabel htmlFor="postcode">Postcode</FormLabel>
                  <FormFieldDescription></FormFieldDescription>
                  <Textbox id="postcode"></Textbox>
                </FormField>

                <FormField>
                  <FormLabel htmlFor="huisnummer">Huisnummer</FormLabel>
                  <FormFieldDescription></FormFieldDescription>
                  <Textbox id="huisnummer"></Textbox>
                </FormField>

                <FormField>
                  <FormLabel htmlFor="huisletter">Huisletter</FormLabel>
                  <FormFieldDescription></FormFieldDescription>
                  <Textbox id="huisletter"></Textbox>
                </FormField>

                <FormField>
                  <FormLabel htmlFor="straatnaam">Straatnaam</FormLabel>
                  <FormFieldDescription></FormFieldDescription>
                  <Textbox id="straatnaam"></Textbox>
                </FormField>

                <FormField>
                  <FormLabel htmlFor="woonplaats">Woonplaats</FormLabel>
                  <FormFieldDescription></FormFieldDescription>
                  <Textbox id="woonplaats"></Textbox>
                </FormField>
              </Fieldset>

              <Fieldset>
                <FieldsetLegend>
                  <Heading3>Contactgegevens</Heading3>
                </FieldsetLegend>

                <FormField>
                  <FormLabel htmlFor="telefoonnummer">Telefoonnummer</FormLabel>
                  <FormFieldDescription></FormFieldDescription>
                  <Textbox id="woonplaats"></Textbox>
                </FormField>

                <FormField>
                  <FormLabel htmlFor="emailadres">E-mailadres</FormLabel>
                  <FormFieldDescription></FormFieldDescription>
                  <Textbox id="emailadres"></Textbox>
                </FormField>
              </Fieldset>

              <ButtonGroup direction="column">
                <ButtonLink
                  type="submit"
                  href="/klachtenformulier-niet-ingelogd/stap3"
                  appearance="primary-action-button"
                >
                  Volgende stap
                  <IconChevronRight />
                </ButtonLink>

                <Link href="/404" className="voorbeeld-link-stoppen">
                  <IconX></IconX>
                  Stoppen met het formulier
                </Link>
              </ButtonGroup>
            </form>

            <Link href="#">
              <IconChevronUp></IconChevronUp>
              Naar boven
            </Link>
          </div>

          <div className="voorbeeld-formnav__stap2">
            <FormNav></FormNav>
          </div>
        </Article>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
