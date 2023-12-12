'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonGroup,
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
import { UnorderedList, UnorderedListItem, LinkButton } from '@utrecht/component-library-react';
import { useForm } from 'react-hook-form';
import { messageValidation } from '@/utils/validation';
import { IconArrowLeft } from '@tabler/icons-react';
import '@/app/styling/css/wmebv.css';
import { ContactFormSessionData, FORM_SESSION_KEY, useSessionState } from '../../SessionData';
import { ExampleHeaderFunnelWmebv } from '@/components/wmebv/Header/ExampleHeaderFunnelWmebv';
import { ExampleFooterWmebv } from '@/components/wmebv/Footer/ExampleFooterWmebv';
import { useEffect } from 'react';
import { OptionalValidationAlert, useAlertScroll } from '@/components/OptionalValidationAlert';
import { FormFieldFile } from '@/components/FormFieldFile';
import { FormFieldTextarea } from '@/components/FormFieldTextarea';

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

  const { alertRef, onInvalid } = useAlertScroll();

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
          <form method="post" action="/api/wmebv/anonymous/step1" onSubmit={handleSubmit(onSubmit, onInvalid)}>
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
            <OptionalValidationAlert errors={errors} ref={alertRef} />
            <FormFieldTextarea
              {...messageField}
              className="message-textarea"
              id={`field-${messageField.name}`}
              label="Stel uw vraag"
              invalid={!!errors[messageField.name]}
              errorMessage={String(errors[messageField.name]?.message)}
              required
            ></FormFieldTextarea>

            <FormFieldFile
              id="file-field"
              label="Bestand toevoegen"
              buttonLabel="Bestand kiezen"
              description={
                <>
                  <UtrechtParagraph>Niet verplicht.</UtrechtParagraph>
                  <UnorderedList>
                    <UnorderedListItem>U kunt meerdere bestanden tegelijk toevoegen.</UnorderedListItem>
                    <UnorderedListItem>U mag maximaal 10 Mb aan bestanden toevoegen.</UnorderedListItem>
                    <UnorderedListItem>
                      Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif.
                    </UnorderedListItem>
                  </UnorderedList>
                </>
              }
              status={<UtrechtParagraph>Geen bestand gekozen</UtrechtParagraph>}
            ></FormFieldFile>
            <UtrechtButtonGroup direction="column">
              <UtrechtButton type="submit" appearance="primary-action-button">
                Volgende stap
              </UtrechtButton>
              <LinkButton
                inline
                onClick={() => {
                  saveFormData();
                  location.assign('/wmebv');
                }}
              >
                Opslaan en later verder
              </LinkButton>
              <LinkButton
                inline
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
