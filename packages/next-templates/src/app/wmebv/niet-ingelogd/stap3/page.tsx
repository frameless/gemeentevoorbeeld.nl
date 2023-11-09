'use client';

import {
  UtrechtArticle,
  UtrechtButtonLink,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtHeading3,
  UtrechtLink,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
} from '@utrecht/web-component-library-react';
import { ExampleHeaderWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import {
  UnorderedList,
  UnorderedListItem,
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
} from '@utrecht/component-library-react';
import Pencil from '../../../styling/assets/pencil-icon.svg';
import ArrowLeft from '../../../styling/assets/arrow-left-icon.svg';
import '@/app/styling/css/wmebv.css';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderWmebv />
      <ExampleNavigation />
      <UtrechtPageContent>
        <UtrechtArticle>
          <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
          <UtrechtLink href="./stap2">
            <ArrowLeft />
            Vorige stap
          </UtrechtLink>
          <UtrechtParagraph lead className="voorbeeld-paragraph-spacing-stapx">
            Stap 3 van 4
          </UtrechtParagraph>
          <UtrechtHeading2>Controleer uw gegevens</UtrechtHeading2>
          <UtrechtHeading3 className="voorbeeld-heading3-spacing">Uw vraag</UtrechtHeading3>
          <DataList>
            <UtrechtLink href="./stap1">
              <Pencil />
              Aanpassen
            </UtrechtLink>
            <DataListItem>
              <DataListKey className="voorbeeld-heading3-spacing">Uw vraag</DataListKey>
              <DataListValue>
                <UtrechtParagraph className="voorbeeld-title-paragraph">Beste meneer of mevrouw, </UtrechtParagraph>
                <UtrechtParagraph className="voorbeeld-title-paragraph">
                  Ik heb 8 weken geleden een aanvraag voor bijstandsuitkering gedaan maar ik heb nog steeds niets
                  gehoord. Volgens mij had u allang op mijn aanvraag moeten beslissen.
                </UtrechtParagraph>
                <UtrechtParagraph className="voorbeeld-title-paragraph">
                  Met vriendelijke groet, Jeroen van Drouwen
                </UtrechtParagraph>
              </DataListValue>
            </DataListItem>
          </DataList>
          <UtrechtHeading3 className="voorbeeld-heading3-spacing">Uw gegevens</UtrechtHeading3>
          <UtrechtLink href="./stap2">
            <Pencil />
            Aanpassen
          </UtrechtLink>
          <DataList className="voorbeeld-datalist-style">
            <DataListKey className="utrecht-data-list-label">Naam</DataListKey>
            <DataListValue className="utrecht-data-list-value">Jeroen van Drouwen</DataListValue>
            <div className="voorbeeld-dat-list-label-spacer"></div>
          </DataList>
          <DataList>
            <DataListKey className="utrecht-data-list-label">Straat</DataListKey>
            <DataListValue className="utrecht-data-list-value">Laan der voorbeelden</DataListValue>
            <div className="voorbeeld-dat-list-label-spacer"></div>
          </DataList>
          <DataList>
            <DataListKey className="utrecht-data-list-label">Huisnummer</DataListKey>
            <DataListValue className="utrecht-data-list-value">99</DataListValue>
            <div className="voorbeeld-dat-list-label-spacer"></div>
          </DataList>
          <DataList>
            <DataListKey className="utrecht-data-list-label">Postcode</DataListKey>
            <DataListValue className="utrecht-data-list-value">1024VP</DataListValue>
            <div className="voorbeeld-dat-list-label-spacer"></div>
          </DataList>
          <DataList>
            <DataListKey className="utrecht-data-list-label">Woonplaats</DataListKey>
            <DataListValue className="utrecht-data-list-value">Voorbeeld</DataListValue>
            <div className="voorbeeld-dat-list-label-spacer"></div>
          </DataList>
          <DataList>
            <DataListKey className="utrecht-data-list-label">E-mailadres</DataListKey>
            <DataListValue className="utrecht-data-list-value">j.vandrouwen@gmail.com</DataListValue>
            <div className="voorbeeld-dat-list-label-spacer"></div>
          </DataList>
          <DataList>
            <DataListKey className="utrecht-data-list-label">Telefoonnummer</DataListKey>
            <DataListValue className="utrecht-data-list-value">0650618346</DataListValue>
            <div className="voorbeeld-dat-list-label-spacer-1"></div>
          </DataList>
          <UtrechtButtonLink href="./stap4" appearance="primary-action-button">
            Versturen
          </UtrechtButtonLink>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}