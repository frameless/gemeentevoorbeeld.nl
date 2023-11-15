'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonGroup,
  UtrechtDataList,
  UtrechtDataListItem,
  UtrechtDataListKey,
  UtrechtDataListValue,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtHeading3,
  UtrechtHeadingGroup,
  UtrechtIcon,
  UtrechtLink,
  UtrechtMultilineData,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtPreHeading,
} from '@utrecht/web-component-library-react';
import { Link, LinkButton, PreserveData, URLData } from '@utrecht/component-library-react';
import { IconArrowLeft, IconPencil } from '@tabler/icons-react';
import '@/app/styling/css/wmebv.css';
import { ContactFormSessionData, FORM_SESSION_KEY, useSessionState } from '../../SessionData';
import { ExampleFooterWmebv } from '@/components/wmebv/Footer/ExampleFooterWmebv';
import { ExampleHeaderFunnelWmebv } from '@/components/wmebv/Header/ExampleHeaderFunnelWmebv';
import { useId } from 'react';

export default function home() {
  const userdata = {
    username: 'J. van Drouwen',
    userURL: '/mijn-omgeving/',
  };
  const [storedData, _, __, removeStoredData] = useSessionState<ContactFormSessionData>(FORM_SESSION_KEY, {});
  const dataHeading1Id = useId();
  const dataHeading2Id = useId();
  const buttonLabel1Id = useId();
  const buttonLabel2Id = useId();

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv userURL={userdata.userURL} username={userdata.username} />
      <UtrechtPageContent>
        <UtrechtArticle id="main">
          <form method="post" action="/api/wmebv/signed-in/step3">
            <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
            <UtrechtButtonGroup>
              <LinkButton type="submit" inline={true} className="voorbeeld-button-link" formAction="./stap2/">
                <UtrechtIcon>
                  <IconArrowLeft />
                </UtrechtIcon>
                Vorige Stap
              </LinkButton>
            </UtrechtButtonGroup>
            <UtrechtHeadingGroup>
              <UtrechtHeading2>Controleer uw gegevens</UtrechtHeading2>
              <UtrechtPreHeading>Stap 3 van 4</UtrechtPreHeading>
            </UtrechtHeadingGroup>
            <UtrechtHeading3 id={dataHeading1Id}>Uw vraag</UtrechtHeading3>
            <UtrechtButtonGroup>
              <Link href="./stap1" aria-labelledby={[buttonLabel1Id, dataHeading1Id].join(' ')}>
                <IconPencil />
                <span id={buttonLabel1Id}>Aanpassen</span>
              </Link>
            </UtrechtButtonGroup>
            <UtrechtDataList>
              <UtrechtDataListItem>
                <UtrechtDataListKey>Uw vraag</UtrechtDataListKey>
                <UtrechtDataListValue>
                  <UtrechtMultilineData>{storedData?.message}</UtrechtMultilineData>
                </UtrechtDataListValue>
              </UtrechtDataListItem>
            </UtrechtDataList>
            <UtrechtHeading3 id={dataHeading2Id}>Uw gegevens</UtrechtHeading3>
            <UtrechtButtonGroup>
              <Link href="./stap2" aria-labelledby={[buttonLabel2Id, dataHeading2Id].join(' ')}>
                <IconPencil />
                <span id={buttonLabel2Id}>Aanpassen</span>
              </Link>
            </UtrechtButtonGroup>
            <UtrechtDataList className="voorbeeld-datalist-style">
              <UtrechtDataListItem>
                <UtrechtDataListKey>Naam</UtrechtDataListKey>
                <UtrechtDataListValue>
                  <PreserveData>{storedData?.name}</PreserveData>
                </UtrechtDataListValue>
              </UtrechtDataListItem>
              <UtrechtDataListItem>
                <UtrechtDataListKey>Straat</UtrechtDataListKey>
                <UtrechtDataListValue>
                  <PreserveData>{storedData?.street}</PreserveData>
                </UtrechtDataListValue>
              </UtrechtDataListItem>
              <UtrechtDataListItem>
                <UtrechtDataListKey>Huisnummer</UtrechtDataListKey>
                <UtrechtDataListValue>
                  <PreserveData>
                    {storedData?.houseNumber}
                    {storedData?.houseNumberSuffix}
                  </PreserveData>
                </UtrechtDataListValue>
              </UtrechtDataListItem>
              <UtrechtDataListItem>
                <UtrechtDataListKey>Postcode</UtrechtDataListKey>
                <UtrechtDataListValue>
                  <PreserveData>{storedData?.postalCode}</PreserveData>
                </UtrechtDataListValue>
              </UtrechtDataListItem>
              <UtrechtDataListItem>
                <UtrechtDataListKey>Woonplaats</UtrechtDataListKey>
                <UtrechtDataListValue>
                  <PreserveData>{storedData?.homeTown}</PreserveData>
                </UtrechtDataListValue>
              </UtrechtDataListItem>
              <UtrechtDataListItem>
                <UtrechtDataListKey>E-mailadres</UtrechtDataListKey>
                <UtrechtDataListValue>
                  <URLData>{storedData?.email}</URLData>
                </UtrechtDataListValue>
              </UtrechtDataListItem>
              <UtrechtDataListItem>
                <UtrechtDataListKey>Telefoonnummer</UtrechtDataListKey>
                <UtrechtDataListValue>
                  <PreserveData>{storedData?.phone}</PreserveData>
                </UtrechtDataListValue>
              </UtrechtDataListItem>
            </UtrechtDataList>
            <UtrechtButtonGroup direction="column">
              <UtrechtButton type="submit" className="voorbeeld-button-spacing" appearance="primary-action-button">
                Volgende stap
              </UtrechtButton>
              <UtrechtLink className="voorbeeld-button-link" href="/wmebv">
                Opslaan en later verder
              </UtrechtLink>
              <LinkButton
                inline
                className="voorbeeld-button-link"
                onClick={() => {
                  removeStoredData();
                  location.assign('/wmebv');
                }}
              >
                Stoppen met formulier
              </LinkButton>
            </UtrechtButtonGroup>
          </form>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooterWmebv />
    </UtrechtPage>
  );
}
