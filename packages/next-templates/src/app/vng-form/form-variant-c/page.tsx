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
          <Heading1>Formulier Producten-diensten-overzicht</Heading1>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <Heading2>Variant C</Heading2>
            <FieldsetLegend className="article">Artikel 2 Aanwijzing kanalen van het domein [...]</FieldsetLegend>
            <Fieldset>
              <FormField invalid={!!errors.domain2}>
                <Paragraph>
                  <FormLabel htmlFor="domain2">Domein</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Het domein waarvoor berichten die de verzender uit eigen beweging indient waarvoor het hierna
                  opgevraagde kanaal dat wordt ontsloten op [naam specifieke url voor dit domein] wordt aangewezen
                </FormFieldDescription>
                <Textbox
                  id="domain2"
                  type="text"
                  {...register('domain2', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier een domein in"
                  invalid={!!errors.domain2}
                />
                <Paragraph>{errors.domain2?.message}</Paragraph>
              </FormField>
              <FormField invalid={!!errors.channel4}>
                <Paragraph>
                  <FormLabel htmlFor="channel4">Aanduidingskanaal</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Welk kanaal wordt aangewezen voor de typen berichten waarvoor deze beschikbaar is in dit domein
                </FormFieldDescription>
                <Textbox
                  id="channel4"
                  type="text"
                  invalid={!!errors.channel4}
                  {...register('channel4', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier een kanaal in"
                />
                <Paragraph>{errors.channel4?.message}</Paragraph>
              </FormField>
              <FormField invalid={!!errors.messageTypes2}>
                <Paragraph>
                  <FormLabel htmlFor="message-types2">Berichttypen</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Typen berichten waarvoor dit aangewezen kanaal beschikbaar is
                </FormFieldDescription>
                <Textarea
                  id="message-types2"
                  invalid={!!errors.messageTypes2}
                  {...register('messageTypes2', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier de typen berichten in"
                />
                <Paragraph>{errors.messageTypes2?.message}</Paragraph>
              </FormField>
            </Fieldset>
            <FieldsetLegend className="article">Artikel 3 Aanwijzing kanalen van het domein [...]</FieldsetLegend>
            <Fieldset>
              <FormField invalid={!!errors.oneOrMoreArticles6}>
                <Paragraph>
                  <FormLabel htmlFor="one-or-more-articles6">Eén of meer artikelen</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Eén of meer artikelen waarin de aanwijzing van kanalen voor het indienen van berichten in andere
                  domeinen dan artikel 2 plaatsvindt. Hiervoor kan het stramien van artikel 2 worden aangehouden
                </FormFieldDescription>
                <Textarea
                  id="one-or-more-articles6"
                  {...register('one-or-more-articles6', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier één of meer artikelen in"
                  invalid={!!errors.oneOrMoreArticles6}
                />
                <Paragraph>{errors.oneOrMoreArticles6?.message}</Paragraph>
              </FormField>
            </Fieldset>
            <FieldsetLegend className="article">Artikel [...] Kanaal bezwaarschriften en klachten</FieldsetLegend>
            <FieldsetLegend className="subarticle">Subartikel 3.</FieldsetLegend>
            <Fieldset className="indent-fieldset">
              <FormField invalid={!!errors.channel5}>
                <Paragraph>
                  <FormLabel htmlFor="channel-5">Kanaal bezwaarschriften</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Het kanaal dat wordt aangewezen voor het indienen van bezwaarschriften in afwijking van het hierna
                  opgevraagde artikel of artikelen
                </FormFieldDescription>
                <Textbox
                  id="channel-5"
                  type="text"
                  {...register('channel-5', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier een kanaal in"
                  invalid={!!errors.channel5}
                />
                <Paragraph>{errors.channel5?.message}</Paragraph>
              </FormField>
              <FormField invalid={!!errors.oneOrMoreArticles7}>
                <Paragraph>
                  <FormLabel htmlFor="one-or-more-articles7">Afwijkend(e) artikel of artikelen</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Het artikel of de artikelen waarvoor in afwijking hiervan, voor het indienen van bezwaarschriften het
                  hiervóór ingevulde kanaal wordt aangewezen
                </FormFieldDescription>
                <Textarea
                  id="one-or-more-articles7"
                  {...register('one-or-more-articles7', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier één of meer artikelen in"
                  invalid={!!errors.oneOrMoreArticles7}
                />
                <Paragraph>{errors.oneOrMoreArticles7?.message}</Paragraph>
              </FormField>
            </Fieldset>
            <FieldsetLegend className="subarticle">Subartikel 4.</FieldsetLegend>
            <Fieldset className="indent-fieldset">
              <FormField invalid={!!errors.channel6}>
                <Paragraph>
                  <FormLabel htmlFor="channel-6">Kanaal klachten</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Het kanaal dat wordt aangewezen voor het indienen van klachten in afwijking van het hierna opgevraagde
                  artikel of artikelen
                </FormFieldDescription>
                <Textbox
                  id="channel-6"
                  type="text"
                  {...register('channel-6', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier een kanaal in"
                  invalid={!!errors.channel6}
                />
                <Paragraph>{errors.channel6?.message}</Paragraph>
              </FormField>
              <FormField invalid={!!errors.oneOrMoreArticles8}>
                <Paragraph>
                  <FormLabel htmlFor="one-or-more-articles8">Afwijkend(e) artikel of artikelen</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Het artikel of de artikelen waarvoor in afwijking hiervan, voor het indienen van klachten het hiervóór
                  ingevulde kanaal wordt aangewezen
                </FormFieldDescription>
                <Textarea
                  id="one-or-more-articles8"
                  {...register('one-or-more-articles8', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier één of meer artikelen in"
                  invalid={!!errors.oneOrMoreArticles8}
                />
                <Paragraph>{errors.oneOrMoreArticles8?.message}</Paragraph>
              </FormField>
            </Fieldset>
            <FieldsetLegend className="article">Artikel [...] Kanaal Omgevingswet en Dienstenwet</FieldsetLegend>
            <Fieldset>
              <FormField invalid={!!errors.oneOrMoreArticles9}>
                <Paragraph>
                  <FormLabel htmlFor="one-or-more-articles9">Afwijkend(e) artikel of artikelen</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Het artikel of de artikelen waarvoor in afwijking hiervan, berichten die daartoe bij of krachtens de
                  Omgevingswet zijn aangewezen: het Omgevingsloket als bedoeld in [(per 1 januari 2024:)] artikel 20.21
                  van die wet als kanaal gebruikt worden
                </FormFieldDescription>
                <Textarea
                  id="one-or-more-articles9"
                  {...register('one-or-more-articles9', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier één of meer artikelen in"
                  invalid={!!errors.oneOrMoreArticles9}
                />
                <Paragraph>{errors.oneOrMoreArticles9?.message}</Paragraph>
              </FormField>
              <FormField invalid={!!errors.oneOrMoreArticles10}>
                <Paragraph>
                  <FormLabel htmlFor="one-or-more-articles10">Afwijkend(e) artikel of artikelen</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Het artikel of de artikelen waarvoor in afwijking hiervan, berichten die deel uitmaken van een
                  procedure of formaliteit die valt onder de Dienstenwet de Berichtenbox voor Bedrijven als bedoeld in
                  artikel 5 van de Dienstenwet als kanaal wordt aangewezen
                </FormFieldDescription>
                <Textarea
                  id="one-or-more-articles10"
                  {...register('one-or-more-articles10', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier één of meer artikelen in"
                  invalid={!!errors.oneOrMoreArticles10}
                />
                <Paragraph>{errors.oneOrMoreArticles10?.message}</Paragraph>
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
