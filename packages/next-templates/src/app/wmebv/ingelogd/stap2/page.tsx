'use client';

import {
  UtrechtArticle,
  UtrechtButtonGroup,
  UtrechtButtonLink,
  UtrechtFormFieldTextbox,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
} from '@utrecht/web-component-library-react';
import { ExampleHeaderFunnelWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderFunnelWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import ArrowLeft from '@/app/styling/assets/ArrowLeft.svg';
import '@/app/styling/css/wmebv.css';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv />
      <UtrechtPageContent>
        <UtrechtArticle>
          <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
          <UtrechtButtonGroup>
            <UtrechtButtonLink className="voorbeeld-button-link" appearance="subtle-button" href="./stap1">
              <ArrowLeft /> Vorige stap
            </UtrechtButtonLink>
          </UtrechtButtonGroup>
          <UtrechtParagraph>Stap 2 van 4</UtrechtParagraph>
          <UtrechtHeading2>Uw Gegevens</UtrechtHeading2>
          <UtrechtParagraph>
            Om u zo goed mogelijk te kunnen helpen, ontvangen we graag uw contactgegevens. Deze gegevens worden niet met
            anderen gedeeld.
          </UtrechtParagraph>

          <UtrechtFormFieldTextbox
            autoComplete="name"
            className="voorbeeld-small-textbox-small"
            id="Naam"
            label="Naam"
            name="naam"
            type="text"
            readOnly={true}
            value="Jeroen Van Drouwen"
          />

          <UtrechtFormFieldTextbox
            aria-label="straat"
            autoComplete="street-address"
            id="Straat"
            label="Straat"
            name="straat"
            type="text"
            readOnly={true}
            value="Laan der voorbeelden"
          />

          <UtrechtFormFieldTextbox
            autoComplete=""
            className="voorbeeld-tiny-textbox-small"
            id="Huisnummer"
            label="Huisnummer"
            name="huisnummer"
            type="text"
            readOnly={true}
            value="99"
          />

          <UtrechtFormFieldTextbox
            autoComplete=""
            className="voorbeeld-tiny-textbox-small"
            id="toevoeging"
            label="Toevoeging"
            name="toevoeging"
            type="text"
            readOnly={true}
          />

          <UtrechtFormFieldTextbox
            autoComplete="postal-code"
            className="voorbeeld-tiny-textbox-small"
            id="Postcode"
            label="Postcode"
            name="postcode"
            type="text"
            readOnly={true}
            value="1024 VP"
          />

          <UtrechtFormFieldTextbox
            autoComplete="address-level2"
            id="woonplaats"
            label="Woonplaats"
            name="Woonplaats"
            type="text"
            readOnly={true}
            value="Voorbeeld"
          />

          <UtrechtFormFieldTextbox
            autoComplete="email"
            className="voorbeeld-small-textbox-small"
            id="Emailadres"
            label="Emailadres"
            type="email"
            value="j.vandrouwen@gmail.com"
          />

          <UtrechtFormFieldTextbox
            autoComplete="tel"
            className="voorbeeld-smaller-textbox-small"
            id="tel"
            label="Telefoonnummer (niet verplicht)"
            type="tel"
            value="0650618346"
          />
          <UtrechtButtonGroup>
            <div className="voorbeeld-button-group-spacing">
              <UtrechtButtonLink className="voorbeeld-button-spacing" href="./stap3" appearance="primary-action-button">
                Volgende stap
              </UtrechtButtonLink>
              <UtrechtParagraph className="voorbeeld-link-spacing">
                <UtrechtButtonLink appearance="subtle-button" className="voorbeeld-button-link" href="#">
                  Opslaan en later verder
                </UtrechtButtonLink>
              </UtrechtParagraph>
              <UtrechtParagraph className="voorbeeld-paragraph-end-space">
                <UtrechtButtonLink appearance="subtle-button" className="voorbeeld-button-link" href="#">
                  Sluit formulier
                </UtrechtButtonLink>
              </UtrechtParagraph>
            </div>
          </UtrechtButtonGroup>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}
