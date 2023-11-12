'use client';

import {
  UtrechtArticle,
  UtrechtButtonGroup,
  UtrechtButtonLink,
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

export default function home() {
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

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv />
      <UtrechtPageContent>
        <UtrechtArticle>
          <form action="./stap3" method="post">
            <UtrechtButtonGroup>
              <LinkButton type="submit" inline={true} className="voorbeeld-button-link" formAction="./stap1/">
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
              autoComplete="name"
              className="voorbeeld-small-textbox-small"
              id={useId()}
              label="Naam"
              name="naam"
              type="text"
              value={data.name}
            />

            <UtrechtFormFieldTextbox
              autoComplete="street-address"
              id={useId()}
              label="Straat"
              name="straat"
              type="text"
              value={data.street}
            />

            <UtrechtFormFieldTextbox
              autoComplete=""
              className="voorbeeld-tiny-textbox-small"
              id={useId()}
              label="Huisnummer"
              name="huisnummer"
              type="text"
              value={data.houseNumber}
            />

            <UtrechtFormFieldTextbox
              autoComplete=""
              className="voorbeeld-tiny-textbox-small"
              id={useId()}
              label="Toevoeging"
              name="toevoeging"
              type="text"
              value={data.houseNumberSuffix}
            />

            <UtrechtFormFieldTextbox
              autoComplete="postal-code"
              className="voorbeeld-tiny-textbox-small"
              id={useId()}
              label="Postcode"
              name="postcode"
              type="text"
              value={data.postalCode}
            />

            <UtrechtFormFieldTextbox
              autoComplete="address-level2"
              id={useId()}
              label="Woonplaats"
              name="Woonplaats"
              type="text"
              value={data.city}
            />

            <UtrechtFormFieldTextbox
              autoComplete="email"
              className="voorbeeld-small-textbox-small"
              id={useId()}
              label="Emailadres"
              type="email"
              value={data.email}
            />

            <UtrechtFormFieldTextbox
              autoComplete="tel"
              className="voorbeeld-smaller-textbox-small"
              id={useId()}
              label="Telefoonnummer"
              type="tel"
              value={data.tel}
            />
            <UtrechtButtonGroup direction="column">
              <UtrechtButtonLink className="voorbeeld-button-spacing" href="./stap3" appearance="primary-action-button">
                Volgende stap
              </UtrechtButtonLink>
              <UtrechtButtonLink appearance="subtle-button" className="voorbeeld-button-link" href="#">
                Opslaan en later verder
              </UtrechtButtonLink>
              <UtrechtButtonLink appearance="subtle-button" className="voorbeeld-button-link" href="#">
                Sluit formulier
              </UtrechtButtonLink>
            </UtrechtButtonGroup>
          </form>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}
