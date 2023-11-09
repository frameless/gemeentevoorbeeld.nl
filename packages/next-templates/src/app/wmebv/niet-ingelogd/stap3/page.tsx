'use client';

import {
  UtrechtArticle,
  UtrechtButtonLink,
  UtrechtDataList,
  UtrechtDataListItem,
  UtrechtDataListKey,
  UtrechtDataListValue,
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
            {' '}
            <ArrowLeft />
            Vorige stap
          </UtrechtLink>
          <UtrechtParagraph lead>Stap 3 van 4</UtrechtParagraph>
          <UtrechtHeading2>Controleer uw gegevens</UtrechtHeading2>
          <UtrechtHeading3 className="voorbeeld-heading3-spacing">Uw vraag</UtrechtHeading3>
          <UtrechtDataList>
            <UtrechtLink href="./stap1">
              <Pencil />
              Aanpassen{' '}
            </UtrechtLink>
            <UtrechtDataListItem>
              <UtrechtDataListKey className="voorbeeld-heading3-spacing">Uw vraag</UtrechtDataListKey>
              <UtrechtDataListValue>
                <UtrechtParagraph className="voorbeeld-title-paragraph">Beste meneer of mevrouw, </UtrechtParagraph>
                <UtrechtParagraph className="voorbeeld-title-paragraph">
                  Ik heb 8 weken geleden een aanvraag voor bijstandsuitkering gedaan maar ik heb nog steeds niets
                  gehoord. Volgens mij had u allang op mijn aanvraag moeten beslissen.
                </UtrechtParagraph>
                <UtrechtParagraph className="voorbeeld-title-paragraph">
                  Met vriendelijke groet, Jeroen van Drouwen
                </UtrechtParagraph>
              </UtrechtDataListValue>
            </UtrechtDataListItem>
          </UtrechtDataList>
          <UtrechtHeading3 className="voorbeeld-heading3-spacing">Uw gegevens</UtrechtHeading3>
          <UtrechtLink href="./stap2">
            {' '}
            <Pencil />
            Aanpassen
          </UtrechtLink>
          <UtrechtDataList className="voorbeeld-datalist-style">
            <UtrechtDataListKey className="utrecht-data-list-label">Naam</UtrechtDataListKey>
            <UtrechtDataListValue className="utrecht-data-list-value">Jeroen van Drouwen</UtrechtDataListValue>
          </UtrechtDataList>
          <UtrechtDataList>
            <UtrechtDataListKey className="utrecht-data-list-label">Straat</UtrechtDataListKey>
            <UtrechtDataListValue>Laan der voorbeelden</UtrechtDataListValue>
          </UtrechtDataList>
          <UtrechtDataList>
            <UtrechtDataListKey className="utrecht-data-list-label">Huisnummer</UtrechtDataListKey>
            <UtrechtDataListValue>99</UtrechtDataListValue>
          </UtrechtDataList>
          <UtrechtDataList>
            <UtrechtDataListKey className="utrecht-data-list-label">Postcode</UtrechtDataListKey>
            <UtrechtDataListValue>1024VP</UtrechtDataListValue>
          </UtrechtDataList>
          <UtrechtDataList>
            <UtrechtDataListKey className="utrecht-data-list-label">Woonplaats</UtrechtDataListKey>
            <UtrechtDataListValue>Voorbeeld</UtrechtDataListValue>
          </UtrechtDataList>
          <UtrechtDataList>
            <UtrechtDataListKey className="utrecht-data-list-label">E-mailadres</UtrechtDataListKey>
            <UtrechtDataListValue>j.vandrouwen@gmail.com</UtrechtDataListValue>
          </UtrechtDataList>
          <UtrechtDataList>
            <UtrechtDataListKey className="utrecht-data-list-label">Telefoonnummer</UtrechtDataListKey>
            <UtrechtDataListValue>0650618346</UtrechtDataListValue>
          </UtrechtDataList>
          <UtrechtButtonLink href="./stap4" appearance="primary-action-button">
            Versturen
          </UtrechtButtonLink>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}
