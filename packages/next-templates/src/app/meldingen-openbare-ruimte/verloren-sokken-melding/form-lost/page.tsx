'use client';
import {
  ButtonGroup,
  ButtonLink,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading1,
  Page,
  PageContent,
  Paragraph,
  Textarea,
  Textbox,
} from '@utrecht/component-library-react';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { FormFieldInput } from '@/components/FormFieldInput/FormFieldInput';

export default function Home() {
  return (
    <Page>
      <PageContent>
        <Heading1>Maak een melding van uw kwijtgeraakte sok</Heading1>
        <FormFieldInput
          classification={false}
          autocomplete="name"
          htmlfor="name"
          id="name"
          type="text"
          name="Voornaam"
          label="voornaam"
        ></FormFieldInput>
        <FormFieldInput
          classification={false}
          autocomplete="family-name"
          htmlfor="achternaam"
          id="achternaam"
          type="family-name"
          name="Achternaam"
          label="Achternaam"
        ></FormFieldInput>
        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor="Telefoon">Telefoon</FormLabel>
          </Paragraph>
          <Paragraph>
            <Textbox id="Telefoon" name="message" type="text" />
          </Paragraph>
        </FormField>
        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor="Email">E-mail</FormLabel>
          </Paragraph>
          <Paragraph>
            <Textbox id="Email" name="message" type="text" />
          </Paragraph>
        </FormField>
        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor="Beschrijving">Beschrijving sok en/of sokken</FormLabel>
          </Paragraph>
          <FormFieldDescription id="Beschrijving">
            Geef zo goed mogelijk de kenmerken van de sok aan,<Paragraph></Paragraph> zodat we hem zo snel mogelijk met
            zijn vriendje kunnen herenigen.
          </FormFieldDescription>
          <Paragraph>
            <Textarea aria-describedby="Beschrijving" name="message" />
          </Paragraph>
        </FormField>
        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor="Waar-gevonden">Waar ben je je sok verloren?</FormLabel>
          </Paragraph>
          <Paragraph>
            <Textarea id="Waar-gevonden" name="message" />
          </Paragraph>
          <FormField type="text">
            <Paragraph>
              <FormLabel htmlFor="Plaatsnaam">Plaatsnaam</FormLabel>
            </Paragraph>
            <Paragraph>
              <Textbox id="Plaatsnaam" name="message" type="text" />
            </Paragraph>
          </FormField>
        </FormField>
        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor="Laatst-gezien">Wanneer heb je je sok voor het laatst gezien?</FormLabel>
          </Paragraph>
          <Paragraph>
            <Textbox id="Laatst-gezien" name="lost-date" type="date" />
          </Paragraph>
        </FormField>
        <ButtonGroup>
          <ButtonLink href="conformation-lost" appearance="primary-action-button">
            Versturen
          </ButtonLink>
        </ButtonGroup>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
