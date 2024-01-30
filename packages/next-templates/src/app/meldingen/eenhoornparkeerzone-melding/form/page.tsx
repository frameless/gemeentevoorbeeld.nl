'use client';

import {
  Article,
  Button,
  Document,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormLabel,
  FormFieldDescription,
  Heading1,
  Link,
  Page,
  PageContent,
  Paragraph,
  RadioButton,
  Textarea,
  Textbox,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import BacklinkIcon from '@/app/styling/assets/backlink-icon.svg';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import { ExampleFooterFocus } from '@/components/ExampleFooter/ExampleFooterFocus/ExampleFooterFocus';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { FormFieldTextarea } from '@/components/FormFieldTextarea';
import { FormFieldTextbox } from '@/components/FormFieldTextbox';
import { homeTownValidation, streetValidation, nameValidation, emailValidation } from '@/utils/validation';

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ [key: string]: string }>();

  const descriptionField = register('description', {
    required: 'Vul een omschrijving in',
  });
  const placeField = register('place', homeTownValidation);
  const streetField = register('street', streetValidation);
  const nameField = register('name', nameValidation);
  const emailField = register('email', emailValidation);

  return (
    <Document>
      <Page>
        <ExampleHeaderFunnel />
        <PageContent>
          <Article className="voorbeeld-article-space">
            <Link className="voorbeeld-link-back" href="./">
              <BacklinkIcon />
              <span className="voorbeeld-span--underlined">Terug</span>
            </Link>
            <Heading1 className="voorbeeld-heading-1">
              Meldpunt om een roze eenhoornparkeerzone op straat te creëren voor inwoners met vliegende huisdieren
            </Heading1>
            <Paragraph>
              Welkom bij het Absurde Meldpunt van de Gemeente Utrecht Heeft u onlangs gemerkt dat er een schrijnend
              tekort is aan parkeerzones voor roze eenhoorns? Zijn uw vliegende huisdieren in de war over waar ze moeten
              landen? Dan bent u op de juiste plek! Melding: Ontbreken van een Roze Eenhoornparkeerzone
            </Paragraph>
            <form
              method="POST"
              action="./eenhoornparkeerzone-melding/confirmed"
              onSubmit={handleSubmit((data) => {
                window.location.href = './confirmed';
              })}
            >
              <section className="voorbeeld-section--spacing">
                <FormFieldTextbox
                  id={`place-${placeField.name}`}
                  className="voorbeeld-textbox"
                  placeholder="Vul hier een plaats in"
                  invalid={!!errors[placeField.name]}
                  errorMessage={String(errors[placeField.name]?.message)}
                  aria-label="Plaats"
                  label="Plaats"
                  {...placeField}
                />
                <FormFieldTextbox
                  id={`street-${streetField.name}`}
                  className="voorbeeld-textbox"
                  placeholder="Vul hier een straat in"
                  invalid={!!errors[streetField.name]}
                  errorMessage={String(errors[streetField.name]?.message)}
                  aria-label="Straat"
                  label="Straat"
                  {...streetField}
                />
                <FormFieldTextarea
                  className="voorbeeld-textarea"
                  id={`field-${descriptionField.name}`}
                  aria-label="Beschrijving"
                  label="Beschrijving"
                  placeholder="Vul hier een beschrijving in"
                  invalid={!!errors[descriptionField.name]}
                  errorMessage={String(errors[descriptionField.name]?.message)}
                  {...descriptionField}
                />
                <FormField className="voorbeeld-form-field">
                  <FormLabel className="voorbeeld-form-label">Bijlage van luchtfoto(&apos;s):</FormLabel>
                  <FormFieldDescription>Niet verplicht.</FormFieldDescription>
                  <UnorderedList className="voorbeeld-unordered-list--spacing">
                    <UnorderedListItem>Bestanden moeten kleiner zijn dan 10 MB.</UnorderedListItem>
                    <UnorderedListItem>Toegestane bestandstypen: gif, jpg, jpeg, png.</UnorderedListItem>
                  </UnorderedList>
                  <div className="voorbeeld-container-bijlage--flex">
                    <Button appearance="secondary-action-button">Bestand kiezen</Button>
                    <Paragraph className="voorbeeld-paragraph-bijlage">Geen bestand gekozen</Paragraph>
                  </div>
                </FormField>
                <Fieldset id="df861ef1-844a-42df-8365-b54f59474fb8" role="radiogroup">
                  <FieldsetLegend>
                    Hoe snel denkt u dat de eenhoorns en vliegende huisdieren hulp nodig hebben?
                  </FieldsetLegend>
                  <FormField type="radio" className="radio-field">
                    <RadioButton
                      className="voorbeeld-radio-button"
                      id="right-now"
                      name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                      value="1"
                    />
                    <FormLabel className="voorbeeld-form-label" htmlFor="right-now" type="radio">
                      Nu meteen
                    </FormLabel>
                  </FormField>
                  <FormField type="radio" className="radio-field">
                    <RadioButton
                      className="voorbeeld-radio-button"
                      id="shortly"
                      name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                      value="2"
                    />
                    <FormLabel className="voorbeeld-form-label" htmlFor="shortly" type="radio">
                      Binnenkort
                    </FormLabel>
                  </FormField>
                  <FormField type="radio" className="radio-field">
                    <RadioButton
                      className="voorbeeld-radio-button"
                      id="when-pigs-can-fly"
                      name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                      value="3"
                    />
                    <FormLabel className="voorbeeld-form-label" htmlFor="when-pigs-can-fly" type="radio">
                      Wanneer varkens kunnen vliegen
                    </FormLabel>
                  </FormField>
                </Fieldset>
              </section>
              <section className="voorbeeld-section--spacing">
                <FieldsetLegend>Contactgegevens:</FieldsetLegend>
                <FormFieldDescription>
                  Laat uw naam en e-mailadres achter, zodat we u op de hoogte kunnen houden van eventuele magische
                  ontwikkelingen.
                </FormFieldDescription>
                <FormFieldTextbox
                  id={`name-${nameField.name}`}
                  className="voorbeeld-textbox"
                  invalid={!!errors[nameField.name]}
                  placeholder="Vul hier uw volledige naam in"
                  required
                  type="name"
                  autoComplete="name"
                  errorMessage={String(errors[nameField.name]?.message)}
                  aria-label="Volledige naam"
                  label="Volledige naam"
                  {...nameField}
                />
                <FormFieldTextbox
                  id={`email-${emailField.name}`}
                  className="voorbeeld-textbox"
                  invalid={!!errors[emailField.name]}
                  placeholder="Vul hier uw e-mailadres in"
                  autoComplete="email"
                  type="email"
                  required
                  errorMessage={String(errors[emailField.name]?.message)}
                  aria-label="E-mailadres"
                  label="E-mailadres"
                  {...emailField}
                />
                <Paragraph>{errors.emailAdress?.message}</Paragraph>
                <Button className="voorbeeld-button--spacing" type="submit" appearance="primary-action-button">
                  Dien uw melding in
                </Button>
              </section>
            </form>
            <Paragraph>
              Dank u voor het deelnemen aan ons absurde meldpunt. Hoewel we geen garanties kunnen geven over de snelheid
              waarmee roze eenhoornparkeerzones worden gerealiseerd, waarderen we uw levendige verbeelding en deelname
              aan dit absurde avontuur.
            </Paragraph>
          </Article>
        </PageContent>
        <ExampleFooterFocus />
      </Page>
    </Document>
  );
}
