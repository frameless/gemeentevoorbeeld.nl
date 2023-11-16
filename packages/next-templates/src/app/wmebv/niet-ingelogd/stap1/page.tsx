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
import { TextboxTypes } from '@utrecht/component-library-react/dist/Textbox';
import { useForm } from 'react-hook-form';
import { messageValidation } from '@/utils/validation';
import { IconArrowLeft } from '@tabler/icons-react';
import '@/app/styling/css/wmebv.css';
import { ContactFormSessionData, FORM_SESSION_KEY, useSessionState } from '../../SessionData';
import { ExampleHeaderFunnelWmebv } from '@/components/wmebv/Header/ExampleHeaderFunnelWmebv';
import { ExampleFooterWmebv } from '@/components/wmebv/Footer/ExampleFooterWmebv';
import { useEffect } from 'react';
import { OptionalValidationAlert } from '@/components/OptionalValidationAlert';

export default function home() {
  const [storedData, _, patchStoredData, removeStoredData] = useSessionState<ContactFormSessionData>(FORM_SESSION_KEY, {
    message: '',
  });

  const {
    getValues,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ values: storedData });

  const messageField = register('message', messageValidation);

  const saveFormData = () => patchStoredData(getValues());

  const onSubmit = (_: any, event: any) => {
    saveFormData();
    event.target.submit();
  };

  const stepProgressLabel = 'Stap 1 van 4';
  const stepLabel = 'Uw vraag';
  const websiteLabel = 'gemeente Voorbeeld';

  const hasErrors = Object.values(errors).length > 0;
  useEffect(() => {
    if (typeof document?.title === 'string') {
      document.title = `${hasErrors ? 'Fout: ' : ''}${stepProgressLabel}: ${stepLabel} - ${websiteLabel}`;
    }
  }, [hasErrors]);

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle id="main" className="voorbeeld-article-space ">
          <form method="post" action="/api/wmebv/anonymous/step1" onSubmit={handleSubmit(onSubmit)}>
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
              {...messageField}
              id={`field-${messageField.name}`}
              label="Stel uw vraag"
              style={{
                '--_utrecht-textarea-rows': '10',
                '--utrecht-textarea-min-block-size': 'calc(var(--_utrecht-textarea-rows, 2) * 1em)',
              }}
            >
              <UtrechtFormFieldErrorMessage slot="error-message">
                {String(errors[messageField.name]?.message)}
              </UtrechtFormFieldErrorMessage>
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
                  removeStoredData();
                  location.assign('/wmebv');
                }}
              >
                Stoppen met formulier
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
