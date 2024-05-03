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
  HeadingGroup,
  Link,
  Page,
  PageContent,
  Paragraph,
  PreHeading,
  RadioButton,
  Textbox,
  Textarea,
} from '@utrecht/component-library-react';

import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { FormNav } from '@/components/FormNav/FormNav';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { IconChevronUp, IconX, IconArrowLeft, IconChevronRight } from '@tabler/icons-react';

import { useEffect } from 'react';

import '@/app/styling/css/wmebv.css';
import '@/app/styling/css/klachtenformulier-niet-ingelogd.css';
import '@utrecht/design-tokens/dist/index.css';

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
            <IconArrowLeft />
            Terug
          </BreadcrumbNavLink>
        </BreadcrumbNav>

        <Article id="main" className="voorbeeld-article-space voorbeeld-main-layout">
          <div>
            <Heading1>Klacht over de gemeente doorgeven</Heading1>

            <HeadingGroup className="voorbeeld-headinggroup">
              <PreHeading>{stepProgressLabel}</PreHeading>
              <Heading2>{stepLabel}</Heading2>
              <Paragraph>Vul de vakjes met een * altijd in. Anders kunt u niet verder.</Paragraph>
            </HeadingGroup>

            <form>
              <Fieldset role="radiogroup">
                <FieldsetLegend>Weet u voor welke afdeling de medewerker werkt? *</FieldsetLegend>
                <FormField type="radio">
                  <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                    <FormLabel htmlFor="publiekzaken" type="radio">
                      <RadioButton
                        name="afdeling"
                        id="publiekzaken"
                        className="utrecht-form-field__input"
                      ></RadioButton>
                      Publiekzaken: bijvoorbeeld paspoort of trouwen of de wachttijd als u ons belt.
                    </FormLabel>
                  </Paragraph>
                </FormField>

                <FormField type="radio">
                  <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                    <FormLabel htmlFor="stadsbedrijven" type="radio">
                      <RadioButton
                        name="afdeling"
                        id="stadsbedrijven"
                        className="utrecht-form-field__input"
                      ></RadioButton>
                      Stadsbedrijven: bijvoorbeeld ophalen afval, parken en bomen of sportplekken.
                    </FormLabel>
                  </Paragraph>
                </FormField>

                <FormField type="radio">
                  <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                    <FormLabel htmlFor="ruimte" type="radio">
                      <RadioButton name="afdeling" id="ruimte" className="utrecht-form-field__input"></RadioButton>
                      Ruimte: bijvoorbeeld verkeer, bouwen, energie en klimaat of speelruimte.
                    </FormLabel>
                  </Paragraph>
                </FormField>

                <FormField type="radio">
                  <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                    <FormLabel htmlFor="werk-en-inkomen" type="radio">
                      <RadioButton
                        name="afdeling"
                        id="werk-en-inkomen"
                        className="utrecht-form-field__input"
                      ></RadioButton>
                      Werk en Inkomen: bijvoorbeeld bijstand, schulddienstverlening of Wmo.
                    </FormLabel>
                  </Paragraph>
                </FormField>

                <FormField type="radio">
                  <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                    <FormLabel htmlFor="vergunning-toezicht-handhaving" type="radio">
                      <RadioButton
                        name="afdeling"
                        id="vergunning-toezicht-handhaving"
                        className="utrecht-form-field__input"
                      ></RadioButton>
                      Vergunningen, Toezicht en Handhaving: bijvoorbeeld handhavers (boa’s) parkeerboetes, of
                      vergunningen.
                    </FormLabel>
                  </Paragraph>
                </FormField>

                <FormField type="radio">
                  <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                    <FormLabel htmlFor="anders-ik-weet-het-niet" type="radio">
                      <RadioButton
                        name="afdeling"
                        id="anders-ik-weet-het-niet"
                        className="utrecht-form-field__input"
                      ></RadioButton>
                      Anders of ik weet het niet
                    </FormLabel>
                  </Paragraph>
                </FormField>
              </Fieldset>

              <FormField>
                <FormLabel htmlFor="over-wie">Over wie gaat uw klacht?</FormLabel>

                <FormFieldDescription>Bijvoorbeeld de naam van een medewerker of een afdeling.</FormFieldDescription>
                <Textbox id="over-wie"></Textbox>
              </FormField>

              <FormField>
                <FormLabel htmlFor="uw-klacht">Wat is uw klacht? *</FormLabel>
                <FormFieldDescription>Beschrijf uw klacht in maximaal 140 karakters.</FormFieldDescription>
                {/* Deze staat er in het ontwerp niet bij, hint voor gebruiker is prettig (check: 140?)*/}
                <Textarea id="uw-klacht"></Textarea>
              </FormField>

              <FormField>
                <FormLabel htmlFor="wanneer">Wanneer gebeurde dit? *</FormLabel>
                <FormFieldDescription>Geef de datum(s) door waarover uw klacht gaat.</FormFieldDescription>
                <Textarea id="wanneer"></Textarea>
              </FormField>

              <FormField>
                <FormLabel htmlFor="hoe-laat">Hoe laat?</FormLabel>
                <FormFieldDescription>Geef het tijdstip(en) door waarover uw klacht gaat.</FormFieldDescription>
                <Textarea id="hoe-laat"></Textarea>
              </FormField>

              <FormField>
                <FormLabel htmlFor="gewenste-oplossing">Wat wilt u dat wij doen om uw klacht op te lossen? *</FormLabel>
                <FormFieldDescription>Beschrijf de gewenste oplossing in maximaal 140 karakters.</FormFieldDescription>
                {/* Deze staat er in het ontwerp niet bij, hint voor gebruiker is prettig (check: 140?)*/}
                <Textarea id="gewenste-oplossing"></Textarea>
              </FormField>

              <ButtonGroup direction="column">
                <ButtonLink
                  type="submit"
                  href="/klachtenformulier-niet-ingelogd/stap2"
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
            </form>

            <Link href="#">
              <IconChevronUp />
              Naar boven
            </Link>
          </div>

          <div className="voorbeeld-formnav__stap1">
            <FormNav></FormNav>
          </div>
        </Article>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
