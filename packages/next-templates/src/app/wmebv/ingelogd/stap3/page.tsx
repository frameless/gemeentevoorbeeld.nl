'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonGroup,
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
import {
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
  Link,
  LinkButton,
  PreserveData,
  URLData,
} from '@utrecht/component-library-react';
import { IconArrowLeft, IconPencil } from '@tabler/icons-react';
import '@/app/styling/css/wmebv.css';
import { ContactFormSessionData, FORM_SESSION_KEY, useSessionState } from '../../SessionData';
import { ExampleFooterWmebv } from '@/components/wmebv/Footer/ExampleFooterWmebv';
import { ExampleHeaderFunnelWmebv } from '@/components/wmebv/Header/ExampleHeaderFunnelWmebv';
import { useEffect, useId } from 'react';
import { useRouter } from 'next/navigation';

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

  const router = useRouter();

  const onClickPrev = () => {
    router.push('./stap2');
  };

  const stepProgressLabel = 'Stap 3 van 4';
  const stepLabel = 'Controleer uw gegevens';
  const websiteLabel = 'gemeente Voorbeeld';

  useEffect(() => {
    if (typeof document?.title === 'string') {
      document.title = `${stepProgressLabel}: ${stepLabel} - ${websiteLabel}`;
    }
  }, []);

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv userURL={userdata.userURL} username={userdata.username} />
      <UtrechtPageContent>
        <UtrechtArticle id="main">
          <form method="post" action="/api/wmebv/signed-in/step3">
            <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
            <UtrechtButtonGroup>
              <LinkButton inline={true} className="voorbeeld-button-link" formAction="./stap2/" onClick={onClickPrev}>
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
            <DataList>
              <DataListItem>
                <DataListKey>Uw vraag</DataListKey>
                <DataListValue>
                  <UtrechtMultilineData>{storedData?.message}</UtrechtMultilineData>
                </DataListValue>
              </DataListItem>
            </DataList>
            <UtrechtHeading3 id={dataHeading2Id}>Uw gegevens</UtrechtHeading3>
            <UtrechtButtonGroup>
              <Link href="./stap2" aria-labelledby={[buttonLabel2Id, dataHeading2Id].join(' ')}>
                <IconPencil />
                <span id={buttonLabel2Id}>Aanpassen</span>
              </Link>
            </UtrechtButtonGroup>
            <DataList className="voorbeeld-datalist-style">
              <DataListItem>
                <DataListKey>Naam</DataListKey>
                <DataListValue>
                  <PreserveData>{storedData?.name}</PreserveData>
                </DataListValue>
              </DataListItem>
              <DataListItem>
                <DataListKey>Straat</DataListKey>
                <DataListValue>
                  <PreserveData>{storedData?.street}</PreserveData>
                </DataListValue>
              </DataListItem>
              <DataListItem>
                <DataListKey>Huisnummer</DataListKey>
                <DataListValue>
                  <PreserveData>
                    {storedData?.houseNumber}
                    {storedData?.houseNumberSuffix}
                  </PreserveData>
                </DataListValue>
              </DataListItem>
              <DataListItem>
                <DataListKey>Postcode</DataListKey>
                <DataListValue>
                  <PreserveData>{storedData?.postalCode}</PreserveData>
                </DataListValue>
              </DataListItem>
              <DataListItem>
                <DataListKey>Woonplaats</DataListKey>
                <DataListValue>
                  <PreserveData>{storedData?.homeTown}</PreserveData>
                </DataListValue>
              </DataListItem>
              <DataListItem>
                <DataListKey>E-mailadres</DataListKey>
                <DataListValue>
                  <URLData>{storedData?.email}</URLData>
                </DataListValue>
              </DataListItem>
              <DataListItem>
                <DataListKey>Telefoonnummer</DataListKey>
                <DataListValue>
                  <PreserveData>{storedData?.phone}</PreserveData>
                </DataListValue>
              </DataListItem>
            </DataList>
            <UtrechtButtonGroup direction="column">
              <UtrechtButton type="submit" className="voorbeeld-button-spacing" appearance="primary-action-button">
                Versturen
              </UtrechtButton>
              <LinkButton
                inline
                className="voorbeeld-button-link"
                onClick={() => {
                  location.assign('/wmebv');
                }}
              >
                Opslaan en later verder
              </LinkButton>
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
