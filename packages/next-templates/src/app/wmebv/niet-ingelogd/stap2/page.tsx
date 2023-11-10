'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonGroup,
  UtrechtFormFieldErrorMessage,
  UtrechtFormFieldTextbox,
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
import { useId } from 'react';
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

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv />
      <UtrechtPageContent>
        <UtrechtArticle>
          <form method="post" action="/api/wmebv/anonymous/step2" onSubmit={handleSubmit(onSubmit)}>
            <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>

            <UtrechtButtonGroup>
              <LinkButton
                type="submit"
                inline={true}
                className="voorbeeld-button-link"
                formAction="./stap1/"
                onSubmit={saveFormData}
              >
                <UtrechtIcon>
                  <IconArrowLeft />
                </UtrechtIcon>
                Vorige Stap
              </LinkButton>
            </UtrechtButtonGroup>
            <UtrechtHeadingGroup>
              <UtrechtPreHeading className="voorbeeld-paragraph-spacing-stapx">Stap 2 van 4</UtrechtPreHeading>
              <UtrechtHeading2>Uw Gegevens</UtrechtHeading2>
            </UtrechtHeadingGroup>
            <UtrechtParagraph className="voorbeeld-paragraph-spacing">
              Om u zo goed mogelijk te kunnen helpen, ontvangen we graag uw contactgegevens. Deze gegevens worden niet
              met anderen gedeeld.
            </UtrechtParagraph>

            <UtrechtFormFieldTextbox
              {...nameField}
              autoComplete="name"
              className="voorbeeld-small-textbox"
              id={useId()}
              label="Naam"
              spellCheck={false}
              invalid={!!errors[nameField.name]}
            >
              <UtrechtFormFieldErrorMessage slot="error-message">
                {String(errors[nameField.name]?.message)}
              </UtrechtFormFieldErrorMessage>
            </UtrechtFormFieldTextbox>

            <UtrechtFormFieldTextbox
              {...streetField}
              autoComplete="street-address"
              id={useId()}
              label="Straat"
              invalid={!!errors[streetField.name]}
            >
              <UtrechtFormFieldErrorMessage slot="error-message">
                {String(errors[streetField.name]?.message)}
              </UtrechtFormFieldErrorMessage>
            </UtrechtFormFieldTextbox>

            <UtrechtFormFieldTextbox
              {...houseNumberField}
              autoComplete=""
              className="voorbeeld-tiny-textbox"
              id={useId()}
              label="Huisnummer"
              invalid={!!errors[houseNumberField.name]}
            >
              <UtrechtFormFieldErrorMessage slot="error-message">
                {String(errors[houseNumberField.name]?.message)}
              </UtrechtFormFieldErrorMessage>
            </UtrechtFormFieldTextbox>

            <UtrechtFormFieldTextbox
              {...houseNumberSuffixField}
              autoComplete=""
              className="voorbeeld-tiny-textbox"
              id={useId()}
              label="Toevoeging"
              invalid={!!errors[houseNumberSuffixField.name]}
            >
              <UtrechtParagraph slot="description">Niet verplicht.</UtrechtParagraph>
            </UtrechtFormFieldTextbox>

            <UtrechtFormFieldTextbox
              {...postalCodeField}
              autoComplete="postal-code"
              className="voorbeeld-tiny-textbox"
              id={useId()}
              label="Postcode"
              invalid={!!errors[postalCodeField.name]}
            >
              <UtrechtFormFieldErrorMessage slot="error-message">
                {String(errors[postalCodeField.name]?.message)}
              </UtrechtFormFieldErrorMessage>
            </UtrechtFormFieldTextbox>

            <UtrechtFormFieldTextbox
              {...homeTownField}
              autoComplete="address-level2"
              id={useId()}
              label="Woonplaats"
              invalid={!!errors[homeTownField.name]}
            >
              <UtrechtFormFieldErrorMessage slot="error-message">
                {String(errors[homeTownField.name]?.message)}
              </UtrechtFormFieldErrorMessage>
            </UtrechtFormFieldTextbox>

            <UtrechtFormFieldTextbox
              {...emailField}
              autoComplete="email"
              className="voorbeeld-small-textbox"
              id={useId()}
              label="Emailadres"
              type="email"
              invalid={!!errors[emailField.name]}
            >
              <UtrechtFormFieldErrorMessage slot="error-message">
                {String(errors[emailField.name]?.message)}
              </UtrechtFormFieldErrorMessage>
            </UtrechtFormFieldTextbox>

            <UtrechtFormFieldTextbox
              {...phoneField}
              autoComplete="tel"
              className="voorbeeld-smaller-textbox"
              id={useId()}
              label="Telefoonnummer"
              type="tel"
              invalid={!!errors[phoneField.name]}
            >
              <UtrechtParagraph slot="description">Niet verplicht.</UtrechtParagraph>
              <UtrechtFormFieldErrorMessage slot="error-message">
                {String(errors[phoneField.name]?.message)}
              </UtrechtFormFieldErrorMessage>
            </UtrechtFormFieldTextbox>
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
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooterWmebv />
    </UtrechtPage>
  );
}
