'use client';

import {
  UtrechtArticle,
  UtrechtButtonLink,
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
import { BreadcrumbNav, BreadcrumbNavLink, UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import ChevronRight from '../../styling/assets/chevronRight.svg';
import '@/app/styling/css/wmebv.css';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderWmebv></ExampleHeaderWmebv>
      <ExampleNavigation></ExampleNavigation>
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
          <UtrechtParagraph>
            Veel zaken regelt u eenvoudig zelf online via onze website. Kunt u de gewenste informatie niet vinden? Stel
            dan uw vraag via het contactformulier.
          </UtrechtParagraph>
          <UnorderedList>
            <UnorderedListItem>Het duurt ongeveer 5 minuten om dit formulier in te vullen.</UnorderedListItem>
            <UnorderedListItem>Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.</UnorderedListItem>
            <UnorderedListItem>U kunt het formulier tussentijds opslaan en later verder gaan.</UnorderedListItem>
            <UnorderedListItem>
              Na het versturen ontvangt u een bevestigingsmail. Ook heeft u de mogelijkheid uw vraag te downloaden of
              printen.
            </UnorderedListItem>
          </UnorderedList>
          <UtrechtButtonLink href="./Inloggen" appearance="primary-action-button">
            Doorgaan
          </UtrechtButtonLink>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter></ExampleFooter>
    </UtrechtPage>
  );
}
