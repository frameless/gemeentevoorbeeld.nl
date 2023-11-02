'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonLink,
  UtrechtForm,
  UtrechtFormFieldTextarea,
  UtrechtHeading,
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
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import '@/app/styling/css/wmebv.css';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderWmebv />
      <ExampleNavigation />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
          <UtrechtParagraph>Stap 1 van 4</UtrechtParagraph>
          <UtrechtForm>
            <UtrechtHeading2>Uw vraag</UtrechtHeading2>
            <UtrechtFormFieldTextarea />
          </UtrechtForm>
          <div className="voorbeeld-bijlage-flex-container">
            <UtrechtParagraph className="voorbeeld-paragraph-bijlage">Bijlage</UtrechtParagraph>
            <UtrechtParagraph>(Niet verplicht)</UtrechtParagraph>
          </div>
          <UnorderedList className="voorbeeld-unordered-list-space">
            <UnorderedListItem>Bestanden moeten kleiner zijn dan 10 MB.</UnorderedListItem>
            <UnorderedListItem>Toegestane bestandstypen: gif, jpg, jpeg, png.</UnorderedListItem>
            <UnorderedListItem>
              Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif.
            </UnorderedListItem>
          </UnorderedList>
          <div className="voorbeeld-bijlage-flex-container">
            <UtrechtButton appearance="secondary-action-button">Bestand kiezen</UtrechtButton>
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
