'use client';
import {
  ButtonGroup,
  Document,
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
              <SelectOption disabled value="">
                Select an option
              </SelectOption>
              <SelectOption value="1">1</SelectOption>
              <SelectOption value="2">2</SelectOption>
            </Select>
            <FormLabel>Aantal</FormLabel>
            <Select>
              <SelectOption disabled value="">
                Select an option
              </SelectOption>
              <SelectOption value="1">1</SelectOption>
              <SelectOption value="2">2</SelectOption>
            </Select>
          </FormField>
          <ButtonGroup>
            <ButtonLink href="conformation-lost" appearance="primary-action-button">
              Versturen
            </ButtonLink>
          </ButtonGroup>
        </PageContent>
      </Page>
      <ExampleFooter />
    </Document>
  );
}
