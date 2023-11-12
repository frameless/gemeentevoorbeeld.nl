'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonGroup,
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

export default function home() {
  const data = {
    message: `Beste meneer of mevrouw,

Ik heb 8 weken geleden een aanvraag voor bijstandsuitkering gedaan maar ik heb nog steeds niets
gehoord. Volgens mij had u allang op mijn aanvraag moeten beslissen.

Met vriendelijke groet, Jeroen van Drouwen`,
    name: 'Jeroen van Drouwen',
    street: 'Laan der Voorbeelden',
    houseNumber: '99',
    houseNumberSuffix: '',
    postalCode: '1024 VP',
    city: 'Voorbeeld',
    email: 'j.vandrouwen@gmail.com',
    tel: '0650618346',
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
              autoComplete="name"
              className="voorbeeld-small-textbox-small"
              id={useId()}
              label="Naam"
              name="naam"
              type="text"
              readOnly={true}
              value={data.name}
            />

            <UtrechtFormFieldTextbox
              autoComplete="street-address"
              id={useId()}
              label="Straat"
              name="straat"
              type="text"
              readOnly={true}
              value={data.street}
            />

            <UtrechtFormFieldTextbox
              autoComplete=""
              className="voorbeeld-tiny-textbox-small"
              id={useId()}
              label="Huisnummer"
              name="huisnummer"
              type="text"
              readOnly={true}
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
              readOnly={true}
            />

            <UtrechtFormFieldTextbox
              autoComplete="postal-code"
              className="voorbeeld-tiny-textbox-small"
              id={useId()}
              label="Postcode"
              name="postcode"
              type="text"
              readOnly={true}
              value={data.postalCode}
            />

            <UtrechtFormFieldTextbox
              autoComplete="address-level2"
              id={useId()}
              label="Woonplaats"
              name="Woonplaats"
              type="text"
              readOnly={true}
              value={data.city}
            />

            <UtrechtFormFieldTextbox
              autoComplete="email"
              className="voorbeeld-small-textbox-small"
              id={useId()}
              label="E-mailadres"
              type="email"
              value={data.email}
            />

            <UtrechtFormFieldTextbox
              autoComplete="tel"
              className="voorbeeld-smaller-textbox-small"
              id="tel"
              label="Telefoonnummer"
              type="tel"
              value={data.tel}
            >
              <Paragraph slot="description">Niet verplicht.</Paragraph>
            </UtrechtFormFieldTextbox>
            <UtrechtButtonGroup direction="column">
              <UtrechtButton
                type="submit"
                className="voorbeeld-button-spacing"
                appearance="primary-action-button"
                formAction="./stap3/"
              >
                Volgende stap
              </UtrechtButton>
              <LinkButton inline className="voorbeeld-button-link" formAction="./save">
                Opslaan en later verder
              </LinkButton>
              <LinkButton inline className="voorbeeld-button-link" formAction="./stop">
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
