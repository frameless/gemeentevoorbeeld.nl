'use client';

import {
  UtrechtArticle,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtButton,
  UtrechtForm,
  UtrechtHeading,
  UtrechtHeading2,
  UtrechtLink,
  UtrechtParagraph,
  UtrechtTextbox,
  UtrechtButtonLink,
  UtrechtHeading1,
  UtrechtFormFieldTextbox,
} from '@utrecht/web-component-library-react';
import { ExampleHeaderWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { FormField, FormLabel, Textbox } from '@utrecht/component-library-react';
import '@/app/styling/css/wmebv.css';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderWmebv />
      <ExampleNavigation />
      <UtrechtPageContent>
        <UtrechtArticle>
          <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
          <UtrechtLink href="./stap1">Vorige stap</UtrechtLink>
          <UtrechtParagraph>Stap 2 van 4</UtrechtParagraph>
          <UtrechtHeading2>Uw Gegevens</UtrechtHeading2>
          <UtrechtParagraph>
            Om u zo goed mogelijk te kunnen helpen, ontvangen we graag uw contactgegevens. Deze gegevens worden niet met
            anderen gedeeld.
          </UtrechtParagraph>
          <FormLabel htmlFor="naam">Naam</FormLabel>
          <UtrechtFormFieldTextbox
            name="naam"
            type="text"
            id="naam"
            autoComplete="name"
            className="voorbeeld-small-textbox-small"
          />
          <FormLabel htmlFor="straat">Straat</FormLabel>
          <UtrechtFormFieldTextbox
            aria-label="straat"
            type="text"
            name="straat"
            id="straat"
            autoComplete="street-address"
          />
          <FormLabel htmlFor="huisnummer">Huisnummer</FormLabel>
          <UtrechtFormFieldTextbox
            autoComplete=""
            type="text"
            name="huisnummer"
            className="voorbeeld-tiny-textbox-small"
            id="huisnummer"
          />
          <FormLabel htmlFor="toevoeging">Toevoeging</FormLabel>
          <FormLabel htmlFor="toevoeging" className="utrecht-paragraph">
            (Niet verplicht)
          </FormLabel>
          <UtrechtFormFieldTextbox
            autoComplete=""
            name="toevoeging"
            id="toevoeging"
            type="text"
            className="voorbeeld-tiny-textbox-small"
          />
          <FormLabel htmlFor="postcode">Postcode</FormLabel>
          <UtrechtFormFieldTextbox
            name="postcode"
            id="postcode"
            autoComplete="postal-code"
            type="text"
            className="voorbeeld-tiny-textbox-small"
          />
          <FormLabel htmlFor="woonplaats">Woonplaats</FormLabel>
          <UtrechtFormFieldTextbox id="woonplaats" autoComplete="" name="woonplaats" />
          <FormLabel htmlFor="email">E-mailadres</FormLabel>
          <UtrechtFormFieldTextbox
            id="email"
            autoComplete="email"
            type="email"
            className="voorbeeld-small-textbox-small"
          />
          <FormLabel htmlFor="tel">Telefoonnummer</FormLabel>
          <FormLabel htmlFor="tel" className="utrecht-paragraph">
            (Niet verplicht)
          </FormLabel>
          <UtrechtFormFieldTextbox type="tel" id="tel" autoComplete="tel" className="voorbeeld-smaller-textbox-small" />
          <UtrechtButtonLink className="voorbeeld-button-spacing" href="./stap3" appearance="primary-action-button">
            Volgende stap
          </UtrechtButtonLink>
          <UtrechtParagraph className="voorbeeld-link-spacing">
            <UtrechtLink href="#">Opslaan en later verder</UtrechtLink>
          </UtrechtParagraph>
          <UtrechtParagraph className="voorbeeld-paragraph-end-space">
            <UtrechtLink href="#">Sluit formulier</UtrechtLink>
          </UtrechtParagraph>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}
