'use client';

import {
  UtrechtArticle,
  UtrechtButtonGroup,
  UtrechtButtonLink,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
  UtrechtSpotlightSection,
} from '@utrecht/web-component-library-react';
import { ExampleHeaderFunnelWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderFunnelWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import CircleCheck from '@/app/styling/assets/circleCheck.svg';
import '@/app/styling/css/wmebv.css';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <UtrechtSpotlightSection className="utrecht-spotlight-section-wmebv">
            <UtrechtHeading1>
              <CircleCheck /> Vraag met succes verstuurd
            </UtrechtHeading1>
            <UtrechtParagraph>Kenmerk: 230829-1118-59dc</UtrechtParagraph>
          </UtrechtSpotlightSection>
          <UtrechtHeading2>Wat gaat er nu gebeuren?</UtrechtHeading2>
          <UnorderedList>
            <UnorderedListItem>U ontvangt een bevestigingsmail op j.vandrouwen@gmail.com.</UnorderedListItem>
            <UnorderedListItem>De afdeling Vraagbaak gaat met uw vraag aan de slag.</UnorderedListItem>
          </UnorderedList>
          <UtrechtButtonGroup>
            <div className="voorbeeld-button-group-spacing">
              <UtrechtParagraph>
                <UtrechtButtonLink
                  className="voorbeeld-button-link voorbeeld-button-spacing"
                  href="./stap3"
                  appearance="subtle-button"
                >
                  Print uw vraag
                </UtrechtButtonLink>
              </UtrechtParagraph>
              <UtrechtParagraph className="voorbeeld-link-spacing">
                <UtrechtButtonLink appearance="subtle-button" className="voorbeeld-button-link" href="#">
                  Download uw vraag als PDF
                </UtrechtButtonLink>
              </UtrechtParagraph>
              <UtrechtParagraph className="voorbeeld-paragraph-end-space">
                <UtrechtButtonLink appearance="subtle-button" className="voorbeeld-button-link" href="#">
                  Terug naar voorbeeld.nl
                </UtrechtButtonLink>
              </UtrechtParagraph>
            </div>
          </UtrechtButtonGroup>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter></ExampleFooter>
    </UtrechtPage>
  );
}
