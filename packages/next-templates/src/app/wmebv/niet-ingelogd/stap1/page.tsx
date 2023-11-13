'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonGroup,
  UtrechtFormFieldErrorMessage,
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
import {
  FormLabel,
  UnorderedList,
  UnorderedListItem,
  LinkButton,
  FormField,
  FormFieldDescription,
  Textbox,
} from '@utrecht/component-library-react';
import { ExampleHeaderFunnelWmebvEmpty } from '@/components/wmebv/Header/ExampleHeaderFunnelWmebvEmpty';
import { ExampleFooterWmebv } from '@/components/wmebv/Footer/ExampleFooterWmebv';
import ArrowLeft from '../../../styling/assets/arrow-left-icon.svg';
import '@/app/styling/css/wmebv.css';
import { TextboxTypes } from '@utrecht/component-library-react/dist/Textbox';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

export default function home() {
  const [storedData, setStoredData] = useState<any>();

  useEffect(() => {
    const stored = sessionStorage.getItem('wmebv');

    setStoredData(stored ? JSON.parse(stored) : {});
  }, []);

  const defaultValues = { message: '', ...storedData };

  const {
    getValues,
    register,
    formState: { errors },
  } = useForm({ defaultValues });

  const messageField = register('message', { required: true });
  // const fileField = register('message', { required: false });

  const saveFormData = () => sessionStorage.setItem('wmebv', JSON.stringify(getValues()));
  const deleteFormData = () => sessionStorage.removeItem('wmebv');

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebvEmpty />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <form method="post" action="/api/wmebv/anonymous/step1" onSubmit={saveFormData}>
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
              {...messageField}
              label="Stel uw vraag"
              style={{
                '--_utrecht-textarea-rows': '10',
                '--utrecht-textarea-min-block-size': 'calc(var(--_utrecht-textarea-rows, 2) * 1em)',
              }}
            >
              <UtrechtFormFieldErrorMessage slot="error-message">
                {String(errors[messageField.name]?.message)}
              </UtrechtFormFieldErrorMessage>{' '}
            </UtrechtFormFieldTextarea>
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
              <UtrechtButton type="submit" className="voorbeeld-button-spacing" appearance="primary-action-button">
                Volgende stap
              </UtrechtButton>
              <LinkButton
                inline
                className="voorbeeld-button-link"
                onClick={() => {
                  saveFormData();
                  location.assign('/wmebv');
                }}
              >
                Opslaan en later verder
              </LinkButton>
              <LinkButton
                inline
                className="voorbeeld-button-link"
                onClick={() => {
                  deleteFormData();
                  location.assign('/wmebv');
                }}
              >
                Sluit formulier
              </LinkButton>
            </UtrechtButtonGroup>
          </form>
          <form name="empty"></form>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooterWmebv />
    </UtrechtPage>
  );
}
