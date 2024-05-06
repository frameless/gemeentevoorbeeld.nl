'use client';

import {
  Article,
  Button,
  ButtonGroup,
  Heading1,
  Heading2,
  Icon,
  Link,
  Page,
  PageContent,
  Paragraph,
} from '@utrecht/component-library-react';
import { UtrechtDigidLogo } from '@utrecht/web-component-library-react';
import { Fieldset, FieldsetLegend, FormField, FormLabel, RadioButton } from '@utrecht/component-library-react';

import { IconArrowLeft } from '@tabler/icons-react';
import '@/app/styling/css/wmebv.css';
import '@/app/styling/css/detail-page.css';
import '@utrecht/design-tokens/dist/index.css';
import { useEffect } from 'react';

import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';

export default function home() {
  const stepLabel = 'Inloggen mijn omgeving';
  const websiteLabel = 'gemeente Voorbeeld';

  useEffect(() => {
    if (typeof document?.title === 'string') {
      document.title = `${stepLabel} - ${websiteLabel}`;
    }
  }, []);

  return (
    <Page>
      <ExampleHeader />
      <PageContent className="voorbeeld-page-content-flex">
        <Article id="main" className="voorbeeld-article-space ">
          <form method="POST" action="/api/wmebv/choose-form">
            <ButtonGroup>
              <Link href="./">
                <Icon>
                  <IconArrowLeft />
                </Icon>
                Terug
              </Link>
            </ButtonGroup>
            <Heading1>Inloggen</Heading1>
            <Paragraph className="paragraph_digid">
              Dankzij uw DigiD kunt u overal makkelijk en veilig inloggen. Uw persoonlijke gegevens blijven goed
              beschermd. Wanneer u inlogt worden uw persoonlijke gegevens automatisch ingevuld.
            </Paragraph>
            <UtrechtDigidLogo className="voorbeeld-digid-logo" aria-label="DigiD logo" role="img" />
            <Fieldset id="df861ef1-844a-42df-8365-b54f59474fb8" role="radiogroup">
              <FieldsetLegend className="fieldlabel_inloggen">Wilt u inloggen?</FieldsetLegend>
              <FormField type="radio">
                <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
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
                </Paragraph>
              </FormField>
              <FormField type="radio">
                <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
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
                </Paragraph>
              </FormField>
            </Fieldset>
            <ButtonGroup>
              <Button type="submit" appearance="primary-action-button">
                Doorgaan
              </Button>
            </ButtonGroup>
          </form>
        </Article>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
