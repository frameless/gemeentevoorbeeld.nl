'use client';
import {
  ButtonGroup,
  Document,
  ButtonLink,
  Button,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading1,
  Page,
  PageContent,
  Paragraph,
  Textarea,
  Textbox,
  Heading2,
  Select,
  SelectOption,
} from '@utrecht/component-library-react';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import { FormFieldInput } from '@/components/FormFieldInput/FormFieldInput';

export default function Home() {
  return (
    <Document>
      <ExampleHeaderFunnel />
      <Page>
        <PageContent>
          <Heading1>Melding verloren sokken</Heading1>
          <Paragraph lead>
            Sokken kwijt? That socks! Vul alle velden in. Als een veld optioneel is, staat dit erbij.
          </Paragraph>
          <Heading2>Beschrijving sokken</Heading2>
          <FormField>
            <FormLabel>Aantal</FormLabel>
            <Select>
              <SelectOption value="1">Kies een aantal</SelectOption>
              <SelectOption value="2">1</SelectOption>
              <SelectOption value="3">2</SelectOption>
            </Select>
          </FormField>
          <FormField>
            <FormLabel>Aantal</FormLabel>
            <Select>
              <SelectOption value="1">Kies een kleur</SelectOption>
              <SelectOption value="2">Beige</SelectOption>
              <SelectOption value="3">Blauw</SelectOption>
              <SelectOption value="4">Bruin</SelectOption>
              <SelectOption value="5">Creme</SelectOption>
              <SelectOption value="6">Diverse</SelectOption>
              <SelectOption value="7">Geel</SelectOption>
              <SelectOption value="8">Goud</SelectOption>
              <SelectOption value="9">Grijs</SelectOption>
              <SelectOption value="10">Groen</SelectOption>
              <SelectOption value="11">Oranje</SelectOption>
              <SelectOption value="12">Paars</SelectOption>
              <SelectOption value="13">Rood</SelectOption>
              <SelectOption value="14">Roze</SelectOption>
              <SelectOption value="15">Wit</SelectOption>
              <SelectOption value="16">Zilver</SelectOption>
              <SelectOption value="17">Zwart</SelectOption>
            </Select>
          </FormField>
          <FormField>
            <FormLabel>Merk</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel>Aantal</FormLabel>
            <Select>
              <SelectOption value="1">Kies een waarde</SelectOption>
              <SelectOption value="2">Onbekend</SelectOption>
              <SelectOption value="3">Meer dan 450 euro</SelectOption>
              <SelectOption value="3">Minder dan 450 euro</SelectOption>
            </Select>
          </FormField>
          <FormField>
            <FormLabel>Aanvullende informatie</FormLabel>
            <FormFieldDescription>Bijvoorbeeld een opdruk, gat of geur.</FormFieldDescription>
            <Textarea />
          </FormField>
          <FormField>
            <Button>Foto kiezen</Button>
          </FormField>
          <Heading2>Waar ben u uw sokken verloren?</Heading2>
          <FormField>
            <FormLabel>Plaats</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel>Straat</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel>Ter hoogte van</FormLabel>
            <FormFieldDescription>Bijvoorbeeld het huisnummer, parkeerplaats of speeltuintje.</FormFieldDescription>
            <Textarea />
          </FormField>
          <Heading2>Uw gegevens</Heading2>
          <Paragraph>Zodat wij u kunnen bereiken wanneer uw sokken gevonden zijn.</Paragraph>
          <FormField>
            <FormLabel>Geslacht</FormLabel>
            <Select>
              <SelectOption value="1">Kies een geslacht</SelectOption>
              <SelectOption value="2"></SelectOption>
              <SelectOption value="3">2</SelectOption>
            </Select>
          </FormField>
          <FormField>
            <FormLabel>Voorletter(s)</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel>Tussenvoegsel (optioneel)</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel>Achternaam</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel>E-mailadres</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel>Telefoonnummer</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel>Straat</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel>Huisnummer</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel>Toevoeging (Optioneel)</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel>Postcode</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel>Woonplaats</FormLabel>
            <Textbox />
          </FormField>
          <ButtonGroup>
            <ButtonLink href="#" appearance="primary-action-button">
              annuleren
            </ButtonLink>
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
