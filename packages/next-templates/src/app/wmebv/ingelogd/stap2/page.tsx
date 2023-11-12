'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonGroup,
  UtrechtButtonLink,
  UtrechtFormFieldTextbox,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
} from '@utrecht/web-component-library-react';
import { HeadingGroup, LinkButton, PreHeading } from '@utrecht/component-library-react';
import { ExampleHeaderFunnelWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderFunnelWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import ArrowLeft from '@/app/styling/assets/arrow-left-icon.svg';
import '@/app/styling/css/wmebv.css';
import { useForm } from 'react-hook-form';
import { redirect } from 'next/navigation';

export default function home() {
  const storedFormData = sessionStorage.getItem('wmebv');
  const defaultValues = storedFormData && JSON.parse(storedFormData);

  const digid = {
    naam: 'Jeroen Van Drouwen',
    straat: 'Laan der voorbeelden',
    huisnummer: 99,
    toevoeging: '',
    postcode: '1024 VP',
    woonplaats: 'Voorbeeld',
    email: 'j.vandrouwen@gmail.com',
    tel: '0650618346',
  };

  const {
    getValues,
    register,
    formState: { errors },
  } = useForm({ defaultValues: { ...defaultValues, ...digid } });

  const { max: _naamMax, min: _naamMin, ...nameField } = register('naam');
  const { max: _straatMax, min: _straatMin, ...streetField } = register('straat');
  const { max: _huisnummerMax, min: _huisnummerMin, ...houseNumberField } = register('huisnummer');
  const { max: _toevoegingMax, min: _toevoegingMin, ...houseNumberSuffixField } = register('toevoeging');
  const { max: _postcodeMax, min: _postcodeMin, ...postalCodeField } = register('postcode');
  const { max: _woonplaatsMax, min: _woonplaatsMin, ...homeTownField } = register('woonplaats');
  const { max: _emailMax, min: _emailMin, ...emailField } = register('email');
  const { max: _telMax, min: _telMin, ...telField } = register('tel');

  const saveFormData = () => sessionStorage.setItem('wmebv', JSON.stringify(getValues()));
  const deleteFormData = () => sessionStorage.removeItem('wmebv');

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv />
      <UtrechtPageContent>
        <UtrechtArticle>
          <form method="post" action="/api/wmebv/signed-in/step2" onSubmit={saveFormData}>
            <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
            <UtrechtButtonGroup>
              <LinkButton
                type="submit"
                inline={true}
                className="voorbeeld-button-link"
                onSubmit={saveFormData}
                formAction="/api/wmebv/signed-in/step2/back"
              >
                <ArrowLeft /> Vorige Stap
              </LinkButton>
            </UtrechtButtonGroup>
            <HeadingGroup>
              <PreHeading>Stap 2 van 4</PreHeading>
              <UtrechtHeading2>Uw Gegevens</UtrechtHeading2>
            </HeadingGroup>
            <UtrechtParagraph>
              Om u zo goed mogelijk te kunnen helpen, ontvangen we graag uw contactgegevens. Deze gegevens worden niet
              met anderen gedeeld.
            </UtrechtParagraph>

            <UtrechtFormFieldTextbox
              {...nameField}
              className="voorbeeld-small-textbox-small"
              id="Naam"
              label="Naam"
              name="naam"
              readOnly={true}
            />

            <UtrechtFormFieldTextbox {...streetField} aria-label="straat" id="Straat" label="Straat" readOnly={true} />

            <UtrechtFormFieldTextbox
              {...houseNumberField}
              className="voorbeeld-tiny-textbox-small"
              id="Huisnummer"
              label="Huisnummer"
              readOnly={true}
            />

            <UtrechtFormFieldTextbox
              {...houseNumberSuffixField}
              className="voorbeeld-tiny-textbox-small"
              id="toevoeging"
              label="Toevoeging"
              readOnly={true}
            />

            <UtrechtFormFieldTextbox
              {...postalCodeField}
              autoComplete="postal-code"
              className="voorbeeld-tiny-textbox-small"
              id="Postcode"
              label="Postcode"
              readOnly={true}
            />

            <UtrechtFormFieldTextbox
              {...homeTownField}
              autoComplete="address-level2"
              id="woonplaats"
              label="Woonplaats"
              readOnly={true}
            />

            <UtrechtFormFieldTextbox
              {...emailField}
              autoComplete="email"
              className="voorbeeld-small-textbox-small"
              id="Emailadres"
              label="Emailadres"
              type="email"
            />

            <UtrechtFormFieldTextbox
              {...telField}
              autoComplete="tel"
              className="voorbeeld-smaller-textbox-small"
              id="tel"
              label="Telefoonnummer (niet verplicht)"
              type="tel"
            />
            <UtrechtButtonGroup className="utrecht-button-group--example-column">
              <UtrechtButton type="submit" className="voorbeeld-button-spacing" appearance="primary-action-button">
                Volgende stap
              </UtrechtButton>
              <UtrechtButton
                appearance="subtle-button"
                className="voorbeeld-button-link"
                formAction="/api/wmebv/save"
                formMethod="POST"
                type="submit"
                onSubmit={saveFormData}
              >
                Opslaan en later verder
              </UtrechtButton>
              <UtrechtButton
                type="submit"
                appearance="subtle-button"
                className="voorbeeld-button-link"
                onClick={deleteFormData}
                formAction="/wmebv"
              >
                Sluit formulier
              </UtrechtButton>
            </UtrechtButtonGroup>
          </form>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}
