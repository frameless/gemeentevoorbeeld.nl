'use client';

import {
  Article,
  Button,
  ButtonGroup,
  ButtonLink,
  Document,
  Fieldset,
  FormField,
  FormLabel,
  Heading1,
  Heading2,
  Link,
  Textbox,
  Page,
  PageContent,
  Paragraph,
  RadioButton,
  Strong,
} from '@utrecht/component-library-react';
import '@/app/styling/css/form-page.css';
import { useForm } from 'react-hook-form';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import { ExampleFooterFocus } from '@/components/ExampleFooter/ExampleFooterFocus/ExampleFooterFocus';
import { UtrechtIconArrow } from '@utrecht/web-component-library-react';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { FormFieldTextbox } from '@/components/FormFieldTextbox';
import BacklinkIcon from '@/app/styling/assets/backlink-icon.svg';
import { homeTownValidation, streetValidation, nameValidation, emailValidation } from '@/utils/validation';
import { useRouter } from 'next/navigation';

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
  const emailField = register('email', emailValidation);

  return (
    <Document>
      <Page>
        <ExampleHeaderFunnel />
        <ExampleNavigation />
        <PageContent>
          <Article className="voorbeeld-article-space">
            <Link href="./">
              <BacklinkIcon /> Terug
            </Link>
            <Heading1>Verhuizing doorgeven</Heading1>

            <Heading2>Uw Gegevens</Heading2>
            <Paragraph>
              <Strong>Naam:</Strong> Laura Maria Naaldijk
            </Paragraph>
            <Paragraph>
              <Strong>Geboren:</Strong> 10/03/1998
            </Paragraph>
            <Paragraph>
              <Strong>Adres:</Strong> Barbadosstraat 166
            </Paragraph>
            <form
              method="POST"
              action="./verhuizing-doorgeven/confirmed"
              onSubmit={handleSubmit((data) => {
                window.location.href = './confirmed';
              })}
            >
              <section>
                <FormFieldTextbox
                  id={`place-${placeField.name}`}
                  className="voorbeeld-textbox"
                  placeholder="Vul hier uw telefoonnummer"
                  invalid={!!errors[placeField.name]}
                  errorMessage={String(errors[placeField.name]?.message)}
                  aria-label="Telefoonnummer"
                  label="Telefoonnummer"
                  {...placeField}
                />
                <FormFieldTextbox
                  id={`email-${emailField.name}`}
                  className="voorbeeld-textbox"
                  placeholder="Vul hier uw email"
                  invalid={!!errors[placeField.name]}
                  errorMessage={String(errors[placeField.name]?.message)}
                  aria-label="Email"
                  label="Email"
                  {...placeField}
                />
              </section>
            </form>
            <Heading2>Uw Situatie</Heading2>
            <Fieldset id="df861ef1-844a-42df-8365-b54f59474fb8" role="radiogroup">
              <FormField type="radio">
                <RadioButton id="right-now" name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3" value="1" />
                <FormLabel htmlFor="right-now" type="radio">
                  Ik ben eigenaar van de woning
                </FormLabel>
              </FormField>
              <FormField type="radio">
                <RadioButton id="shortly" name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3" value="2" />
                <FormLabel htmlFor="shortly" type="radio">
                  Ik heb een huurcontract en ik huur het gehele woning
                </FormLabel>
              </FormField>
              <FormField type="radio">
                <RadioButton id="when-pigs-can-fly" name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3" value="3" />
                <FormLabel htmlFor="when-pigs-can-fly" type="radio">
                  Ik heb een huurcontract en ik huur een deel van de woning
                </FormLabel>
              </FormField>
              <FormField type="radio">
                <RadioButton id="when-pigs-can-fly" name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3" value="4" />
                <FormLabel htmlFor="when-pigs-can-fly" type="radio">
                  Ik ga bij iemand wonen
                </FormLabel>
              </FormField>
            </Fieldset>
            <Heading2>Verhuizing</Heading2>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor="2222">Datum verhuizing</FormLabel>
              </Paragraph>
              <Paragraph>
                <Textbox id="2222" name="datums beschikbaarheid" type="date" autoComplete="off" required />
              </Paragraph>
            </FormField>
            <Heading2>Uw Nieuwe Adres</Heading2>
            <form
              method="POST"
              action="./verhuizing-doorgeven/confirmed"
              onSubmit={handleSubmit((data) => {
                window.location.href = './confirmed';
              })}
            >
              <section>
                <FormFieldTextbox
                  id={`street-${streetField.name}`}
                  className="voorbeeld-textbox"
                  placeholder="Vul hier uw postcode en huisnummer"
                  invalid={!!errors[placeField.name]}
                  errorMessage={String(errors[placeField.name]?.message)}
                  aria-label="Adres"
                  label="Postcode en huisnummer"
                  {...placeField}
                />
                <FormFieldTextbox
                  id={`place-${placeField.name}`}
                  className="voorbeeld-textbox"
                  placeholder="Vul hier het aantal personen"
                  invalid={!!errors[placeField.name]}
                  errorMessage={String(errors[placeField.name]?.message)}
                  aria-label="Aantal inwoners"
                  label="Hoeveel personen wonen er op het nieuwe adres na het verhuizing"
                  {...placeField}
                />
              </section>
            </form>

            <Heading2>Bijlage</Heading2>
            <Paragraph className="voorbeeld-paragraph-bijlage">
              Eigendomsbewijs (bijv. koopcontract of akte van levering)*
            </Paragraph>
            <Button appearance="secondary-action-button">Bestand kiezen</Button>

            <ButtonGroup>
              <ButtonLink appearance="primary-action-button" href="./verhuizing-doorgeven/confirmed">
                Afronden <UtrechtIconArrow></UtrechtIconArrow>
              </ButtonLink>
            </ButtonGroup>
          </Article>
        </PageContent>
        <ExampleFooterFocus />
      </Page>
    </Document>
  );
}
