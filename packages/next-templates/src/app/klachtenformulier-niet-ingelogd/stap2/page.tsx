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
  Textbox,
  Textarea,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';

import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { IconChevronRight, IconX, IconArrowLeft } from '@tabler/icons-react';

import '@/app/styling/css/wmebv.css';
import '@/app/styling/css/klachtenformulier-niet-ingelogd.css';
import '@utrecht/design-tokens/dist/index.css';

import { useEffect } from 'react';
import { SP } from 'next/dist/shared/lib/utils';

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

        <Article id="main" className="voorbeeld-article-space ">
          <Heading1>Klacht over de gemeente doorgeven </Heading1>
          <Paragraph>Stap 2 van 4</Paragraph>
          <Paragraph>Vul de vakjes met een * altijd in. Anders kunt u niet verder.</Paragraph>

          <Heading2>Uw gegevens</Heading2>
          <form>
            <FormField>
              <FieldsetLegend>Bent u een persoon of een bedrijf?</FieldsetLegend>
              <div className="voorbeeld-radio-button">
                <RadioButton></RadioButton>
                <Paragraph>Persoon</Paragraph>
              </div>
              <div className="voorbeeld-radio-button">
                <RadioButton></RadioButton>
                <Paragraph>Bedrijf</Paragraph>
              </div>
            </FormField>

            <Heading3>Persoonsgegevens</Heading3>

            <FormField>
              <FieldsetLegend>Voorletter(s)</FieldsetLegend>
              <Textbox></Textbox>
            </FormField>

            <FormField>
              <FieldsetLegend>Tussenvoegsel(s) (niet verplicht)</FieldsetLegend>
              <Textbox></Textbox>
            </FormField>

            <FormField>
              <FieldsetLegend>Achternaam</FieldsetLegend>
              <Textbox></Textbox>
            </FormField>

            <Heading3>Adresgegevens</Heading3>
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
          <div className="voorbeeld-side-content">
            <Heading2>Voortgang</Heading2>
            <UnorderedList>
              <UnorderedListItem>Uw klacht</UnorderedListItem>
              <UnorderedListItem>Uw gegevens</UnorderedListItem> {/* Current step (2/4) */}
              <UnorderedListItem>Bijlage toevoegen</UnorderedListItem>
              <UnorderedListItem>Overzicht</UnorderedListItem>
            </UnorderedList>
          </div>
        </Article>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
