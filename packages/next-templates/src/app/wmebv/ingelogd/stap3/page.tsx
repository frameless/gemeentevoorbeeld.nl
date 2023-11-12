'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonGroup,
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
} from '@utrecht/web-component-library-react';
import { LinkButton, PreHeading, HeadingGroup } from '@utrecht/component-library-react';
import { ExampleHeaderFunnelWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderFunnelWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import ArrowLeft from '@/app/styling/assets/arrow-left-icon.svg';
import Pencil from '../../../styling/assets/pencil-icon.svg';
import '@/app/styling/css/wmebv.css';

export default function home() {
  const storedFormData = sessionStorage.getItem('wmebv');
  const formState = storedFormData && JSON.parse(storedFormData);
  const deleteFormData = () => sessionStorage.removeItem('wmebv');

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv />
      <UtrechtPageContent>
        <UtrechtArticle>
          <form method="post" action="/api/wmebv/signed-in/step3">
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
            <UtrechtDataList>
              <UtrechtLink href="./stap1">
                <Pencil />
                Aanpassen
              </UtrechtLink>
              <UtrechtDataListItem>
                <UtrechtDataListKey>Uw vraag</UtrechtDataListKey>
                <UtrechtDataListValue>{formState?.['uw-vraag']}</UtrechtDataListValue>
              </UtrechtDataListItem>
            </UtrechtDataList>
            <UtrechtHeading3>Uw gegevens</UtrechtHeading3>
            <UtrechtLink href="./stap2">
              <Pencil />
              Aanpassen
            </UtrechtLink>
            <UtrechtDataList className="voorbeeld-datalist-style">
              <UtrechtDataListKey>Naam</UtrechtDataListKey>
              <UtrechtDataListValue>{formState?.naam}</UtrechtDataListValue>
            </UtrechtDataList>
            <UtrechtDataList>
              <UtrechtDataListKey>Straat</UtrechtDataListKey>
              <UtrechtDataListValue>{formState?.straat}</UtrechtDataListValue>
            </UtrechtDataList>
            <UtrechtDataList>
              <UtrechtDataListKey>Huisnummer</UtrechtDataListKey>
              <UtrechtDataListValue>{formState?.huisnummer}</UtrechtDataListValue>
            </UtrechtDataList>
            <UtrechtDataList>
              <UtrechtDataListKey>Toevoeging</UtrechtDataListKey>
              <UtrechtDataListValue>{formState?.toevoeging}</UtrechtDataListValue>
            </UtrechtDataList>
            <UtrechtDataList>
              <UtrechtDataListKey>Postcode</UtrechtDataListKey>
              <UtrechtDataListValue>{formState?.postcode}</UtrechtDataListValue>
            </UtrechtDataList>
            <UtrechtDataList>
              <UtrechtDataListKey>Woonplaats</UtrechtDataListKey>
              <UtrechtDataListValue>{formState?.woonplaats}</UtrechtDataListValue>
            </UtrechtDataList>
            <UtrechtDataList>
              <UtrechtDataListKey>E-mailadres</UtrechtDataListKey>
              <UtrechtDataListValue>{formState?.email}</UtrechtDataListValue>
            </UtrechtDataList>
            <UtrechtDataList>
              <UtrechtDataListKey>Telefoonnummer</UtrechtDataListKey>
              <UtrechtDataListValue>{formState?.tel}</UtrechtDataListValue>
            </UtrechtDataList>
            <UtrechtButtonGroup className="utrecht-button-group--example-column">
              <UtrechtButton type="submit" className="voorbeeld-button-spacing" appearance="primary-action-button">
                Versturen
              </UtrechtButton>
              <UtrechtButton
                type="submit"
                appearance="subtle-button"
                className="voorbeeld-button-link"
                formAction="/api/wmebv/save"
                formMethod="POST"
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
