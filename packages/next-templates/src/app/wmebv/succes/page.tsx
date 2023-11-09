'use client';

import {
  UtrechtAlert,
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonLink,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
  UtrechtUrlData,
} from '@utrecht/web-component-library-react';
import { ExampleHeaderWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { ButtonGroup, Strong, UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import CircleCheck from '@/app/styling/assets/circleCheck.svg';
import '@/app/styling/css/wmebv.css';

export default function home() {
  const data = {
    email: 'j.vandrouwen@gmail.com',
  };

  const { email } = data;

  return (
    <UtrechtPage>
      <ExampleHeaderWmebv></ExampleHeaderWmebv>
      <ExampleNavigation></ExampleNavigation>
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <UtrechtAlert type="ok" className="utrecht-spotlight-section-wmebv">
            <CircleCheck slot="icon" />
            <UtrechtHeading1>Uw vraag is met succes verstuurd</UtrechtHeading1>
            <UtrechtParagraph>Kenmerk: 230829-1118-59dc</UtrechtParagraph>
          </UtrechtAlert>
          <UtrechtHeading2>Wat gaat er nu gebeuren?</UtrechtHeading2>
          <UtrechtParagraph>
            Veel zaken regelt u eenvoudig zelf online via onze website. Kunt u de gewenste informatie niet vinden? Stel
            dan uw vraag via het contactformulier.
          </UtrechtParagraph>
          <UnorderedList>
            <UnorderedListItem>
              U ontvangt een bevestigingsmail op{' '}
              <Strong>
                <UtrechtUrlData>{email}</UtrechtUrlData>
              </Strong>
              .
            </UnorderedListItem>
            <UnorderedListItem>De afdeling Vraagbaak gaat met uw vraag aan de slag.</UnorderedListItem>
          </UnorderedList>
          <ButtonGroup className="utrecht-button-group--example-column">
            {/* TODO: Don't print this page, print the page with the data list */}
            <UtrechtButton appearance="subtle-button" onClick={() => print()}>
              Print uw vraag
            </UtrechtButton>
            {/* TODO: Add attributes to PDF link, when component supports them: download="vraag.pdf" type="application/pdf" */}
            <UtrechtButtonLink appearance="subtle-button" href="/archive/vraag.pdf">
              Download uw vraag als PDF
            </UtrechtButtonLink>
            <UtrechtButtonLink appearance="subtle-button" href="/">
              Terug naar voorbeeld.nl
            </UtrechtButtonLink>
          </ButtonGroup>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter></ExampleFooter>
    </UtrechtPage>
  );
}
