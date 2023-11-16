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
  UtrechtLinkButton,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
  UtrechtPreHeading,
} from '@utrecht/web-component-library-react';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import { ExampleHeaderFunnelWmebv } from '@/components/wmebv/Header/ExampleHeaderFunnelWmebv';
import { useForm } from 'react-hook-form';
import { messageValidation } from '@/utils/validation';
import { IconArrowLeft } from '@tabler/icons-react';
import { ContactFormSessionData, FORM_SESSION_KEY, useSessionState } from '@/app/wmebv/SessionData';
import '@/app/styling/css/wmebv.css';
import { ExampleFooterWmebv } from '@/components/wmebv/Footer/ExampleFooterWmebv';
import { useEffect } from 'react';
import { OptionalValidationAlert } from '@/components/OptionalValidationAlert';

export default function home() {
  const userdata = {
    username: 'J. van Drouwen',
    userURL: '/mijn-omgeving/',
  };
  const [storedData, _, patchStoredData, removeStoredData] = useSessionState<ContactFormSessionData>(FORM_SESSION_KEY, {
    message: '',
  });

  const {
    getValues,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ values: storedData, reValidateMode: 'onChange' });

  const messageField = register('message', messageValidation);

  const saveFormData = () => {
    patchStoredData(getValues());
  };

  const onSubmit = (_: any, event: any) => {
    saveFormData();
    event.target.submit();
  };

  const hasErrors = Object.values(errors).length > 0;
  const stepProgressLabel = 'Stap 1 van 4';
  const stepLabel = 'Uw vraag';
  const websiteLabel = 'gemeente Voorbeeld';

  useEffect(() => {
    if (typeof document?.title === 'string') {
      document.title = `${hasErrors ? 'Fout: ' : ''}${stepProgressLabel}: ${stepLabel} - ${websiteLabel}`;
    }
  }, [hasErrors]);

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv userURL={userdata.userURL} username={userdata.username} />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle id="main" className="voorbeeld-article-space ">
          <form method="post" action="/api/wmebv/signed-in/step1" onSubmit={handleSubmit(onSubmit)}>
            <UtrechtButtonGroup>
              <UtrechtLink href="/wmebv/Inloggen">
                <UtrechtIcon>
                  <IconArrowLeft />
                </UtrechtIcon>
                Terug
              </UtrechtLink>
            </UtrechtButtonGroup>
            <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
            <UtrechtHeadingGroup>
              <UtrechtHeading2>{stepLabel}</UtrechtHeading2>
              <UtrechtPreHeading>{stepProgressLabel}</UtrechtPreHeading>
            </UtrechtHeadingGroup>
            <OptionalValidationAlert errors={errors} />
            <UtrechtFormFieldTextarea
              label="Stel uw vraag"
              {...messageField}
              id={`field-${messageField.name}`}
              invalid={!!errors[messageField.name]}
            >
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
              <UtrechtLinkButton
                inline
                className="voorbeeld-button-link"
                onClick={() => {
                  saveFormData();
                  location.assign('/wmebv');
                }}
              >
                Opslaan en later verder
              </UtrechtLinkButton>
              <UtrechtLinkButton
                inline
                className="voorbeeld-button-link"
                onClick={() => {
                  removeStoredData();
                  location.assign('/wmebv');
                }}
              >
                Stoppen met formulier
              </UtrechtLinkButton>
            </UtrechtButtonGroup>
          </form>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooterWmebv />
    </UtrechtPage>
  );
}
