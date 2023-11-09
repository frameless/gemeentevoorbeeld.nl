'use client';

import {
  UtrechtArticle,
  UtrechtButtonGroup,
  UtrechtButtonLink,
  UtrechtHeading1,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
} from '@utrecht/web-component-library-react';
import { ExampleHeaderWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import { BreadcrumbNav, BreadcrumbNavLink } from '@utrecht/component-library-react';

import '@/app/styling/css/wmebv.css';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderWmebv></ExampleHeaderWmebv>
      <ExampleNavigation></ExampleNavigation>
      <BreadcrumbNav label="Kruimelpad">
        <BreadcrumbNavLink className="voorbeeld-breadcrumb-text-decoration" href="./Home" index={0} rel="home">
          Terug
        </BreadcrumbNavLink>
      </BreadcrumbNav>
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
          <UtrechtParagraph>
            Veel zaken regelt u eenvoudig zelf online via onze website. Kunt u de gewenste informatie niet vinden? Stel
            dan uw vraag via het contactformulier.
          </UtrechtParagraph>
          <UnorderedList>
            <UnorderedListItem className="voorbeeld-unordered-list-item">
              Het duurt ongeveer 5 minuten om dit formulier in te vullen.
            </UnorderedListItem>
            <UnorderedListItem className="voorbeeld-unordered-list-item">
              Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.
            </UnorderedListItem>
            <UnorderedListItem className="voorbeeld-unordered-list-item">
              U kunt het formulier tussentijds opslaan en later verder gaan.
            </UnorderedListItem>
            <UnorderedListItem className="voorbeeld-unordered-list-item">
              Na het versturen ontvangt u een bevestigingsmail. Ook heeft u de mogelijkheid uw vraag te downloaden of
              printen.
            </UnorderedListItem>
          </UnorderedList>
          <UtrechtButtonGroup>
            <UtrechtButtonLink href="./Inloggen" appearance="primary-action-button">
              Doorgaan
            </UtrechtButtonLink>
          </UtrechtButtonGroup>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter></ExampleFooter>
    </UtrechtPage>
  );
}
