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
import { LinkButton, PreserveData, URLData } from '@utrecht/component-library-react';
import { ExampleHeaderFunnelWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderFunnelWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import ArrowLeft from '@/app/styling/assets/arrow-left-icon.svg';
import Pencil from '../../../styling/assets/pencil-icon.svg';
import '@/app/styling/css/wmebv.css';

export default function home() {
  const storedData = sessionStorage.getItem('wmebv');
  const data = storedData && JSON.parse(storedData);

  const deleteFormData = () => sessionStorage.removeItem('wmebv');

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv />
      <UtrechtPageContent>
        <UtrechtArticle>
          <form method="post" action="/api/wmebv/signed-in/step3">
            <UtrechtButtonGroup>
              <LinkButton type="submit" inline={true} className="voorbeeld-button-link" formAction="./stap2/">
                <UtrechtIcon>
                  <ArrowLeft />
                </UtrechtIcon>{' '}
                Vorige Stap
              </LinkButton>
            </UtrechtButtonGroup>
            <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
            <UtrechtHeadingGroup>
              <UtrechtHeading2>Controleer uw gegevens</UtrechtHeading2>
              <UtrechtPreHeading>Stap 3 van 4</UtrechtPreHeading>
            </UtrechtHeadingGroup>
            <UtrechtHeading3>Uw vraag</UtrechtHeading3>
            <UtrechtButtonGroup>
              <UtrechtLink href="./stap1">
                <Pencil />
                Aanpassen
              </UtrechtLink>
            </UtrechtButtonGroup>
            <UtrechtDataList>
              <UtrechtDataListItem>
                <UtrechtDataListKey>Uw vraag</UtrechtDataListKey>
                <UtrechtDataListValue>
                  <UtrechtMultilineData>{data.message}</UtrechtMultilineData>
                </UtrechtDataListValue>
              </UtrechtDataListItem>
            </UtrechtDataList>
            <UtrechtHeading3>Uw gegevens</UtrechtHeading3>
            <UtrechtButtonGroup>
              <UtrechtLink href="./stap2">
                <Pencil />
                Aanpassen
              </UtrechtLink>
            </UtrechtButtonGroup>
            <UtrechtDataList className="voorbeeld-datalist-style">
              <UtrechtDataListItem>
                <UtrechtDataListKey>Naam</UtrechtDataListKey>
                <UtrechtDataListValue>
                  <PreserveData>{data.name}</PreserveData>
                </UtrechtDataListValue>
              </UtrechtDataListItem>
              <UtrechtDataListItem>
                <UtrechtDataListKey>Straat</UtrechtDataListKey>
                <UtrechtDataListValue>
                  <PreserveData>{data.street}</PreserveData>
                </UtrechtDataListValue>
              </UtrechtDataListItem>
              <UtrechtDataListItem>
                <UtrechtDataListKey>Huisnummer</UtrechtDataListKey>
                <UtrechtDataListValue>
                  <PreserveData>
                    {data.houseNumber}
                    {data.houseNumberSuffix}
                  </PreserveData>
                </UtrechtDataListValue>
              </UtrechtDataListItem>
              <UtrechtDataListItem>
                <UtrechtDataListKey>Postcode</UtrechtDataListKey>
                <UtrechtDataListValue>
                  <PreserveData>{data.postalCode}</PreserveData>
                </UtrechtDataListValue>
              </UtrechtDataListItem>
              <UtrechtDataListItem>
                <UtrechtDataListKey>Woonplaats</UtrechtDataListKey>
                <UtrechtDataListValue>
                  <PreserveData>{data.city}</PreserveData>
                </UtrechtDataListValue>
              </UtrechtDataListItem>
              <UtrechtDataListItem>
                <UtrechtDataListKey>E-mailadres</UtrechtDataListKey>
                <UtrechtDataListValue>
                  <URLData>{data.email}</URLData>
                </UtrechtDataListValue>
              </UtrechtDataListItem>
              <UtrechtDataListItem>
                <UtrechtDataListKey>Telefoonnummer</UtrechtDataListKey>
                <UtrechtDataListValue>
                  <PreserveData>{data.tel}</PreserveData>
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
                Sluit formulier
              </LinkButton>
            </UtrechtButtonGroup>
          </form>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}
