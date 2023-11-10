'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonGroup,
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
import ArrowLeft from '@/app/styling/assets/arrow-left-icon.svg';
import '@/app/styling/css/wmebv.css';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderWmebv />
      <ExampleNavigation />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <UtrechtButtonGroup>
            <UtrechtLink href="/wmebv/Inloggen">
              <ArrowLeft /> Terug
            </UtrechtLink>
          </UtrechtButtonGroup>
          <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
          <UtrechtParagraph className="voorbeeld-paragraph-spacing-stapx">Stap 1 van 4</UtrechtParagraph>
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
          <UtrechtButtonGroup>
            <div className="voorbeeld-button-group-spacing">
              <UtrechtButtonLink className="voorbeeld-button-spacing" href="./stap2" appearance="primary-action-button">
                Volgende stap
              </UtrechtButtonLink>
              <UtrechtParagraph className="voorbeeld-link-spacing">
                <UtrechtButtonLink appearance="subtle-button" className="voorbeeld-button-link" href="#">
                  Opslaan en later verder
                </UtrechtButtonLink>
              </UtrechtParagraph>
              <UtrechtParagraph className="voorbeeld-paragraph-end-space">
                <UtrechtButtonLink appearance="subtle-button" className="voorbeeld-button-link" href="#">
                  Sluit formulier
                </UtrechtButtonLink>
              </UtrechtParagraph>
            </div>
          </UtrechtButtonGroup>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}
