'use client';

import {
  Article,
  Button,
  ButtonGroup,
  BreadcrumbNav,
  BreadcrumbNavLink,
  FormField,
  Heading1,
  Heading2,
  HeadingGroup,
  Icon,
  Link,
  Page,
  PageContent,
  Paragraph,
  PreHeading,
  RadioButton,
  UnorderedList,
  UnorderedListItem,
  LinkButton,
} from '@utrecht/component-library-react';

// import { ContactFormSessionData, FORM_SESSION_KEY, useSessionState } from '../../SessionData';

import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';

import '@/app/styling/css/wmebv.css';

import { useEffect } from 'react';

export default function home() {
  const stepProgressLabel = 'Stap 1 van 4';
  const stepLabel = 'Uw klacht';
  const websiteLabel = 'gemeente voorbeeld';

  useEffect(() => {
    if (typeof document?.title === 'string') {
      document.title = `${stepProgressLabel}: ${stepLabel} - ${websiteLabel}`;
    }
  }, []);

  return (
    <Page>
      <ExampleHeader />
      <ExampleNavigation />
      <PageContent className="voorbeeld-page-content-flex">
        <Article id="main" className="voorbeeld-article-space ">
          <BreadcrumbNav label="Kruimelpad">
            <BreadcrumbNavLink href="/productpagina-klachtenformulier">Terug</BreadcrumbNavLink>
          </BreadcrumbNav>
          <Heading1>Klacht over de gemeente doorgeven</Heading1>
          {/* Stap 1 van 4 (moet hier nog komen te staan) */}
          <Paragraph>Vul de vakjes met een * altijd in. Anders kunt u niet verder.</Paragraph>
          <Heading2>Uw klacht </Heading2>
          <form>
            <label id="radioButtenGroupWelkOnderdeel">Weet u voor welke afdeling de medewerker werkt?</label>
            <fieldset id="radioButtenGroupWelkOnderdeel">
              {/* legend gebruiken zoals hieronder of label zoals hierboven? */}
              {/* <legend>Weet u voor welke afdeling de medewerker werkt?</legend> */}
              <span>
                <input id="welkOnderdeel0" type="radio" value=""></input>
                <label id="welkOnderdeel0">
                  Publiekzaken: bijvoorbeeld paspoort of trouwen of de wachttijd als u ons belt.
                </label>
              </span>
              <span>
                <input id="welkOnderdeel1" type="radio" value=""></input>
                <label id="welkOnderdeel1">
                  Stadsbedrijven: bijvoorbeeld ophalen afval, parken en bomen of sportplekken.
                </label>
              </span>
              <span>
                <input id="welkOnderdeel2" type="radio" value=""></input>
                <label id="welkOnderdeel2">
                  Ruimte: bijvoorbeeld verkeer, bouwen, energie en klimaat of speelruimte.
                </label>
              </span>
              <span>
                <input id="welkOnderdeel3" type="radio" value=""></input>
                <label id="welkOnderdeel3">Werk en Inkomen: bijvoorbeeld bijstand, schulddienstverlening of Wmo.</label>
              </span>
              <span>
                <input id="welkOnderdeel4" type="radio" value=""></input>
                <label id="welkOnderdeel4">
                  Vergunningen, Toezicht en Handhaving: bijvoorbeeld handhavers (boa’s) parkeerboetes, of vergunningen.
                </label>
              </span>
              <span>
                <input id="welkOnderdeel5" type="radio" value=""></input>
                <label id="welkOnderdeel5">Anders of ik weet het niet</label>
              </span>
            </fieldset>

            <label id="tekstFieldOverWie">Over wie gaat uw klacht?</label>
            <fieldset id="tekstFieldOverWie">
              <input type="text"></input>
            </fieldset>
          </form>
        </Article>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
