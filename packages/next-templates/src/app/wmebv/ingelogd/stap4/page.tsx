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
import { ExampleFooterWmebv } from '@/components/wmebv/Footer/ExampleFooterWmebv';
import { ExampleHeaderFunnelWmebv } from '@/components/wmebv/Header/ExampleHeaderFunnelWmebv';
import { Strong, UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import Printer from '@/app/styling/assets/printer-icon.svg';
import FileText from '@/app/styling/assets/filetext-icon.svg';
import CircleCheck from '../../../styling/assets/circleCheck.svg';
import '@/app/styling/css/wmebv.css';

export default function home() {
  const userdata = {
    username: 'J. van Drouwen',
    userURL: '#',
  };

  const data = {
    code: '230829-1118-59dc',
    email: 'j.vandrouwen@gmail.com',
  };
  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv userURL={userdata.userURL} username={userdata.username} />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <UtrechtAlert type="ok" className="utrecht-spotlight-section-wmebv">
            <UtrechtHeading1>
              <UtrechtIcon>
                <CircleCheck />
              </UtrechtIcon>{' '}
              Vraag met succes verstuurd
            </UtrechtHeading1>
            <UtrechtParagraph>Kenmerk: {data.code}</UtrechtParagraph>
          </UtrechtAlert>
          <UtrechtHeading2>Wat gaat er nu gebeuren?</UtrechtHeading2>
          <UnorderedList>
            <UnorderedListItem>
              U ontvangt een bevestigingsmail op{' '}
              <Strong>
                <UtrechtUrlData>{data.email}</UtrechtUrlData>
              </Strong>
            </UnorderedListItem>
            <UnorderedListItem>De afdeling Vraagbaak gaat met uw vraag aan de slag.</UnorderedListItem>
          </UnorderedList>
          <UtrechtButtonGroup direction="column">
            <UtrechtLink href="#">
              <UtrechtIcon>
                <Printer />
              </UtrechtIcon>{' '}
              Print uw vraag
            </UtrechtLink>
            <UtrechtLink href="/" download="vraag.pdf">
              <UtrechtIcon>
                <FileText />
              </UtrechtIcon>{' '}
              Download uw vraag als PDF
            </UtrechtLink>
            <UtrechtLink href="#">Terug naar voorbeeld.nl</UtrechtLink>
          </UtrechtButtonGroup>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooterWmebv />
    </UtrechtPage>
  );
}
