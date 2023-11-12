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
import {
  FormLabel,
  PreHeading,
  UnorderedList,
  UnorderedListItem,
  HeadingGroup,
} from '@utrecht/component-library-react';
import ArrowLeft from '@/app/styling/assets/arrow-left-icon.svg';
import '@/app/styling/css/wmebv.css';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderWmebv />
      <ExampleNavigation />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <form method="POST" action="/api/wmebv/signed-in/step1">
            <UtrechtButtonGroup>
              <UtrechtLink href="/wmebv/Inloggen">
                <ArrowLeft /> Terug
              </UtrechtLink>
            </UtrechtButtonGroup>
            <HeadingGroup>
              <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
              <PreHeading className="voorbeeld-paragraph-spacing-stapx">Stap 1 van 4</PreHeading>
            </HeadingGroup>
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
                <UtrechtButton type="submit" className="voorbeeld-button-spacing" appearance="primary-action-button">
                  Volgende stap
                </UtrechtButton>
                <UtrechtParagraph className="voorbeeld-link-spacing">
                  <UtrechtButton
                    appearance="subtle-button"
                    className="voorbeeld-button-link"
                    formAction="/api/wmebv/save"
                    formMethod="POST"
                  >
                    Opslaan en later verder
                  </UtrechtButton>
                </UtrechtParagraph>
                <UtrechtParagraph className="voorbeeld-paragraph-end-space">
                  <UtrechtButtonLink appearance="subtle-button" className="voorbeeld-button-link" href="/wmebv">
                    Sluit formulier
                  </UtrechtButtonLink>
                </UtrechtParagraph>
              </div>
            </UtrechtButtonGroup>
          </form>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}
