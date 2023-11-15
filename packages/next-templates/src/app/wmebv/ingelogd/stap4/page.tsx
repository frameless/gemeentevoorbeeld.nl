'use client';

import {
  UtrechtArticle,
  UtrechtHeading1,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
  UtrechtLink,
  UtrechtButtonGroup,
  UtrechtIcon,
  UtrechtAlert,
  UtrechtHeading2,
  UtrechtUrlData,
} from '@utrecht/web-component-library-react';
import { Strong, UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import { IconPrinter, IconCircleCheck, IconFileText } from '@tabler/icons-react';
import { ExampleHeaderFunnelWmebv } from '@/components/wmebv/Header/ExampleHeaderFunnelWmebv';
import '@/app/styling/css/wmebv.css';
import { ContactFormSessionData, FORM_SESSION_KEY, useSessionState } from '../../SessionData';
import { ExampleFooterWmebv } from '@/components/wmebv/Footer/ExampleFooterWmebv';

export default function home() {
  const userdata = {
    username: 'J. van Drouwen',
    userURL: '#',
  };

  const data = {
    code: '230829-1118-59dc',
    email: 'j.vandrouwen@gmail.com',
  };

  const [storedData, _, __, removeStoredData] = useSessionState<ContactFormSessionData>(FORM_SESSION_KEY, data);

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv userURL={userdata.userURL} username={userdata.username} />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
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
            <UtrechtParagraph>Kenmerk: {storedData?.code}</UtrechtParagraph>
          </UtrechtAlert>
          <UtrechtHeading2>Wat gaat er nu gebeuren?</UtrechtHeading2>
          <UnorderedList>
            <UnorderedListItem>
              U ontvangt een bevestigingsmail op
              <Strong>
                <UtrechtUrlData>{storedData?.email}</UtrechtUrlData>
              </Strong>
            </UnorderedListItem>
            <UnorderedListItem>De afdeling Vraagbaak gaat met uw vraag aan de slag.</UnorderedListItem>
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
              href="/wmebv"
              onClick={() => {
                removeStoredData();
                location.assign('/wmebv');
              }}
            >
              Terug naar voorbeeld.nl
            </UtrechtLink>
          </UtrechtButtonGroup>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooterWmebv />
    </UtrechtPage>
  );
}
