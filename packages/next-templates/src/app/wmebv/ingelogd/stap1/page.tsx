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
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { UnorderedList, UnorderedListItem, LinkButton } from '@utrecht/component-library-react';
import { ExampleHeaderFunnelWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderFunnelWmebv';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { messageValidation } from '@/utils/validation';
import { IconArrowLeft } from '@tabler/icons-react';
import '@/app/styling/css/wmebv.css';

export default function home() {
  const [storedData, setStoredData] = useState<{}>();

  useEffect(() => {
    const stored = sessionStorage.getItem('wmebv');

    setStoredData(stored ? JSON.parse(stored) : {});
  }, []);

  const defaultValues = { message: '', ...storedData };

  const {
    getValues,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues, reValidateMode: 'onChange' });

  const messageField = register('message', messageValidation);

  const onSubmit = (_: any, event: any) => {
    saveFormData();
    event.target.submit();
  };

  const saveFormData = () => window.sessionStorage.setItem('wmebv', JSON.stringify(getValues()));
  const deleteFormData = () => window.sessionStorage.removeItem('wmebv');

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <form method="post" action="/api/wmebv/signed-in/step1" onSubmit={handleSubmit(onSubmit)}>
            <UtrechtButtonGroup>
              <UtrechtLink href="/wmebv/Inloggen">
                <UtrechtIcon>
                  <IconArrowLeft />
                </UtrechtIcon>
                Terug
              </UtrechtLink>
            </UtrechtButtonGroup>
            <UtrechtHeadingGroup>
              <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
            </UtrechtHeadingGroup>
            <UtrechtPreHeading className="voorbeeld-paragraph-spacing-stapx">Stap 1 van 4</UtrechtPreHeading>
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
                Stoppen met formulier
              </LinkButton>
            </UtrechtButtonGroup>
          </form>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}
