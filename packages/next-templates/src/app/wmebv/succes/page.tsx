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
  UtrechtLink,
  UtrechtSpotlightSection,
} from '@utrecht/web-component-library-react';
import { ExampleHeaderWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import Printer from '@/app/styling/assets/printer-icon.svg';
import FileText from '@/app/styling/assets/filetext-icon.svg';
import CircleCheck from '../../styling/assets/circleCheck.svg';
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
          <UtrechtAlert type="ok" className="utrecht-spotlight-section-wmebv" />
          <CircleCheck slot="icon" />
          <UtrechtHeading1>Uw vraag is met succes verstuurd</UtrechtHeading1>
          <UtrechtParagraph>Kenmerk: 230829-1118-59dc</UtrechtParagraph>
          <UtrechtSpotlightSection />
          <UtrechtHeading1>Wat gaat er nu gebeuren?</UtrechtHeading1>

          <UnorderedList>
            <UnorderedListItem className="voorbeeld-unordered-list-item">
              U ontvangt een bevestigingsmail op <span className="bold-mail">j.vandrouwen@gmail.com</span>
            </UnorderedListItem>
            <UnorderedListItem className="voorbeeld-unordered-list-item">
              De afdeling Vraagbaak gaat met uw vraag aan de slag.
            </UnorderedListItem>
          </UnorderedList>
          <UtrechtLink className="link">
            <Printer /> Print uw vraag
          </UtrechtLink>
          <UtrechtLink className="link">
            <FileText /> Download uw vraag als PDF
          </UtrechtLink>
          <UtrechtLink className="link">Terug naar voorbeeld.nl</UtrechtLink>

          <UtrechtButtonLink href="./Inloggen" appearance="primary-action-button">
            Doorgaan
          </UtrechtButtonLink>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter></ExampleFooter>
    </UtrechtPage>
  );
}
