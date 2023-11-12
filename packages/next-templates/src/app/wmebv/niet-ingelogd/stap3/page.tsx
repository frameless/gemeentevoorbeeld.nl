'use client';

import {
  UtrechtArticle,
  UtrechtButtonGroup,
  UtrechtButtonLink,
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
import Pencil from '../../../styling/assets/pencil-icon.svg';
import ArrowLeft from '../../../styling/assets/arrow-left-icon.svg';
import '@/app/styling/css/wmebv.css';
import { ExampleHeaderFunnelWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderFunnelWmebv';

export default function home() {
  const data = {
    message: `Beste meneer of mevrouw,

Ik heb 8 weken geleden een aanvraag voor bijstandsuitkering gedaan maar ik heb nog steeds niets
gehoord. Volgens mij had u allang op mijn aanvraag moeten beslissen.

Met vriendelijke groet, Jeroen van Drouwen`,
    name: 'Jeroen van Drouwen',
    street: 'Laan der Voorbeelden',
    houseNumber: '99',
    houseNumberSuffix: '',
    postalCode: '1024 VP',
    city: 'Voorbeeld',
    email: 'j.vandrouwen@gmail.com',
    tel: '0650618346',
  };

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv />
      <UtrechtPageContent>
        <UtrechtArticle>
          <form action="./stap4" method="post">
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
              <UtrechtPreHeading>Stap 3 van 4</UtrechtPreHeading>
              <UtrechtHeading2>Controleer uw gegevens</UtrechtHeading2>
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
                  <UtrechtUrlData>{data.email}</UtrechtUrlData>
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
              <UtrechtButtonLink className="voorbeeld-button-spacing" href="./stap4" appearance="primary-action-button">
                Versturen
              </UtrechtButtonLink>
              <LinkButton inline className="voorbeeld-button-link" formAction="./save">
                Opslaan en later verder
              </LinkButton>
              <LinkButton inline className="voorbeeld-button-link" formAction="./stop">
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
