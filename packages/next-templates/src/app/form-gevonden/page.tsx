'use client';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';
import {
  Button,
  ButtonGroup,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading1,
  Page,
  Paragraph,
  Textarea,
  Textbox,
} from '@utrecht/component-library-react';
// import { UtrechtIconArrow } from '@utrecht/web-component-library-react';

export default function Home() {
  return (
    <Page>
      <Heading1>Maak een melding een gevonden sok</Heading1>
      <FormField type="text">
        <Paragraph>
          <FormLabel htmlFor="3a43bbe9-635c-46c2-86cd-b0aa63855598">Voornaam</FormLabel>
        </Paragraph>
        <Paragraph>
          <Textbox id="3a43bbe9-635c-46c2-86cd-b0aa63855598" name="message" type="text" />
        </Paragraph>
      </FormField>
      <FormField type="text">
        <Paragraph>
          <FormLabel htmlFor="c0b1972a-467c-11ee-be56-0242ac120002">Achternaam</FormLabel>
        </Paragraph>
        <Paragraph>
          <Textbox id="c0b1972a-467c-11ee-be56-0242ac120002" name="message" type="text" />
        </Paragraph>
      </FormField>
      <FormField type="text">
        <Paragraph>
          <FormLabel htmlFor="aae98c3f-64ab-4127-a123-a0e932cff8ca">Telefoon</FormLabel>
        </Paragraph>
        <Paragraph>
          <Textbox id="aae98c3f-64ab-4127-a123-a0e932cff8ca" name="message" type="text" />
        </Paragraph>
      </FormField>
      <FormField type="text">
        <Paragraph>
          <FormLabel htmlFor="d16b6417-6b16-482b-b032-c5a4e003e449">E-mail</FormLabel>
        </Paragraph>
        <Paragraph>
          <Textbox id="d16b6417-6b16-482b-b032-c5a4e003e449" name="message" type="text" />
        </Paragraph>
      </FormField>
      <FormField type="text">
        <Paragraph>
          <FormLabel htmlFor="3661edb0-b50b-429d-8567-84a9c81f2562">Beschrijving sok en/of sokken</FormLabel>
        </Paragraph>
        <FormFieldDescription>
          Geef zo goed mogelijk de kenmerken van de sok aan,<Paragraph></Paragraph> zodat we hem zo snel mogelijk met
          zijn vriendje kunnen herenigen.
        </FormFieldDescription>
        <Paragraph>
          <Textarea id="3661edb0-b50b-429d-8567-84a9c81f2562" name="message" />
        </Paragraph>
      </FormField>
      <FormField type="text">
        <Paragraph>
          <FormLabel htmlFor="46a02385-905e-40fe-8f2e-97499814bce6">Waar heb je de sok gevonden?</FormLabel>
        </Paragraph>
        <Paragraph>
          <Textarea id="46a02385-905e-40fe-8f2e-97499814bce6" name="message" />
        </Paragraph>
        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor="4e1f98e4-2749-4088-84a0-4e3841cf8869">Plaatsnaam</FormLabel>
          </Paragraph>
          <Paragraph>
            <Textbox id="4e1f98e4-2749-4088-84a0-4e3841cf8869" name="message" type="text" />
          </Paragraph>
        </FormField>
      </FormField>
      <ButtonGroup>
        <Button appearance="primary-action-button">Versturen</Button>
      </ButtonGroup>
    </Page>
  );
}
