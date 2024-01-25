'use client';

import {
  Article,
  Button,
  Document,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormLabel,
  Heading1,
  Page,
  PageContent,
  Paragraph,
  RadioButton,
  Textarea,
  Textbox,
} from '@utrecht/component-library-react';
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
            <Heading1>
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
              <FormField invalid={!!errors.location}>
                <FormLabel htmlFor="location">Locatie:</FormLabel>
                <Textbox
                  id="location"
                  {...register('location', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier een locatie in"
                  invalid={!!errors.location}
                />
                <Paragraph>{errors.location?.message}</Paragraph>
              </FormField>
              <FormField invalid={!!errors.description}>
                <FormLabel htmlFor="description">Beschrijving:</FormLabel>
                <Textarea
                  id="description"
                  invalid={!!errors.description}
                  {...register('description', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier een beschrijving in"
                />
                <Paragraph>{errors.description?.message}</Paragraph>
              </FormField>
              <FormField invalid={!!errors.enclosedAerialView}>
                <FormLabel htmlFor="enclosed-aerial-view">Bijgevoegde luchtfoto&apos;s:</FormLabel>
                <Textbox
                  id="enclosed-aerial-view"
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
                  <FormLabel htmlFor="right-now" type="radio">
                    <RadioButton
                      className="utrecht-form-field__input"
                      id="right-now"
                      name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                      value="1"
                    />
                    Nu meteen
                  </FormLabel>
                </FormField>
                <FormField type="radio" className="radio-field">
                  <FormLabel htmlFor="shortly" type="radio">
                    <RadioButton
                      className="utrecht-form-field__input"
                      id="shortly"
                      name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                      value="2"
                    />
                    Binnenkort
                  </FormLabel>
                </FormField>
                <FormField type="radio" className="radio-field">
                  <FormLabel htmlFor="when-pigs-can-fly" type="radio">
                    <RadioButton
                      className="utrecht-form-field__input"
                      id="when-pigs-can-fly"
                      name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                      value="3"
                    />
                    Wanneer varkens kunnen vliegen
                  </FormLabel>
                </FormField>
              </Fieldset>
              <FormLabel>Contactgegevens:</FormLabel>
              <Paragraph>
                Laat uw naam en e-mailadres achter, zodat we u op de hoogte kunnen houden van eventuele magische
                ontwikkelingen.
              </Paragraph>
              <FormField invalid={!!errors.fullName}>
                <FormLabel htmlFor="fullName">Volledige naam:</FormLabel>
                <Textbox
                  invalid={!!errors.fullName}
                  {...register('fullName', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier uw volledige naam in"
                  id="fullName"
                />
              </FormField>
              <Paragraph>{errors.fullName?.message}</Paragraph>
              <FormField invalid={!!errors.emailAdress}>
                <FormLabel htmlFor="emailAdress">E-mailadres:</FormLabel>
                <Textbox
                  invalid={!!errors.emailAdress}
                  {...register('emailAdress', { required: 'Dit is verplicht' })}
                  placeholder="Vul hier uw e-mailadres in"
                  id="emailAdress"
                />
              </FormField>
              <Paragraph>{errors.emailAdress?.message}</Paragraph>
              <Button type="submit" appearance="primary-action-button">
                Dien uw melding in
              </Button>
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
