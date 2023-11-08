'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtForm,
  UtrechtFormFieldDescription,
  UtrechtFormFieldTextarea,
  UtrechtHeading,
  UtrechtLink,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
} from '@utrecht/web-component-library-react';
import { ExampleHeaderWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { FormField, FormLabel, UnorderedList } from '@utrecht/component-library-react';
import '@/app/styling/css/wmebv.css';

export default function home() {
  return (
    <UtrechtPage>
      <UtrechtPageContent>
        <UtrechtArticle>
          <UtrechtHeading>Vraag aan de gemeente</UtrechtHeading>
          <UtrechtParagraph lead>Stap 1 van 4</UtrechtParagraph>
          <UtrechtForm>
            <FormLabel>Stel uw vraag</FormLabel>
            <UtrechtFormFieldTextarea />
          </UtrechtForm>
          <FormLabel>Bestand toevoegen (niet verplicht)</FormLabel>
          <UnorderedList>U kunt meerdere bestanden tegelijk toevoegen.</UnorderedList>
          <UnorderedList>U mag maximaal 10 Mb aan bestanden toevoegen.</UnorderedList>
          <UnorderedList>Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif.</UnorderedList>
          <UtrechtButton>Bestand kiezen</UtrechtButton>
          <UtrechtButton>Versturen</UtrechtButton>
          <UtrechtLink>Opslaan en later verder</UtrechtLink>
          <UtrechtLink>Sluit formulier</UtrechtLink>
        </UtrechtArticle>
      </UtrechtPageContent>
    </UtrechtPage>
  );
}
