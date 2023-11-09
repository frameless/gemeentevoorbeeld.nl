'use client';

import {
  UtrechtArticle,
  UtrechtButton,
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

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderWmebv></ExampleHeaderWmebv>
      <ExampleNavigation></ExampleNavigation>
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <UtrechtLink href="/wmebv/Inloggen">Home</UtrechtLink>
          <UtrechtHeading1>Contact met de gemeente</UtrechtHeading1>
          <UtrechtParagraph lead>
            Veel zaken regelt u eenvoudig zelf online via onze website. Kunt u de gewenste informatie niet vinden? Stel
            dan uw vraag via het contactformulier.
          </UtrechtParagraph>
          <UtrechtHeading2>Vraag</UtrechtHeading2>
          <UtrechtParagraph>Gebruik het contactformulier om een vraag te stellen.</UtrechtParagraph>
          <UtrechtParagraph>
            <UtrechtLink href="/wmebv/Intro">Start contactformulier</UtrechtLink>
          </UtrechtParagraph>
          <UtrechtHeading2>Klacht</UtrechtHeading2>
          <UtrechtParagraph>Gebruik het klachtenformulier om een klacht in te dienen.</UtrechtParagraph>
          <UtrechtLink href="#"> Start klachtenformulier</UtrechtLink>
          <UtrechtHeading2>Melding openbare ruimte en overlast</UtrechtHeading2>
          <UtrechtParagraph>
            Ziet u op straat of in het park iets dat stuk is of onveilig is? Gebruik dan het meldingformulier.
          </UtrechtParagraph>
          <UtrechtLink href="#"> Start meldingformulier</UtrechtLink>
          <UtrechtHeading2>Idee of voorstel</UtrechtHeading2>
          <UtrechtParagraph>
            Heeft u een idee of heeft u een voorstel? Gebruik dan het voorstelformulier.
          </UtrechtParagraph>
          <UtrechtLink href="#">Start voorstelformulier</UtrechtLink>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter></ExampleFooter>
    </UtrechtPage>
  );
}
