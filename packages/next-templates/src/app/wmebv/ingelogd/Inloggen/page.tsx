'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonLink,
  UtrechtDigidLogo,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtLink,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
} from '@utrecht/web-component-library-react';
import { ExampleHeaderWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import '@/app/styling/css/wmebv.css';
import { Fieldset, FieldsetLegend, FormField, FormLabel, RadioButton } from '@utrecht/component-library-react';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderWmebv></ExampleHeaderWmebv>
      <ExampleNavigation></ExampleNavigation>
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
          <UtrechtHeading2>Inloggen</UtrechtHeading2>
          <UtrechtParagraph>
            Dankzij uw DigiD kunt u overal makkelijk en veilig inloggen. Uw persoonlijke gegevens blijven goed
            beschermd. Wanneer u inlogt worden uw persoonlijke gegevens automatisch ingevuld.
          </UtrechtParagraph>
          <UtrechtDigidLogo className="voorbeeld-digid-logo" />
          <Fieldset id="df861ef1-844a-42df-8365-b54f59474fb8" role="radiogroup">
            <FieldsetLegend>Wilt u inloggen</FieldsetLegend>
            <FormField type="radio">
              <UtrechtParagraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                <FormLabel
                  className="voorbeeld-radio-button-form-label"
                  htmlFor="800b7f3f-5048-4dcc-8f23-d04fa6ca4199"
                  type="radio"
                >
                  <RadioButton
                    className="utrecht-form-field__input"
                    id="800b7f3f-5048-4dcc-8f23-d04fa6ca4199"
                    name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                    value="1"
                  />
                  Option 1
                </FormLabel>
              </UtrechtParagraph>
            </FormField>
            <FormField type="radio">
              <UtrechtParagraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                <FormLabel
                  className="voorbeeld-radio-button-form-label"
                  htmlFor="fbc03e63-42c2-46e3-9acc-183fa64c6dcd"
                  type="radio"
                >
                  <RadioButton
                    className="utrecht-form-field__input"
                    id="fbc03e63-42c2-46e3-9acc-183fa64c6dcd"
                    name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                    value="2"
                  />
                  Option 2
                </FormLabel>
              </UtrechtParagraph>
            </FormField>
          </Fieldset>
          <UtrechtButtonLink href="./wmebv/ingelogd-stap-1" appearance="primary-action-button">
            Doorgaan
          </UtrechtButtonLink>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter></ExampleFooter>
    </UtrechtPage>
  );
}
