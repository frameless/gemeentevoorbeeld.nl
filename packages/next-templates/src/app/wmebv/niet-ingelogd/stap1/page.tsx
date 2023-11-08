'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonLink,
  UtrechtForm,
  UtrechtFormFieldTextarea,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtLink,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
} from '@utrecht/web-component-library-react';
import { ExampleHeaderWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { FormLabel, UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import '@/app/styling/css/wmebv.css';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderWmebv />
      <ExampleNavigation />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <UtrechtLink href="/wmebv/Inloggen">Terug</UtrechtLink>
          <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
          <UtrechtParagraph className="voorbeeld-stap-spacing">Stap 1 van 4</UtrechtParagraph>
          <UtrechtHeading2 className="voorbeeld-heading-spacing">Uw vraag</UtrechtHeading2>
          <UtrechtForm>
            <FormLabel>Stel uw vraag</FormLabel>
            <UtrechtFormFieldTextarea />
          </UtrechtForm>
          <div className="voorbeeld-bijlage-flex-container">
            <UtrechtParagraph className="voorbeeld-paragraph-bijlage">Bestand toevoegen</UtrechtParagraph>
            <UtrechtParagraph>(Niet verplicht)</UtrechtParagraph>
          </div>
          <UnorderedList className="voorbeeld-unordered-list-space">
            <UnorderedListItem>U kunt meerdere bestanden tegelijk toevoegen.</UnorderedListItem>
            <UnorderedListItem>U mag maximaal 10 Mb aan bestanden toevoegen.</UnorderedListItem>
            <UnorderedListItem>
              Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif.
            </UnorderedListItem>
          </UnorderedList>
          <div className="voorbeeld-bijlage-flex-container">
            <UtrechtButton appearance="secondary-action-button" className="voorbeeld-button-spacing-bestand-kiezen">
              Bestand kiezen
            </UtrechtButton>
            <UtrechtParagraph className="paragraph-space-bijlagen">Geen bestand gekozen</UtrechtParagraph>
          </div>
          <UtrechtButtonLink href="./stap2" className="voorbeeld-button-spacing" appearance="primary-action-button">
            Volgende stap
          </UtrechtButtonLink>
          <UtrechtParagraph className="voorbeeld-link-spacing">
            <UtrechtLink href="#">Opslaan en later verder</UtrechtLink>
          </UtrechtParagraph>
          <UtrechtParagraph className="voorbeeld-paragraph-end-space">
            <UtrechtLink href="#">Sluit formulier</UtrechtLink>
          </UtrechtParagraph>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}
