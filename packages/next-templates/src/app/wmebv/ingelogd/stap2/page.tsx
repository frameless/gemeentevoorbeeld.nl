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
import { LinkButton, Paragraph } from '@utrecht/component-library-react';
import { ExampleHeaderFunnelWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderFunnelWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { useEffect, useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  nameValidation,
  streetValidation,
  houseNumberValidation,
  houseNumberSuffixValidation,
  postalCodeValidation,
  homeTownValidation,
  emailValidation,
  phoneValidation,
} from '@/utils/validation';
import { IconArrowLeft } from '@tabler/icons-react';
import '@/app/styling/css/wmebv.css';

export default function home() {
  const [storedData, setStoredData] = useState<{}>();

  useEffect(() => {
    const stored = sessionStorage.getItem('wmebv');

    setStoredData(stored ? JSON.parse(stored) : {});
  }, []);

  const data = {
    name: 'Jeroen van Drouwen',
    street: 'Laan der Voorbeelden',
    houseNumber: '99',
    houseNumberSuffix: '',
    postalCode: '1024 VP',
    homeTown: 'Voorbeeld',
    email: 'j.vandrouwen@gmail.com',
    phone: '0650618346',
  };

  const defaultValues = { ...data, ...storedData };

  const {
    getValues,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues, reValidateMode: 'onChange' });

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
  const saveFormData = () => sessionStorage.setItem('wmebv', JSON.stringify(getValues()));
  const deleteFormData = () => sessionStorage.removeItem('wmebv');

  const onSubmit = (_: any, event: any) => {
    saveFormData();
    event.target.submit();
  };

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv />
      <UtrechtPageContent>
        <UtrechtArticle>
          <form method="post" action="/api/wmebv/signed-in/step2" onSubmit={handleSubmit(onSubmit)}>
            <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
            <UtrechtButtonGroup>
              <LinkButton
                type="submit"
                inline={true}
                className="voorbeeld-button-link"
                formAction="/api/wmebv/signed-in/step2/back"
                formMethod="POST"
                onSubmit={saveFormData}
              >
                <UtrechtIcon>
                  <IconArrowLeft />
                </UtrechtIcon>
                Vorige Stap
              </LinkButton>
            </UtrechtButtonGroup>
            <UtrechtHeadingGroup>
              <UtrechtPreHeading>Stap 2 van 4</UtrechtPreHeading>
              <UtrechtHeading2>Uw Gegevens</UtrechtHeading2>
            </UtrechtHeadingGroup>
            <UtrechtParagraph>
              Om u zo goed mogelijk te kunnen helpen, ontvangen we graag uw contactgegevens. Deze gegevens worden niet
              met anderen gedeeld.
            </UtrechtParagraph>

            <UtrechtFormFieldTextbox
              {...nameField}
              autoComplete="name"
              className="voorbeeld-small-textbox"
              id={useId()}
              label="Naam"
              readOnly={true}
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
              readOnly={true}
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
              readOnly={true}
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
              readOnly={true}
              invalid={!!errors[houseNumberSuffixField.name]}
            >
              <Paragraph slot="description">Niet verplicht.</Paragraph>
              <UtrechtFormFieldErrorMessage slot="error-message">
                {String(errors[houseNumberSuffixField.name]?.message)}
              </UtrechtFormFieldErrorMessage>
            </UtrechtFormFieldTextbox>

            <UtrechtFormFieldTextbox
              {...postalCodeField}
              autoComplete="postal-code"
              className="voorbeeld-tiny-textbox"
              id={useId()}
              label="Postcode"
              readOnly={true}
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
              readOnly={true}
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
              type="email"
              label="E-mailadres"
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
              id="tel"
              label="Telefoonnummer"
              type="tel"
              invalid={!!errors[phoneField.name]}
            >
              <Paragraph slot="description">Niet verplicht.</Paragraph>
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
