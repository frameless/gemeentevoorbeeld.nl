'use client';

import {
  UtrechtArticle,
  UtrechtButtonLink,
  UtrechtHeading1,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
  UtrechtLink,
  UtrechtSpotlightSection,
  UtrechtButtonGroup,
  UtrechtButton,
} from '@utrecht/web-component-library-react';
import { ExampleHeaderWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import Printer from '@/app/styling/assets/printer-icon.svg';
import FileText from '@/app/styling/assets/filetext-icon.svg';
import CircleCheck from '../../../styling/assets/circleCheck.svg';
import '@/app/styling/css/wmebv.css';
import { redirect } from 'next/navigation';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderWmebv />
      <ExampleNavigation />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <UtrechtSpotlightSection className="utrecht-spotlight-section-wmebv">
            <UtrechtHeading1>
              <CircleCheck /> Vraag met succes verstuurd
            </UtrechtHeading1>
            <UtrechtParagraph>Kenmerk: 230829-1118-59dc</UtrechtParagraph>
          </UtrechtSpotlightSection>
          <UtrechtHeading1>Wat gaat er nu gebeuren?</UtrechtHeading1>
          <UnorderedList>
            <UnorderedListItem className="voorbeeld-unordered-list-item">
              U ontvangt een bevestigingsmail op <span className="bold-mail">j.vandrouwen@gmail.com</span>
            </UnorderedListItem>
            <UnorderedListItem className="voorbeeld-unordered-list-item">
              De afdeling Vraagbaak gaat met uw vraag aan de slag.
            </UnorderedListItem>
          </UnorderedList>
          <UtrechtButtonGroup className="utrecht-button-group--example-column">
            <UtrechtLink className="link" href="#">
              <Printer /> Print uw vraag
            </UtrechtLink>
            <UtrechtLink className="link" href="#">
              <FileText /> Download uw vraag als PDF
            </UtrechtLink>
            <UtrechtButton
              appearance="subtle-button"
              className="voorbeeld-button-link"
              onClick={() => {
                sessionStorage.removeItem('wmebv');
                redirect('/wmebv');
              }}
            >
              Terug naar voorbeeld.nl
            </UtrechtButton>
          </UtrechtButtonGroup>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}
