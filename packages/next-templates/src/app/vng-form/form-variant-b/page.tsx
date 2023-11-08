'use client';

import {
  Button,
  Document,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading1,
  Heading2,
  Page,
  PageContent,
  Paragraph,
  RadioButton,
  Textarea,
  Textbox,
} from '@utrecht/component-library-react';
import { useForm } from 'react-hook-form';

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ [key: string]: string }>();
  console.log(watch());
  return (
    <Document>
      <Page>
        <PageContent>
          <Heading1>Formulier producten-diensten-overzicht</Heading1>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <Heading2>Variant B</Heading2>
            <FieldsetLegend>Artikel 2 Aanwijzing kanalen van het domein [...]</FieldsetLegend>
            <FieldsetLegend>Subartikel 1.</FieldsetLegend>
            <Fieldset className="indent-fieldset">
              <FormField invalid={!!errors.domain}>
                <Paragraph>
                  <FormLabel htmlFor="domain">Domein</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Het domein waaruit de berichten komen die de verzender uit eigen beweging indient
                </FormFieldDescription>
                <Textbox
                  id="domain"
                  type="text"
                  {...register('domain', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier een domein in"
                  invalid={!!errors.domain}
                />
                <Paragraph>{errors.domain?.message}</Paragraph>
              </FormField>
            </Fieldset>
            <FieldsetLegend>Subartikel 3.</FieldsetLegend>
            <Fieldset className="indent-fieldset">
              <FormField invalid={!!errors.channel}>
                <Paragraph>
                  <FormLabel htmlFor="channel">Aanduidingskanaal</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Welk kanaal wordt aangewezen voor de typen berichten waarvoor deze beschikbaar is in dit domein
                </FormFieldDescription>
                <Textbox
                  id="channel"
                  type="text"
                  invalid={!!errors.channel}
                  {...register('channel', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier een kanaal in"
                />
                <Paragraph>{errors.channel?.message}</Paragraph>
              </FormField>
              <FormField invalid={!!errors.messageTypes}>
                <Paragraph>
                  <FormLabel htmlFor="message-types">Berichttypen</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Typen berichten waarvoor dit aangewezen kanaal beschikbaar is
                </FormFieldDescription>
                <Textarea
                  id="message-types"
                  invalid={!!errors.messageTypes}
                  {...register('messageTypes', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier de typen berichten in"
                />
                <Paragraph>{errors.messageTypes?.message}</Paragraph>
              </FormField>
            </Fieldset>
            <Fieldset>
              <FormField invalid={!!errors.oneOrMoreArticles}>
                <Paragraph>
                  <FormLabel htmlFor="one-or-more-articles">Eén of meer artikelen</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Eén of meer artikelen waarin de aanwijzing van kanalen voor het indienen van berichten in andere
                  domeinen dan artikel 2 plaatsvindt. Hiervoor kan het stramien van artikel 2 worden aangehouden
                </FormFieldDescription>
                <Textarea
                  id="one-or-more-articles"
                  {...register('one-or-more-articles', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier één of meer artikelen in"
                  invalid={!!errors.oneOrMoreArticles}
                />
                <Paragraph>{errors.oneOrMoreArticles?.message}</Paragraph>
              </FormField>
            </Fieldset>
            <FieldsetLegend>Artikel [...] Kanaal bezwaarschriften en klachten</FieldsetLegend>
            <FieldsetLegend>Subartikel 1.</FieldsetLegend>
            <Fieldset className="indent-fieldset">
              <FormField invalid={!!errors.channel2}>
                <Paragraph>
                  <FormLabel htmlFor="channel-2">Kanaal bezwaarschriften</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Het kanaal dat wordt aangewezen voor het indienen van bezwaarschriften in afwijking van het hierna
                  opgevraagde artikel of artikelen
                </FormFieldDescription>
                <Textbox
                  id="channel-2"
                  type="text"
                  {...register('channel-2', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier een kanaal in"
                  invalid={!!errors.channel2}
                />
                <Paragraph>{errors.channel2?.message}</Paragraph>
              </FormField>
              <FormField invalid={!!errors.oneOrMoreArticles2}>
                <Paragraph>
                  <FormLabel htmlFor="one-or-more-articles2">Afwijkend(e) artikel of artikelen</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Het artikel of de artikelen waarvoor in afwijking hiervan, voor het indienen van bezwaarschriften het
                  hiervóór ingevulde kanaal wordt aangewezen
                </FormFieldDescription>
                <Textarea
                  id="one-or-more-articles2"
                  {...register('one-or-more-articles2', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier één of meer artikelen in"
                  invalid={!!errors.oneOrMoreArticles2}
                />
                <Paragraph>{errors.oneOrMoreArticles2?.message}</Paragraph>
              </FormField>
            </Fieldset>
            <FieldsetLegend>Subartikel 2.</FieldsetLegend>
            <Fieldset className="indent-fieldset">
              <FormField invalid={!!errors.channel3}>
                <Paragraph>
                  <FormLabel htmlFor="channel-3">Kanaal klachten</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Het kanaal dat wordt aangewezen voor het indienen van klachten in afwijking van het hierna opgevraagde
                  artikel of artikelen
                </FormFieldDescription>
                <Textbox
                  id="channel-3"
                  type="text"
                  {...register('channel-3', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier een kanaal in"
                  invalid={!!errors.channel3}
                />
                <Paragraph>{errors.channel3?.message}</Paragraph>
              </FormField>
              <FormField invalid={!!errors.oneOrMoreArticles3}>
                <Paragraph>
                  <FormLabel htmlFor="one-or-more-articles3">Afwijkend(e) artikel of artikelen</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Het artikel of de artikelen waarvoor in afwijking hiervan, voor het indienen van klachten het hiervóór
                  ingevulde kanaal wordt aangewezen
                </FormFieldDescription>
                <Textarea
                  id="one-or-more-articles3"
                  {...register('one-or-more-articles3', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier één of meer artikelen in"
                  invalid={!!errors.oneOrMoreArticles3}
                />
                <Paragraph>{errors.oneOrMoreArticles3?.message}</Paragraph>
              </FormField>
            </Fieldset>
            <FieldsetLegend>Artikel [...] Kanaal Omgevingswet en Dienstenwet</FieldsetLegend>
            <Fieldset>
              <FormField invalid={!!errors.oneOrMoreArticles4}>
                <Paragraph>
                  <FormLabel htmlFor="one-or-more-articles4">Afwijkend(e) artikel of artikelen</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Het artikel of de artikelen waarvoor in afwijking hiervan, berichten die daartoe bij of krachtens de
                  Omgevingswet zijn aangewezen: het Omgevingsloket als bedoeld in [(per 1 januari 2024:)] artikel 20.21
                  van die wet als kanaal gebruikt worden
                </FormFieldDescription>
                <Textarea
                  id="one-or-more-articles4"
                  {...register('one-or-more-articles4', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier één of meer artikelen in"
                  invalid={!!errors.oneOrMoreArticles4}
                />
                <Paragraph>{errors.oneOrMoreArticles4?.message}</Paragraph>
              </FormField>
              <FormField invalid={!!errors.oneOrMoreArticles5}>
                <Paragraph>
                  <FormLabel htmlFor="one-or-more-articles5">Afwijkend(e) artikel of artikelen</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Het artikel of de artikelen waarvoor in afwijking hiervan, berichten die deel uitmaken van een
                  procedure of formaliteit die valt onder de Dienstenwet de Berichtenbox voor Bedrijven als bedoeld in
                  artikel 5 van de Dienstenwet als kanaal wordt aangewezen
                </FormFieldDescription>
                <Textarea
                  id="one-or-more-articles5"
                  {...register('one-or-more-articles5', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier één of meer artikelen in"
                  invalid={!!errors.oneOrMoreArticles5}
                />
                <Paragraph>{errors.oneOrMoreArticles5?.message}</Paragraph>
              </FormField>
            </Fieldset>
            <Button appearance="primary-action-button" type="submit">
              Indienen
            </Button>
          </form>
        </PageContent>
      </Page>
    </Document>
  );
}
