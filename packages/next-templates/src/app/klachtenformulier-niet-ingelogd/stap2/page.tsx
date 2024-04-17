'use client';

import {
  Article,
  Button,
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
  Textbox,
  Textarea,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';

import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { IconChevronUp, IconChevronRight, IconX } from '@tabler/icons-react';

import '@/app/styling/css/wmebv.css';
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
        <Article id="main" className="voorbeeld-article-space ">
          <BreadcrumbNav label="Kruimelpad">
            <BreadcrumbNavLink href="/">Home</BreadcrumbNavLink>
            <IconChevronRight></IconChevronRight>
            <BreadcrumbNavLink href="/productpagina-klachtenformulier">Product pagina</BreadcrumbNavLink>
          </BreadcrumbNav>

          <Heading1>Klacht over de gemeente doorgeven</Heading1>
          <Paragraph>Stap 1 van 4</Paragraph>
          <Paragraph>Vul de vakjes met een * altijd in. Anders kunt u niet verder.</Paragraph>
          {/* In het figma ontwerp heeft geen enkel vakje op deze pagina heeft *?  */}

          <form>
            <FormLabel>
              <Heading2>Uw klacht </Heading2>
            </FormLabel>
            <Fieldset>
              {/* styling: radiobutton + tekst naast elkaar */}
              <FormField>
                <FieldsetLegend>Weet u voor welke afdeling de medewerker werkt?</FieldsetLegend>
                <RadioButton></RadioButton>
                <Paragraph>Publiekzaken: bijvoorbeeld paspoort of trouwen of de wachttijd als u ons belt.</Paragraph>
                {/* alleen radiobutton klikbaar of ook paragraph? */}
                <RadioButton></RadioButton>
                <Paragraph>Stadsbedrijven: bijvoorbeeld ophalen afval, parken en bomen of sportplekken.</Paragraph>
                <RadioButton></RadioButton>
                <Paragraph>Ruimte: bijvoorbeeld verkeer, bouwen, energie en klimaat of speelruimte.</Paragraph>
                <RadioButton></RadioButton>
                <Paragraph>Werk en Inkomen: bijvoorbeeld bijstand, schulddienstverlening of Wmo.</Paragraph>
                <RadioButton></RadioButton>
                <Paragraph>
                  Vergunningen, Toezicht en Handhaving: bijvoorbeeld handhavers (boa’s) parkeerboetes, of vergunningen.
                </Paragraph>
                <RadioButton></RadioButton>
                <Paragraph>Anders of ik weet het niet</Paragraph>
              </FormField>

              <FormField>
                <FieldsetLegend>Over wie gaat uw klacht?</FieldsetLegend>
                <FormFieldDescription>Bijvoorbeeld de naam van een medewerker of een afdeling.</FormFieldDescription>
                <Textbox></Textbox>
              </FormField>

              <FormField>
                <FieldsetLegend>Wat is uw klacht?</FieldsetLegend>
                {/* <FormFieldDescription></FormFieldDescription> */}
                {/* Deze staat er in het ontwerp niet bij, is die niet nodig? 
                Wellicht een hint voor de gebruiker: omschrijf uw klacht in maximaal 140 karakters */}
                <Textarea></Textarea>
              </FormField>

              <FormField>
                <FieldsetLegend>Wanneer gebeurde dit?</FieldsetLegend>
                <FormFieldDescription>Geef de datum(s) door waarover uw klacht gaat.</FormFieldDescription>
                <Textarea></Textarea>
              </FormField>

              <FormField>
                <FieldsetLegend>Hoe laat?</FieldsetLegend>
                <FormFieldDescription>Geef het tijdstip(en) door waarover uw klacht gaat.</FormFieldDescription>
                <Textarea></Textarea>
              </FormField>

              <FormField>
                <FieldsetLegend>Wat wilt u dat wij doen om uw klacht op te lossen?</FieldsetLegend>
                {/* <FormFieldDescription></FormFieldDescription> */}
                {/* Deze staat er in het ontwerp niet bij, is die niet nodig? 
                Wellicht een hint voor de gebruiker: omschrijf de gewenste oplossing in maximaal 140 karakters */}
                <Textarea></Textarea>
              </FormField>
            </Fieldset>
          </form>
          <Button>
            Volgende stap
            <IconChevronRight />
          </Button>

          <Link>
            <IconChevronRight /> Opslaan en later verder
          </Link>

          <Link>
            <IconX />
            Stoppen met het formulier
          </Link>

          <Link>
            <IconChevronUp /> Naar boven
          </Link>

          <Heading2>Voortgang</Heading2>
          <UnorderedList>
            <UnorderedListItem>Uw klacht</UnorderedListItem>
            {/* deze moet dikgedrukt worden (als hint voor gebruiker op welke stap deze zich bevindt) */}
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
