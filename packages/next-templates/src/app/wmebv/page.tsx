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
import { ExampleFooterWmebv } from '@/components/wmebv/Footer/ExampleFooterWmebv';
import '@/app/styling/css/wmebv.css';
import { BreadcrumbNav, BreadcrumbNavLink } from '@utrecht/component-library-react';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { useEffect } from 'react';

export default function home() {
  const pageTitle = 'Contact met de gemeente';
  const websiteLabel = 'gemeente Voorbeeld';

  useEffect(() => {
    if (typeof document?.title === 'string') {
      document.title = `${pageTitle} - ${websiteLabel}`;
    }
  }, []);

  return (
    <UtrechtPage>
      <ExampleHeader />
      <ExampleNavigation />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle id="main" className="voorbeeld-article-space ">
          <BreadcrumbNav label="Kruimelpad">
            <BreadcrumbNavLink href="" index={0} rel="home">
              Home
            </BreadcrumbNavLink>
          </BreadcrumbNav>
          <UtrechtHeading1>{pageTitle}</UtrechtHeading1>
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
            <UtrechtLink href="/wmebv/productenpagina-klachtenformulier"> Start klachtenformulier</UtrechtLink>
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
