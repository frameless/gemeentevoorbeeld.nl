import { Strong, UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import React, { HTMLAttributes } from 'react';
import { IconCircleCheck, IconPrinter, IconFileText } from '@tabler/icons-react';
import {
  UtrechtPageContent,
  UtrechtArticle,
  UtrechtAlert,
  UtrechtHeading1,
  UtrechtIcon,
  UtrechtParagraph,
  UtrechtHeading2,
  UtrechtUrlData,
  UtrechtButtonGroup,
  UtrechtLink,
} from '@utrecht/web-component-library-react';
import { ContactFormSessionData } from '@/app/wmebv/SessionData';

interface ExampleSuccessPageProps extends HTMLAttributes<HTMLDivElement> {
  mijnOmgeving?: boolean;
  storedData: ContactFormSessionData;
  removeStoredData: () => void;
}

export const ExampleSuccessPage = ({ storedData, removeStoredData, mijnOmgeving }: ExampleSuccessPageProps) => (
  <UtrechtPageContent className="voorbeeld-page-content-flex">
    <UtrechtArticle id="main" className="voorbeeld-article-space ">
      <UtrechtAlert type="ok" className="utrecht-spotlight-section-wmebv">
        <UtrechtHeading1>
          <UtrechtIcon
            style={{
              '--utrecht-icon-color': 'var(--_utrecht-alert-icon-color, currentColor)',
            }}
          >
            <IconCircleCheck size={33} />
          </UtrechtIcon>
          Uw vraag is met succes verstuurd
        </UtrechtHeading1>
        <UtrechtParagraph>Zaaknummer: {storedData?.code}</UtrechtParagraph>
      </UtrechtAlert>
      <UtrechtHeading2>Wat gaat er nu gebeuren?</UtrechtHeading2>
      <UnorderedList>
        <UnorderedListItem>
          U ontvangt een bevestigingsmail op{' '}
          <Strong>
            <UtrechtUrlData>{storedData?.email}</UtrechtUrlData>
          </Strong>
        </UnorderedListItem>
        <UnorderedListItem>De afdeling Vraagbaak gaat met uw vraag aan de slag.</UnorderedListItem>
        {mijnOmgeving && (
          <UnorderedListItem>
            U wordt per e-mail op de hoogte gehouden maar kunt de voortgang ook inzien binnen uw{' '}
            <UtrechtLink href="/mijn-omgeving/">Mijn omgeving</UtrechtLink>.
          </UnorderedListItem>
        )}
      </UnorderedList>
      <UtrechtButtonGroup direction="column">
        <UtrechtLink href="#">
          <UtrechtIcon>
            <IconPrinter />
          </UtrechtIcon>
          Print uw vraag
        </UtrechtLink>
        <UtrechtLink href="/" download="vraag.pdf">
          <UtrechtIcon>
            <IconFileText />
          </UtrechtIcon>
          Download uw vraag als PDF
        </UtrechtLink>
        <UtrechtLink
          href="/wmebv/"
          onClick={() => {
            removeStoredData();
            location.assign('/wmebv');
          }}
        >
          Terug naar <UtrechtUrlData>gemeentevoorbeeld.nl</UtrechtUrlData>
        </UtrechtLink>
      </UtrechtButtonGroup>
    </UtrechtArticle>
  </UtrechtPageContent>
);

ExampleSuccessPage.displayName = 'ExampleSuccessPage';
