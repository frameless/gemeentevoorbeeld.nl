'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonGroup,
  UtrechtButtonLink,
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
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { UnorderedList, UnorderedListItem, LinkButton } from '@utrecht/component-library-react';
import ArrowLeft from '@/app/styling/assets/arrow-left-icon.svg';
import '@/app/styling/css/wmebv.css';
import { ExampleHeaderFunnelWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderFunnelWmebv';
import { useForm } from 'react-hook-form';

export default function home() {
  const storedData = sessionStorage.getItem('wmebv');
  const storedFormData = storedData && JSON.parse(storedData);
  const defaultValues = { message: '', ...storedFormData };

  const {
    getValues,
    register,
    formState: { errors },
  } = useForm({ defaultValues });

  const messageField = register('message', { required: true });

  const saveFormData = () => sessionStorage.setItem('wmebv', JSON.stringify(getValues()));
  const deleteFormData = () => sessionStorage.removeItem('wmebv');

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <form method="post" action="/api/wmebv/signed-in/step1" onSubmit={saveFormData}>
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
            <UtrechtFormFieldTextarea label="Stel uw vraag" {...messageField} invalid={!!errors[messageField.name]}>
              <UtrechtFormFieldErrorMessage slot="error-message">
                {String(errors[messageField.name]?.message)}
              </UtrechtFormFieldErrorMessage>
            </UtrechtFormFieldTextarea>
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
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}
