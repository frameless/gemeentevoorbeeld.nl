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
import { ExampleHeaderWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import ArrowLeft from '@/app/styling/assets/arrow-left-icon.svg';
import { LinkButton } from '@utrecht/component-library-react';
import '@/app/styling/css/wmebv.css';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderWmebv />
      <ExampleNavigation />
      <UtrechtPageContent>
        <UtrechtArticle>
          <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
          <UtrechtButtonGroup>
            <LinkButton type="submit" inline={true} className="voorbeeld-button-link" formAction="./stap1/">
              <ArrowLeft /> Vorige Stap
            </LinkButton>
          </UtrechtButtonGroup>
          <UtrechtParagraph className="voorbeeld-paragraph-spacing-stapx"> Stap 2 van 4</UtrechtParagraph>
          <UtrechtHeading2>Uw gegevens</UtrechtHeading2>
          <UtrechtParagraph className="voorbeeld-paragraph-spacing">
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
          />

          <UtrechtFormFieldTextbox
            aria-label="straat"
            autoComplete="street-address"
            id="Straat"
            label="Straat"
            name="straat"
            type="text"
          />

          <UtrechtFormFieldTextbox
            autoComplete=""
            className="voorbeeld-tiny-textbox-small"
            id="Huisnummer"
            label="Huisnummer"
            name="huisnummer"
            type="text"
          />

          <UtrechtFormFieldTextbox
            autoComplete=""
            className="voorbeeld-tiny-textbox-small"
            id="toevoeging"
            label="Toevoeging"
            name="toevoeging"
            type="text"
          />

          <UtrechtFormFieldTextbox
            autoComplete="postal-code"
            className="voorbeeld-tiny-textbox-small"
            id="Postcode"
            label="Postcode"
            name="postcode"
            type="text"
          />

          <UtrechtFormFieldTextbox
            autoComplete="address-level2"
            id="woonplaats"
            label="Woonplaats"
            name="Woonplaats"
            type="text"
          />

          <UtrechtFormFieldTextbox
            autoComplete="email"
            className="voorbeeld-small-textbox-small"
            id="Emailadres"
            label="Emailadres"
            type="email"
          />

          <UtrechtFormFieldTextbox
            autoComplete="tel"
            className="voorbeeld-smaller-textbox-small"
            id="tel"
            label="Telefoonnummer"
            type="tel"
          />
          <UtrechtButtonGroup className="utrecht-button-group--example-column">
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
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}
