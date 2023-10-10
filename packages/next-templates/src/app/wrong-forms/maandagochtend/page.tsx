'use client';
import {
  ButtonGroup,
  ButtonLink,
  Document,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading1,
  Heading2,
  Page,
  PageContent,
  Paragraph,
  RadioButton,
  Textarea,
  Textbox,
} from '@utrecht/component-library-react';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import '../../styling/css/maandagochtend.css';

export default function Home() {
  return (
    <Document>
      <ExampleHeaderFunnel />
      <Page>
        <PageContent>
          <Heading1>Bezwaar indienen tegen maandagochtend</Heading1>
          <Paragraph>Vul alle velden in. Als een veld optioneel is, dan staat dit erbij.</Paragraph>
          <Heading2>Waarom maakt u bezwaar?</Heading2>
          <Paragraph>Kies een catogorie die bij uw melding past</Paragraph>
          <FormField>
            <FormLabel className="example-foute-form-label">Selecteer een reden</FormLabel>
          </FormField>
          <FormField>
            <RadioButton /> Nog een weekend modus
          </FormField>
          <FormField>
            <RadioButton /> Weekend te kort
          </FormField>
          <FormField>
            <RadioButton /> Vermoeidheid
          </FormField>
          <FormField>
            <RadioButton /> Puberteit
          </FormField>
          <FormField>
            <RadioButton /> Ajax heeft verloren
          </FormField>
          <FormField>
            <FormLabel className="example-foute-form-label">Aanvullende Onderbouwing</FormLabel>
            <FormFieldDescription>
              Onderbouw de reden die u heeft opgegeven en beschrijf wat er eventueel wat er aan gedaan kan worden.
            </FormFieldDescription>
            <Textarea></Textarea>
          </FormField>
          <Heading2>Uw gegevens</Heading2>
          <FormField>
            <FormLabel className="example-foute-form-label">Naam</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel className="example-foute-form-label">Straat</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel className="example-foute-form-label">Huisnummer</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel className="example-foute-form-label">Toevoeging(Optioneel)</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel className="example-foute-form-label">Postcode</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel className="example-foute-form-label">Woonplaats</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel className="example-foute-form-label">E-mailadres</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel className="example-foute-form-label">Telefoonnummer</FormLabel>
            <Textbox />
          </FormField>
          <ButtonGroup>
            <ButtonLink href="#" appearance="primary-action-button">
              Versturen
            </ButtonLink>
          </ButtonGroup>
        </PageContent>
      </Page>
      <ExampleFooter />
    </Document>
  );
}
