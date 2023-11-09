'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonGroup,
  UtrechtButtonLink,
  UtrechtDigidLogo,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtIconChevronLeft,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
} from '@utrecht/web-component-library-react';
import { ExampleHeaderWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import '@/app/styling/css/wmebv.css';
import { Fieldset, FieldsetLegend, FormField, FormLabel, RadioButton } from '@utrecht/component-library-react';
import { useId } from 'react';

export default function home() {
  const radio1id = useId();
  const radio2id = useId();
  return (
    <UtrechtPage>
      <ExampleHeaderWmebv></ExampleHeaderWmebv>
      <ExampleNavigation></ExampleNavigation>
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtButtonGroup>
          <UtrechtButtonLink href="../" appearance="subtle-button">
            <UtrechtIconChevronLeft></UtrechtIconChevronLeft> Terug
          </UtrechtButtonLink>
        </UtrechtButtonGroup>
        <UtrechtArticle className="voorbeeld-article-space ">
          <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
          <UtrechtHeading2 id="form-heading">Inloggen</UtrechtHeading2>
          <UtrechtParagraph>
            Dankzij uw DigiD kunt u overal makkelijk en veilig inloggen. Uw persoonlijke gegevens blijven goed
            beschermd. Wanneer u inlogt worden uw persoonlijke gegevens automatisch ingevuld.
          </UtrechtParagraph>
          <UtrechtParagraph>
            <UtrechtDigidLogo className="voorbeeld-digid-logo" role="img" aria-label="DigiD logo" />
          </UtrechtParagraph>
          <form action="./wmebv/ingelogd-stap-1" method="post" aria-labelledby="form-heading">
            <Fieldset role="radiogroup">
              <FieldsetLegend>Wilt u inloggen?</FieldsetLegend>
              <FormField type="radio">
                <UtrechtParagraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                  <FormLabel className="voorbeeld-radio-button-form-label" htmlFor={radio1id} type="radio">
                    <RadioButton className="utrecht-form-field__input" id={radio1id} name="login" value="1" />
                    Ja
                  </FormLabel>
                </UtrechtParagraph>
              </FormField>
              <FormField type="radio">
                <UtrechtParagraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                  <FormLabel className="voorbeeld-radio-button-form-label" htmlFor={radio2id} type="radio">
                    <RadioButton className="utrecht-form-field__input" id={radio2id} name="login" value="0" />
                    Nee
                  </FormLabel>
                </UtrechtParagraph>
              </FormField>
            </Fieldset>
            <UtrechtButtonGroup>
              <UtrechtButton appearance="primary-action-button" type="submit">
                Doorgaan
              </UtrechtButton>
            </UtrechtButtonGroup>
          </form>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter></ExampleFooter>
    </UtrechtPage>
  );
}
