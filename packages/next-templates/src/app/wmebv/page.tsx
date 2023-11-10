'use client';

import {
  UtrechtArticle,
  UtrechtButtonGroup,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtLink,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
} from '@utrecht/web-component-library-react';
import { ExampleHeaderWmebv } from '@/components/wmebv/Header/ExampleHeaderWmebv';
import { ExampleFooterWmebv } from '@/components/wmebv/Footer/ExampleFooterWmebv';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import '@/app/styling/css/wmebv.css';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderWmebv />
      <ExampleNavigation />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <UtrechtButtonGroup>
            <UtrechtLink href="/wmebv">Home</UtrechtLink>
          </UtrechtButtonGroup>
          <UtrechtHeading1>Contact met de gemeente</UtrechtHeading1>
          <UtrechtParagraph lead>
            Veel zaken regelt u eenvoudig zelf online via onze website. Kunt u de gewenste informatie niet vinden? Stel
            dan uw vraag via het contactformulier.
          </UtrechtParagraph>
          <UtrechtHeading2>Vraag</UtrechtHeading2>
          <UtrechtParagraph>Gebruik het contactformulier om een vraag te stellen.</UtrechtParagraph>
          <UtrechtParagraph>
            <UtrechtButtonGroup>
              <UtrechtLink href="/wmebv/Intro">Start contactformulier</UtrechtLink>
            </UtrechtButtonGroup>
          </UtrechtParagraph>
          <UtrechtHeading2>Klacht</UtrechtHeading2>
          <UtrechtParagraph>Gebruik het klachtenformulier om een klacht in te dienen.</UtrechtParagraph>
          <UtrechtButtonGroup>
            <UtrechtLink href="#"> Start klachtenformulier</UtrechtLink>
          </UtrechtButtonGroup>
          <UtrechtHeading2>Melding openbare ruimte en overlast</UtrechtHeading2>
          <UtrechtParagraph>
            Ziet u op straat of in het park iets dat stuk is of onveilig is? Gebruik dan het meldingformulier.
          </UtrechtParagraph>
          <UtrechtButtonGroup>
            <UtrechtLink href="#"> Start meldingformulier</UtrechtLink>
          </UtrechtButtonGroup>
          <UtrechtHeading2>Idee of voorstel</UtrechtHeading2>
          <UtrechtParagraph>
            Heeft u een idee of heeft u een voorstel? Gebruik dan het voorstelformulier.
          </UtrechtParagraph>
          <UtrechtButtonGroup>
            <UtrechtLink href="#">Start voorstelformulier</UtrechtLink>
          </UtrechtButtonGroup>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooterWmebv />
    </UtrechtPage>
  );
}
