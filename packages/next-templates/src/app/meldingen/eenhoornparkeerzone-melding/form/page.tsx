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
} from '@utrecht/component-library-react';
import BacklinkIcon from '@/app/styling/assets/backlink-icon.svg';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import { ExampleFooterFocus } from '@/components/ExampleFooter/ExampleFooterFocus/ExampleFooterFocus';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ [key: string]: string }>();
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
                router.push('./confirmed');
              })}
            >
              <section className="voorbeeld-section--spacing">
                <FormField className="voorbeeld-formField" invalid={!!errors.location}>
                  <FormLabel className="voorbeeld-form-label" htmlFor="location">
                    Locatie:
                  </FormLabel>
                  <Textbox
                    id="location"
                    className="voorbeeld-form-field__input"
                    {...register('location', {
                      required: 'Dit is verplicht',
                      minLength: { value: 4, message: 'Min length is 4' },
                    })}
                    placeholder="Vul hier een locatie in"
                    invalid={!!errors.location}
                  />
                  <Paragraph>{errors.location?.message}</Paragraph>
                </FormField>
                <FormField className="voorbeeld-formField" invalid={!!errors.description}>
                  <FormLabel className="voorbeeld-form-label" htmlFor="description">
                    Beschrijving:
                  </FormLabel>
                  <Textarea
                    id="description"
                    className="voorbeeld-form-field__input"
                    invalid={!!errors.description}
                    {...register('description', {
                      required: 'Dit is verplicht',
                      minLength: { value: 4, message: 'Min length is 4' },
                    })}
                    placeholder="Vul hier een beschrijving in"
                  />
                  <Paragraph>{errors.description?.message}</Paragraph>
                </FormField>
                <FormField className="voorbeeld-formField" invalid={!!errors.enclosedAerialView}>
                  <FormLabel className="voorbeeld-form-label" htmlFor="enclosed-aerial-view">
                    Bijgevoegde luchtfoto&apos;s:
                  </FormLabel>
                  <Textbox
                    id="enclosed-aerial-view"
                    className="voorbeeld-form-field__input"
                    invalid={!!errors.enclosedAerialView}
                    {...register('enclosedAerialView', {
                      required: 'Dit is verplicht',
                      minLength: { value: 4, message: 'Min length is 4' },
                    })}
                    placeholder="Upload hier uw luchtfoto's"
                  />
                  <Paragraph>{errors.enclosedAerialView?.message}</Paragraph>
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
                <FormLabel className="voorbeeld-form-label">Contactgegevens:</FormLabel>
                <FormFieldDescription>
                  Laat uw naam en e-mailadres achter, zodat we u op de hoogte kunnen houden van eventuele magische
                  ontwikkelingen.
                </FormFieldDescription>
                <FormField className="voorbeeld-formField" invalid={!!errors.fullName}>
                  <FormLabel className="voorbeeld-form-label" htmlFor="fullName">
                    Volledige naam:
                  </FormLabel>
                  <Textbox
                    invalid={!!errors.fullName}
                    className="voorbeeld-form-field__input"
                    {...register('fullName', {
                      required: 'Dit is verplicht',
                      minLength: { value: 4, message: 'Min length is 4' },
                    })}
                    placeholder="Vul hier uw volledige naam in"
                    id="fullName"
                  />
                </FormField>
                <Paragraph>{errors.fullName?.message}</Paragraph>
                <FormField className="voorbeeld-formField" invalid={!!errors.emailAdress}>
                  <FormLabel className="voorbeeld-form-label" htmlFor="emailAdress">
                    E-mailadres:
                  </FormLabel>
                  <Textbox
                    invalid={!!errors.emailAdress}
                    className="voorbeeld-form-field__input"
                    {...register('emailAdress', { required: 'Dit is verplicht' })}
                    placeholder="Vul hier uw e-mailadres in"
                    id="emailAdress"
                  />
                </FormField>
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
