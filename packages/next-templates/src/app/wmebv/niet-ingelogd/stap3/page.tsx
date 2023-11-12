'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonGroup,
  UtrechtButtonLink,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtHeading3,
  UtrechtLink,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
} from '@utrecht/web-component-library-react';
import {
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
  LinkButton,
  PreHeading,
  HeadingGroup,
} from '@utrecht/component-library-react';
import { ExampleHeaderWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import Pencil from '../../../styling/assets/pencil-icon.svg';
import ArrowLeft from '../../../styling/assets/arrow-left-icon.svg';
import '@/app/styling/css/wmebv.css';

export default function home() {
  const storedFormData = sessionStorage.getItem('wmebv');
  const formValues = storedFormData && JSON.parse(storedFormData);

  const saveFormData = () => sessionStorage.setItem('wmebv', JSON.stringify(getValues()));
  const deleteFormData = () => sessionStorage.removeItem('wmebv');

  return (
    <UtrechtPage>
      <ExampleHeaderWmebv />
      <ExampleNavigation />
      <UtrechtPageContent>
        <UtrechtArticle>
          <form method="post" action="/api/wmebv/anonymous/step3">
            <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
            <UtrechtButtonGroup>
              <UtrechtLink className="voorbeeld-button-link" href="./stap2/">
                <ArrowLeft /> Vorige Stap
              </UtrechtLink>
            </UtrechtButtonGroup>
            <HeadingGroup>
              <PreHeading>Stap 3 van 4</PreHeading>
              <UtrechtHeading2>Controleer uw gegevens</UtrechtHeading2>
              <UtrechtHeading3>Uw vraag</UtrechtHeading3>
            </HeadingGroup>
            <UtrechtHeading3 className="voorbeeld-heading3-spacing">Uw vraag</UtrechtHeading3>
            <DataList>
              <UtrechtButtonGroup>
                <UtrechtLink href="./stap1">
                  <Pencil />
                  Aanpassen
                </UtrechtLink>
              </UtrechtButtonGroup>
              <DataListItem>
                <DataListKey className="voorbeeld-heading3-spacing">Uw vraag</DataListKey>
                <DataListValue>{formValues?.['uw-vraag']}</DataListValue>
              </DataListItem>
            </DataList>
            <UtrechtHeading3 className="voorbeeld-heading3-spacing">Uw gegevens</UtrechtHeading3>
            <UtrechtButtonGroup>
              <UtrechtLink href="./stap2">
                <Pencil />
                Aanpassen
              </UtrechtLink>
            </UtrechtButtonGroup>
            <DataList className="voorbeeld-datalist-style">
              <DataListKey className="utrecht-data-list-label">Naam</DataListKey>
              <DataListValue className="utrecht-data-list-value">{formValues?.naam}</DataListValue>
              <div className="voorbeeld-dat-list-label-spacer"></div>
            </DataList>
            <DataList>
              <DataListKey className="utrecht-data-list-label">Straat</DataListKey>
              <DataListValue className="utrecht-data-list-value">{formValues?.straat}</DataListValue>
              <div className="voorbeeld-dat-list-label-spacer"></div>
            </DataList>
            <DataList>
              <DataListKey className="utrecht-data-list-label">Huisnummer</DataListKey>
              <DataListValue className="utrecht-data-list-value">{formValues?.huisnummer}</DataListValue>
              <div className="voorbeeld-dat-list-label-spacer"></div>
            </DataList>
            <DataList>
              <DataListKey className="utrecht-data-list-label">Toevoeging</DataListKey>
              <DataListValue className="utrecht-data-list-value">{formValues?.toevoeging}</DataListValue>
              <div className="voorbeeld-dat-list-label-spacer"></div>
            </DataList>
            <DataList>
              <DataListKey className="utrecht-data-list-label">Postcode</DataListKey>
              <DataListValue className="utrecht-data-list-value">{formValues?.postcode}</DataListValue>
              <div className="voorbeeld-dat-list-label-spacer"></div>
            </DataList>
            <DataList>
              <DataListKey className="utrecht-data-list-label">Woonplaats</DataListKey>
              <DataListValue className="utrecht-data-list-value">{formValues?.woonplaats}</DataListValue>
              <div className="voorbeeld-dat-list-label-spacer"></div>
            </DataList>
            <DataList>
              <DataListKey className="utrecht-data-list-label">E-mailadres</DataListKey>
              <DataListValue className="utrecht-data-list-value">{formValues?.email}</DataListValue>
              <div className="voorbeeld-dat-list-label-spacer"></div>
            </DataList>
            <DataList>
              <DataListKey className="utrecht-data-list-label">Telefoonnummer</DataListKey>
              <DataListValue className="utrecht-data-list-value">{formValues?.tel}</DataListValue>
              <div className="voorbeeld-dat-list-label-spacer-1"></div>
            </DataList>
            <UtrechtButtonGroup className="utrecht-button-group--example-column">
              <UtrechtButton type="submit" className="voorbeeld-button-spacing" appearance="primary-action-button">
                Volgende stap
              </UtrechtButton>
              <UtrechtButton
                type="submit"
                appearance="subtle-button"
                className="voorbeeld-button-link"
                formAction="/api/wmebv/save"
                formMethod="POST"
                onSubmit={saveFormData}
              >
                Opslaan en later verder
              </UtrechtButton>
              <UtrechtButton
                type="submit"
                appearance="subtle-button"
                className="voorbeeld-button-link"
                onClick={deleteFormData}
                formAction="/wmebv"
              >
                Sluit formulier
              </UtrechtButton>
            </UtrechtButtonGroup>
          </form>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}
