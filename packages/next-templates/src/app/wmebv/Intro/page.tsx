'use client';

import {
  UtrechtArticle,
  UtrechtButtonGroup,
  UtrechtButtonLink,
  UtrechtHeading1,
  UtrechtIcon,
  UtrechtLink,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
} from '@utrecht/web-component-library-react';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import { IconArrowLeft } from '@tabler/icons-react';
import { ExampleHeaderFunnelWmebv } from '@/components/wmebv/Header/ExampleHeaderFunnelWmebv';
import '@/app/styling/css/wmebv.css';
import { ExampleFooterWmebv } from '@/components/wmebv/Footer/ExampleFooterWmebv';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space">
          <form action="./Inloggen" method="post">
            <UtrechtButtonGroup>
              <UtrechtLink href="/wmebv">
                <UtrechtIcon>
                  <IconArrowLeft />
                </UtrechtIcon>
                Terug
              </UtrechtLink>
            </UtrechtButtonGroup>
            <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
            <UtrechtParagraph lead>
              Veel zaken regelt u eenvoudig zelf online via onze website. Kunt u de gewenste informatie niet vinden?
              Stel dan uw vraag via het contactformulier.
            </UtrechtParagraph>
            <UnorderedList>
              <UnorderedListItem>Het duurt ongeveer 5 minuten om dit formulier in te vullen.</UnorderedListItem>
              <UnorderedListItem>
                Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.
              </UnorderedListItem>
              <UnorderedListItem>U kunt het formulier tussentijds opslaan en later verder gaan.</UnorderedListItem>
              <UnorderedListItem>
                Na het versturen ontvangt u een bevestigingsmail. Ook heeft u de mogelijkheid uw vraag te downloaden of
                printen.
              </UnorderedListItem>
            </UnorderedList>
            <UtrechtButtonGroup>
              <UtrechtButtonLink href="./Inloggen" appearance="primary-action-button">
                Doorgaan
              </UtrechtButtonLink>
            </UtrechtButtonGroup>
          </form>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooterWmebv />
    </UtrechtPage>
  );
}
