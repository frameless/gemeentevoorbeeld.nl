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
  UtrechtUrlData,
} from '@utrecht/web-component-library-react';
import { LinkButton, PreserveData } from '@utrecht/component-library-react';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { IconArrowLeft, IconPencil } from '@tabler/icons-react';
import '@/app/styling/css/wmebv.css';
import { ExampleHeaderFunnelWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderFunnelWmebv';
import { useEffect, useState } from 'react';

export default function home() {
  const [storedData, setStoredData] = useState<any>();

  useEffect(() => {
    const stored = sessionStorage.getItem('wmebv');

    setStoredData(stored ? JSON.parse(stored) : {});
  }, []);

  const deleteFormData = () => sessionStorage.removeItem('wmebv');

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv />
      <UtrechtPageContent>
        <UtrechtArticle>
          <form method="post" action="/api/wmebv/anonymous/step3">
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
              <UtrechtPreHeading>Stap 3 van 4</UtrechtPreHeading>
              <UtrechtHeading2>Controleer uw gegevens</UtrechtHeading2>
            </UtrechtHeadingGroup>
            <UtrechtHeading3>Uw vraag</UtrechtHeading3>
            <UtrechtButtonGroup>
              <UtrechtLink href="./stap1">
                <IconPencil />
                Aanpassen
              </UtrechtLink>
            </UtrechtButtonGroup>
            <UtrechtDataList>
              <UtrechtDataListItem>
                <UtrechtDataListKey>Uw vraag</UtrechtDataListKey>
                <UtrechtDataListValue>
                  <UtrechtMultilineData>{storedData?.message}</UtrechtMultilineData>
                </UtrechtDataListValue>
              </UtrechtDataListItem>
            </UtrechtDataList>
            <UtrechtHeading3>Uw gegevens</UtrechtHeading3>
            <UtrechtButtonGroup>
              <UtrechtLink href="./stap2">
                <IconPencil />
                Aanpassen
              </UtrechtLink>
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
                  <PreserveData>{storedData?.city}</PreserveData>
                </UtrechtDataListValue>
              </UtrechtDataListItem>
              <UtrechtDataListItem>
                <UtrechtDataListKey>E-mailadres</UtrechtDataListKey>
                <UtrechtDataListValue>
                  <UtrechtUrlData>{storedData?.email}</UtrechtUrlData>
                </UtrechtDataListValue>
              </UtrechtDataListItem>
              <UtrechtDataListItem>
                <UtrechtDataListKey>Telefoonnummer</UtrechtDataListKey>
                <UtrechtDataListValue>
                  <PreserveData>{storedData?.tel}</PreserveData>
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
                  deleteFormData();
                  location.assign('/wmebv');
                }}
              >
                Stoppen met formulier
              </LinkButton>
            </UtrechtButtonGroup>
          </form>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}
