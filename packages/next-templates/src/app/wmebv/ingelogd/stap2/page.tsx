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
import ArrowLeft from '@/app/styling/assets/arrow-left-icon.svg';
import '@/app/styling/css/wmebv.css';
import { useId } from 'react';
import { useForm } from 'react-hook-form';

export default function home() {
  const storedData = sessionStorage.getItem('wmebv');
  const storedFormData = storedData && JSON.parse(storedData);

  const data = {
    name: 'Jeroen van Drouwen',
    street: 'Laan der Voorbeelden',
    houseNumber: '99',
    houseNumberSuffix: '',
    postalCode: '1024 VP',
    homeTown: 'Voorbeeld',
    email: 'j.vandrouwen@gmail.com',
    tel: '0650618346',
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
          <form method="post" action="/api/wmebv/signed-in/step2" onSubmit={saveFormData}>
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
            <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
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
              className="voorbeeld-small-textbox-small"
              id={useId()}
              label="Naam"
              readOnly={true}
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
            >
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
              readOnly={true}
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
              readOnly={true}
            >
              <Paragraph slot="description">Niet verplicht.</Paragraph>
            </UtrechtFormFieldTextbox>

            <UtrechtFormFieldTextbox
              {...postalCodeField}
              autoComplete="postal-code"
              className="voorbeeld-tiny-textbox-small"
              id={useId()}
              label="Postcode"
              readOnly={true}
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
            >
              <UtrechtFormFieldErrorMessage slot="error-message">
                {String(errors[homeTownField.name]?.message)}
              </UtrechtFormFieldErrorMessage>
            </UtrechtFormFieldTextbox>

            <UtrechtFormFieldTextbox
              {...emailField}
              autoComplete="email"
              className="voorbeeld-small-textbox-small"
              id={useId()}
              type="email"
              label="E-mailadres"
            >
              <UtrechtFormFieldErrorMessage slot="error-message">
                {String(errors[emailField.name]?.message)}
              </UtrechtFormFieldErrorMessage>
            </UtrechtFormFieldTextbox>

            <UtrechtFormFieldTextbox
              {...phoneField}
              autoComplete="tel"
              className="voorbeeld-smaller-textbox-small"
              id="tel"
              label="Telefoonnummer"
              type="tel"
            >
              <Paragraph slot="description">Niet verplicht.</Paragraph>
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
