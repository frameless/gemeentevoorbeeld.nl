'use client';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';
import { FormField, FormLabel, Heading1, Heading2, Page, Paragraph, Textbox } from '@utrecht/component-library-react';
// import { UtrechtIconArrow } from '@utrecht/web-component-library-react';

export default function Home() {
  return (
    <Page>
      <Heading1>Meld hier uw gevonden sok en/of sokken</Heading1>

      <Paragraph></Paragraph>
      <Heading2>Uw Gegevens</Heading2>
      <FormField>
        <Paragraph>
          <FormLabel>Voornaam</FormLabel>
        </Paragraph>
      </FormField>

      <FormField invalid type="text">
        <Paragraph>
          <FormLabel htmlFor="3a43bbe9-635c-46c2-86cd-b0aa63855598">Voornaam</FormLabel>
        </Paragraph>
        <Paragraph>
          <Textbox id="3a43bbe9-635c-46c2-86cd-b0aa63855598" invalid name="message" required type="text" value="" />
        </Paragraph>
      </FormField>
    </Page>
  );
}
