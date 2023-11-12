'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonGroup,
  UtrechtFormFieldTextarea,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtHeadingGroup,
  UtrechtIcon,
  UtrechtLink,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
  UtrechtPreHeading,
} from '@utrecht/web-component-library-react';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import {
  FormLabel,
  UnorderedList,
  UnorderedListItem,
  LinkButton,
  FormField,
  FormFieldDescription,
  Textbox,
} from '@utrecht/component-library-react';
import ArrowLeft from '../../../styling/assets/arrow-left-icon.svg';
import '@/app/styling/css/wmebv.css';
import { TextboxTypes } from '@utrecht/component-library-react/dist/Textbox';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderFunnel />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <form action="./stap2" method="post">
            <UtrechtButtonGroup>
              <UtrechtLink href="/wmebv/Inloggen">
                <UtrechtIcon>
                  <ArrowLeft />
                </UtrechtIcon>{' '}
                Terug
              </UtrechtLink>
            </UtrechtButtonGroup>
            <UtrechtHeadingGroup>
              <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
              <UtrechtPreHeading className="voorbeeld-paragraph-spacing-stapx">Stap 1 van 4</UtrechtPreHeading>
            </UtrechtHeadingGroup>
            <UtrechtHeading2 className="voorbeeld-heading-spacing">Uw vraag</UtrechtHeading2>
            <UtrechtFormFieldTextarea
              label="Stel uw vraag"
              style={{
                '--_utrecht-textarea-rows': '10',
                '--utrecht-textarea-min-block-size': 'calc(var(--_utrecht-textarea-rows, 2) * 1em)',
              }}
            />
            <FormField id="file-field">
              <UtrechtParagraph className="voorbeeld-paragraph-bijlage">
                <FormLabel htmlFor="file-input" id="file-label">
                  Bestand toevoegen
                </FormLabel>
              </UtrechtParagraph>
              <FormFieldDescription id="file-description">
                <UtrechtParagraph>Niet verplicht.</UtrechtParagraph>
                <UnorderedList className="voorbeeld-unordered-list-space">
                  <UnorderedListItem>U kunt meerdere bestanden tegelijk toevoegen.</UnorderedListItem>
                  <UnorderedListItem>U mag maximaal 10 Mb aan bestanden toevoegen.</UnorderedListItem>
                  <UnorderedListItem>
                    Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif.
                  </UnorderedListItem>
                </UnorderedList>
              </FormFieldDescription>
              <Textbox
                tabIndex={-1}
                aria-hidden="true"
                id="file-input"
                aria-describedby="file-description"
                type={'file' as TextboxTypes}
                className="voorbeeld-button-spacing-bestand-kiezen"
              ></Textbox>
              <div className="voorbeeld-bijlage-flex-container">
                <UtrechtButton
                  aria-labelledby="file-label"
                  aria-describedby="file-description"
                  aria-controls="file-input"
                  appearance="secondary-action-button"
                  className="voorbeeld-button-spacing-bestand-kiezen"
                  onClick={() => {
                    document.getElementById('file')?.click();
                  }}
                >
                  Bestand kiezen
                </UtrechtButton>
                <UtrechtParagraph className="paragraph-space-bijlagen">Geen bestand gekozen</UtrechtParagraph>
              </div>
            </FormField>
            <UtrechtButtonGroup direction="column">
              <UtrechtButton
                type="submit"
                className="voorbeeld-button-spacing"
                appearance="primary-action-button"
                formAction="/wmebv/api?redirect=/wmebv/niet-ingelogd/stap2"
                formMethod="post"
              >
                Volgende stap
              </UtrechtButton>
              <LinkButton
                type="submit"
                inline
                className="voorbeeld-button-link"
                formAction="/wmebv/api?redirect=/wmebv/opgeslagen"
                formMethod="post"
              >
                Opslaan en later verder
              </LinkButton>
              {/* "Sluit formulier" should not transfer data for files to server. So it must not submit the same form. */}
              <LinkButton type="submit" formAction="/wmebv/api?redirect=/wmebv/" form="empty" inline>
                Sluit formulier
              </LinkButton>
            </UtrechtButtonGroup>
          </form>
          <form name="empty"></form>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}
