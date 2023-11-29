'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonGroup,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtHeadingGroup,
  UtrechtIcon,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
  UtrechtPreHeading,
} from '@utrecht/web-component-library-react';
import { IconArrowLeft } from '@tabler/icons-react';
import { LinkButton } from '@utrecht/component-library-react';
import '@/app/styling/css/wmebv.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  emailValidation,
  homeTownValidation,
  houseNumberSuffixValidation,
  houseNumberValidation,
  nameValidation,
  phoneValidation,
  postalCodeValidation,
  streetValidation,
} from '@/utils/validation';
import { ContactFormSessionData, FORM_SESSION_KEY, useSessionState } from '../../SessionData';
import { ExampleFooterWmebv } from '@/components/wmebv/Footer/ExampleFooterWmebv';
import { ExampleHeaderFunnelWmebv } from '@/components/wmebv/Header/ExampleHeaderFunnelWmebv';
import { OptionalValidationAlert, useAlertScroll } from '@/components/OptionalValidationAlert';
import { useRouter } from 'next/navigation';
import { FormFieldTextbox } from '@/components/FormFieldTextbox';

export default function home() {
  const data = {
    name: '',
    street: '',
    houseNumber: '',
    houseNumberSuffix: '',
    postalCode: '',
    city: '',
    email: '',
    tel: '',
  };

  const [storedData, _, patchStoredData, removeStoredData] = useSessionState<ContactFormSessionData>(
    FORM_SESSION_KEY,
    data,
  );

  const {
    getValues,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ values: storedData, reValidateMode: 'onBlur' });

  const { min: _minA, max: _maxA, ...nameField } = register('name', nameValidation);
  const { min: _minB, max: _maxB, ...streetField } = register('street', streetValidation);
  const { min: _minC, max: _maxC, ...houseNumberField } = register('houseNumber', houseNumberValidation);
  const {
    min: _minD,
    max: _maxD,
    ...houseNumberSuffixField
  } = register('houseNumberSuffix', houseNumberSuffixValidation);
  const { min: _minE, max: _maxE, ...postalCodeField } = register('postalCode', postalCodeValidation);
  const { min: _minF, max: _maxF, ...homeTownField } = register('homeTown', homeTownValidation);
  const { min: _minG, max: _maxG, ...emailField } = register('email', emailValidation);
  const { min: _minH, max: _maxH, ...phoneField } = register('phone', phoneValidation);

  const saveFormData = () => patchStoredData(getValues());

  const onSubmit = (_: any, event: any) => {
    saveFormData();
    event.target.submit();
  };

  const { alertRef, onInvalid } = useAlertScroll();

  const router = useRouter();

  const onClickPrev = () => {
    saveFormData();
    router.push('./stap1');
  };

  const stepProgressLabel = 'Stap 2 van 4';
  const stepLabel = 'Uw gegevens';
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
      <UtrechtPageContent>
        <UtrechtArticle id="main">
          <form method="post" action="/api/wmebv/anonymous/step2" onSubmit={handleSubmit(onSubmit, onInvalid)}>
            <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>

            <UtrechtButtonGroup>
              <LinkButton
                inline={true}
                formAction="./stap1/"
                onClick={onClickPrev}
                onSubmit={(evt) => {
                  evt.preventDefault();
                }}
              >
                <UtrechtIcon>
                  <IconArrowLeft />
                </UtrechtIcon>
                Vorige Stap
              </LinkButton>
            </UtrechtButtonGroup>
            <UtrechtHeadingGroup>
              <UtrechtHeading2>{stepLabel}</UtrechtHeading2>
              <UtrechtPreHeading>{stepProgressLabel}</UtrechtPreHeading>
            </UtrechtHeadingGroup>
            <UtrechtParagraph>
              Om u zo goed mogelijk te kunnen helpen, ontvangen we graag uw contactgegevens. Deze gegevens worden niet
              met anderen gedeeld.
            </UtrechtParagraph>
            <OptionalValidationAlert id="form-errors" errors={errors} ref={alertRef} />
            <FormFieldTextbox
              {...nameField}
              autoComplete="name"
              className="voorbeeld-small-textbox"
              id={`field-${nameField.name}`}
              label="Naam"
              spellCheck={false}
              invalid={!!errors[nameField.name]}
              errorMessage={String(errors[nameField.name]?.message)}
              required
            ></FormFieldTextbox>

            <FormFieldTextbox
              {...streetField}
              autoComplete="street-address"
              id={`field-${streetField.name}`}
              label="Straat"
              invalid={!!errors[streetField.name]}
              errorMessage={String(errors[streetField.name]?.message)}
              required
            ></FormFieldTextbox>

            <FormFieldTextbox
              {...houseNumberField}
              autoComplete=""
              className="voorbeeld-tiny-textbox"
              id={`field-${houseNumberField.name}`}
              label="Huisnummer"
              invalid={!!errors[houseNumberField.name]}
              errorMessage={String(errors[houseNumberField.name]?.message)}
              required
            ></FormFieldTextbox>

            <FormFieldTextbox
              {...houseNumberSuffixField}
              autoComplete=""
              className="voorbeeld-tiny-textbox"
              id={`field-${houseNumberSuffixField.name}`}
              label="Toevoeging"
              invalid={!!errors[houseNumberSuffixField.name]}
              description={<UtrechtParagraph slot="description">Niet verplicht.</UtrechtParagraph>}
            ></FormFieldTextbox>

            <FormFieldTextbox
              {...postalCodeField}
              autoComplete="postal-code"
              className="voorbeeld-tiny-textbox"
              id={`field-${postalCodeField.name}`}
              label="Postcode"
              invalid={!!errors[postalCodeField.name]}
              errorMessage={String(errors[postalCodeField.name]?.message)}
              required
            ></FormFieldTextbox>

            <FormFieldTextbox
              {...homeTownField}
              autoComplete="address-level2"
              id={`field-${homeTownField.name}`}
              label="Woonplaats"
              invalid={!!errors[homeTownField.name]}
              errorMessage={String(errors[homeTownField.name]?.message)}
              required
            ></FormFieldTextbox>

            <FormFieldTextbox
              {...emailField}
              autoComplete="email"
              className="voorbeeld-small-textbox"
              id={`field-${emailField.name}`}
              label="E-mailadres"
              type="email"
              invalid={!!errors[emailField.name]}
              errorMessage={String(errors[emailField.name]?.message)}
              required
            ></FormFieldTextbox>

            <FormFieldTextbox
              {...phoneField}
              autoComplete="tel"
              className="voorbeeld-smaller-textbox"
              id={`field-${phoneField.name}`}
              label="Telefoonnummer"
              type="tel"
              invalid={!!errors[phoneField.name]}
              description={<UtrechtParagraph slot="description">Niet verplicht.</UtrechtParagraph>}
              errorMessage={String(errors[phoneField.name]?.message)}
            ></FormFieldTextbox>

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
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooterWmebv />
    </UtrechtPage>
  );
}
