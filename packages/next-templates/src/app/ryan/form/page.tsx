'use client';

import {
  Page,
  Button,
  Heading1,
  Paragraph,
  Textbox,
  Textarea,
  FormLabel,
  FieldsetLegend,
  Fieldset,
  RadioButton,
  FormField,
  Document,
} from '@utrecht/component-library-react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <Document>
      <Page>
        <Heading1>
          Meldpunt om een roze eenhoornparkeerzone op straat te creëren voor inwoners met vliegende huisdieren
        </Heading1>
        <Paragraph>
          Welkom bij het Absurde Meldpunt van de Gemeente Utrecht Heeft u onlangs gemerkt dat er een schrijnend tekort
          is aan parkeerzones voor roze eenhoorns? Zijn uw vliegende huisdieren in de war over waar ze moeten landen?
          Dan bent u op de juiste plek! Melding: Ontbreken van een Roze Eenhoornparkeerzone
        </Paragraph>
        <br />
        <FormField>
          <Paragraph>
            <FormLabel htmlFor="location">Locatie:</FormLabel>
          </Paragraph>
          <Textbox id="location" placeholder="Vul hier de straatnaam, postcode of specifieke locatie in"></Textbox>
        </FormField>
        <FormField>
          <Paragraph>
            <FormLabel htmlFor="description">Beschrijving:</FormLabel>
          </Paragraph>
          <Textarea id="description" placeholder="Vul hier de straatnaam, postcode of specifieke locatie in"></Textarea>
        </FormField>
        <FormField>
          <Paragraph>
            <FormLabel htmlFor="enclosed-aerial-view">Bijgevoegde luchtfoto's:</FormLabel>
          </Paragraph>
          <Textbox
            id="enclosed-aerial-view"
            placeholder="Vul hier de straatnaam, postcode of specifieke locatie in"
          ></Textbox>
        </FormField>
        <Fieldset id="df861ef1-844a-42df-8365-b54f59474fb8" role="radiogroup">
          <FieldsetLegend>Hoe snel denkt u dat de eenhoorns en vliegende huisdieren hulp nodig hebben?</FieldsetLegend>
          <FormField type="radio">
            <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
              <FormLabel htmlFor="right-now" type="radio">
                <RadioButton
                  className="utrecht-form-field__input"
                  id="right-now"
                  name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                  value="1"
                />
                Nu meteen
              </FormLabel>
            </Paragraph>
          </FormField>
          <FormField type="radio">
            <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
              <FormLabel htmlFor="shortly" type="radio">
                <RadioButton
                  className="utrecht-form-field__input"
                  id="shortly"
                  name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                  value="2"
                />
                Binnenkort
              </FormLabel>
            </Paragraph>
          </FormField>
          <FormField type="radio">
            <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
              <FormLabel htmlFor="when-pigs-can-fly" type="radio">
                <RadioButton
                  className="utrecht-form-field__input"
                  id="when-pigs-can-fly"
                  name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                  value="3"
                />
                Wanneer varkens kunnen vliegen
              </FormLabel>
            </Paragraph>
          </FormField>
        </Fieldset>
        <br />
        <FormLabel>Contactgegevens:</FormLabel>
        <Paragraph>
          Laat uw naam en e-mailadres achter, zodat we u op de hoogte kunnen houden van eventuele magische
          ontwikkelingen.
        </Paragraph>
        <br />
        <FormLabel>Volledige naam:</FormLabel>
        <br />
        <Textbox placeholder="Vul hier uw volledige naam in"></Textbox>
        <br />
        <br />
        <FormLabel>E-mailadres:</FormLabel>
        <br />
        <Textbox placeholder="Vul hier uw e-mailadres in"></Textbox>
        <br />
        <br />
        <Button appearance="primary-action-button">Dien uw melding in</Button>
        <Paragraph>
          Dank u voor het deelnemen aan ons absurde meldpunt. Hoewel we geen garanties kunnen geven over de snelheid
          waarmee roze eenhoornparkeerzones worden gerealiseerd, waarderen we uw levendige verbeelding en deelname aan
          dit absurde avontuur.
        </Paragraph>
      </Page>
    </Document>
  );
}
