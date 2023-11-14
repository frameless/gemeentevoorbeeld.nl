'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonGroup,
  UtrechtDigidLogo,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtIcon,
  UtrechtLink,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
} from '@utrecht/web-component-library-react';
import { ExampleHeaderFunnelWmebv } from '@/components/wmebv/Header/ExampleHeaderFunnelWmebv';
import { ExampleFooterWmebv } from '@/components/wmebv/Footer/ExampleFooterWmebv';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { Fieldset, FieldsetLegend, FormField, FormLabel, RadioButton } from '@utrecht/component-library-react';
import { IconArrowLeft } from '@tabler/icons-react';
import '@/app/styling/css/wmebv.css';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <form method="POST" action="/api/wmebv/choose-form">
            <UtrechtButtonGroup>
              <UtrechtLink href="/wmebv/Intro">
                <UtrechtIcon>
                  <IconArrowLeft />
                </UtrechtIcon>
                Terug
              </UtrechtLink>
            </UtrechtButtonGroup>
            <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
            <UtrechtHeading2>Inloggen</UtrechtHeading2>
            <UtrechtParagraph className="paragraph_digid">
              Dankzij uw DigiD kunt u overal makkelijk en veilig inloggen. Uw persoonlijke gegevens blijven goed
              beschermd. Wanneer u inlogt worden uw persoonlijke gegevens automatisch ingevuld.
            </UtrechtParagraph>
            <UtrechtDigidLogo className="voorbeeld-digid-logo" aria-label="DigiD logo" role="img" />
            <Fieldset id="df861ef1-844a-42df-8365-b54f59474fb8" role="radiogroup">
              <FieldsetLegend className="fieldlabel_inloggen">Wilt u inloggen?</FieldsetLegend>
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
                      name="loggedIn"
                      value="true"
                    />
                    Ja
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
                      name="loggedIn"
                      value="false"
                    />
                    Nee
                  </FormLabel>
                </UtrechtParagraph>
              </FormField>
            </Fieldset>
            <UtrechtButtonGroup>
              <UtrechtButton type="submit" appearance="primary-action-button">
                Doorgaan
              </UtrechtButton>
            </UtrechtButtonGroup>
          </form>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooterWmebv />
    </UtrechtPage>
  );
}
