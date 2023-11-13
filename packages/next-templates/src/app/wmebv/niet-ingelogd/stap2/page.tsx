'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonGroup,
  UtrechtButtonLink,
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
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import ArrowLeft from '@/app/styling/assets/arrow-left-icon.svg';
import { LinkButton } from '@utrecht/component-library-react';
import '@/app/styling/css/wmebv.css';
import { useId } from 'react';
import { ExampleHeaderFunnelWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderFunnelWmebv';
import { useForm } from 'react-hook-form';

export default function home() {
  const storedData = sessionStorage.getItem('wmebv');
  const storedFormData = storedData && JSON.parse(storedData);

  const data = {
    message: '',
    name: '',
    street: '',
    houseNumber: '',
    houseNumberSuffix: '',
    postalCode: '',
    city: '',
    email: '',
    tel: '',
  };
  const defaultValues = { ...data, ...storedFormData };

  const {
    getValues,
    register,
    formState: { errors },
  } = useForm({ defaultValues });

  const { min: _minA, max: _maxA, ...nameField } = register('name', { required: 'Vul een naam in' });
  const { min: _minB, max: _maxB, ...streetField } = register('street', { required: 'Vul een straat in' });
  const {
    min: _minC,
    max: _maxC,
    ...houseNumberField
  } = register('houseNumber', { required: 'Vul een huisnummer in' });
  const { min: _minD, max: _maxD, ...houseNumberSuffixField } = register('houseNumberSuffix', { required: false });
  const { min: _minE, max: _maxE, ...postalCodeField } = register('postalCode', { required: 'Vul een postcode in' });
  const { min: _minF, max: _maxF, ...homeTownField } = register('homeTown', { required: 'Vul een woonplaats in' });
  const { min: _minG, max: _maxG, ...emailField } = register('email', { required: 'Vul een e-mailadres in' });
  const { min: _minH, max: _maxH, ...phoneField } = register('phone', { required: false });

  const saveFormData = () => sessionStorage.setItem('wmebv', JSON.stringify(getValues()));
  const deleteFormData = () => sessionStorage.removeItem('wmebv');

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv />
      <UtrechtPageContent>
        <UtrechtArticle>
          <form method="post" action="/api/wmebv/anonymous/step2" onSubmit={saveFormData}>
            <UtrechtButtonGroup>
              <LinkButton
                type="submit"
                inline={true}
                className="voorbeeld-button-link"
                formAction="./stap1/"
                onSubmit={saveFormData}
              >
                <UtrechtIcon>
                  <ArrowLeft />
                </UtrechtIcon>{' '}
                Vorige Stap
              </LinkButton>
            </UtrechtButtonGroup>
            <UtrechtHeadingGroup>
              <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
              <UtrechtPreHeading>Stap 2 van 4</UtrechtPreHeading>
            </UtrechtHeadingGroup>
            <UtrechtHeading2>Uw Gegevens</UtrechtHeading2>
            <UtrechtParagraph className="voorbeeld-paragraph-spacing">
              Om u zo goed mogelijk te kunnen helpen, ontvangen we graag uw contactgegevens. Deze gegevens worden niet
              met anderen gedeeld.
            </UtrechtParagraph>

            <UtrechtFormFieldTextbox
              {...nameField}
              autoComplete="name"
              className="voorbeeld-small-textbox-small"
              id={useId()}
              label="Naam"
            >
              <UtrechtFormFieldErrorMessage slot="error-message">
                {String(errors[nameField.name]?.message)}
              </UtrechtFormFieldErrorMessage>
            </UtrechtFormFieldTextbox>

            <UtrechtFormFieldTextbox {...streetField} autoComplete="street-address" id={useId()} label="Straat">
              <UtrechtFormFieldErrorMessage slot="error-message">
                {String(errors[streetField.name]?.message)}
              </UtrechtFormFieldErrorMessage>
            </UtrechtFormFieldTextbox>

            <UtrechtFormFieldTextbox
              {...houseNumberField}
              autoComplete=""
              className="voorbeeld-tiny-textbox-small"
              id={useId()}
              label="Huisnummer"
            >
              <UtrechtFormFieldErrorMessage slot="error-message">
                {String(errors[houseNumberField.name]?.message)}
              </UtrechtFormFieldErrorMessage>
            </UtrechtFormFieldTextbox>

            <UtrechtFormFieldTextbox
              {...houseNumberSuffixField}
              autoComplete=""
              className="voorbeeld-tiny-textbox-small"
              id={useId()}
              label="Toevoeging"
            />

            <UtrechtFormFieldTextbox
              {...postalCodeField}
              autoComplete="postal-code"
              className="voorbeeld-tiny-textbox-small"
              id={useId()}
              label="Postcode"
            >
              <UtrechtFormFieldErrorMessage slot="error-message">
                {String(errors[postalCodeField.name]?.message)}
              </UtrechtFormFieldErrorMessage>
            </UtrechtFormFieldTextbox>

            <UtrechtFormFieldTextbox {...homeTownField} autoComplete="address-level2" id={useId()} label="Woonplaats">
              <UtrechtFormFieldErrorMessage slot="error-message">
                {String(errors[homeTownField.name]?.message)}
              </UtrechtFormFieldErrorMessage>
            </UtrechtFormFieldTextbox>

            <UtrechtFormFieldTextbox
              {...emailField}
              autoComplete="email"
              className="voorbeeld-small-textbox-small"
              id={useId()}
              label="Emailadres"
              type="email"
            >
              <UtrechtFormFieldErrorMessage slot="error-message">
                {String(errors[emailField.name]?.message)}
              </UtrechtFormFieldErrorMessage>
            </UtrechtFormFieldTextbox>

            <UtrechtFormFieldTextbox
              {...phoneField}
              autoComplete="tel"
              className="voorbeeld-smaller-textbox-small"
              id={useId()}
              label="Telefoonnummer"
              type="tel"
            >
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
