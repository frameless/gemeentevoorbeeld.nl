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
            <Heading2>Variant D</Heading2>
            <FieldsetLegend className="article">Artikel 2 Aanwijzing kanalen van het domein [...]</FieldsetLegend>
            <FieldsetLegend className="subarticle">Subartikel a.</FieldsetLegend>
            <Fieldset className="indent-fieldset">
              <FormField invalid={!!errors.messageTypes3}>
                <Paragraph>
                  <FormLabel htmlFor="message-types3">Berichttypen</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Typen berichten waarvoor een specifiek webformulier beschikbaar is voor webformulieren die worden
                  ontsloten op [...]
                </FormFieldDescription>
                <Textarea
                  id="message-types3"
                  {...register('message-types3', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier typen berichten in"
                  invalid={!!errors.messageTypes3}
                />
                <Paragraph>{errors.messageTypes3?.message}</Paragraph>
              </FormField>
            </Fieldset>
            <FieldsetLegend className="subarticle">Subartikel b.</FieldsetLegend>
            <Fieldset className="indent-fieldset">
              <FormField invalid={!!errors.name1}>
                <Paragraph>
                  <FormLabel htmlFor="name1">Formuliernaam</FormLabel>
                </Paragraph>
                <FormFieldDescription>Naam voor generiek e-formulier</FormFieldDescription>
                <Textbox
                  id="name1"
                  type="text"
                  {...register('name1', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier een naam in"
                  invalid={!!errors.name1}
                />
                <Paragraph>{errors.name1?.message}</Paragraph>
              </FormField>
              <FormField invalid={!!errors.messageTypes4}>
                <Paragraph>
                  <FormLabel htmlFor="message-types4">Berichttypen</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Typen berichten waar dit formulier voor kan worden gebruikt die worden ontsloten op [...]
                </FormFieldDescription>
                <Textarea
                  id="message-types4"
                  {...register('message-types4', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier typen berichten in"
                  invalid={!!errors.messageTypes4}
                />
                <Paragraph>{errors.messageTypes4?.message}</Paragraph>
              </FormField>
            </Fieldset>
            <FieldsetLegend className="subarticle">Subartikel c.</FieldsetLegend>
            <Fieldset className="indent-fieldset">
              <FormField invalid={!!errors.name2}>
                <Paragraph>
                  <FormLabel htmlFor="name2">Naam mailadres</FormLabel>
                </Paragraph>
                <Textbox
                  id="name2"
                  type="text"
                  {...register('name2', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier een naam in"
                  invalid={!!errors.name2}
                />
                <Paragraph>{errors.name2?.message}</Paragraph>
              </FormField>
              <FormField invalid={!!errors.messageTypes5}>
                <Paragraph>
                  <FormLabel htmlFor="message-types5">Berichttypen</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Typen berichten waarvoor dit e-mailadres kan worden gebruikt
                </FormFieldDescription>
                <Textarea
                  id="message-types5"
                  {...register('message-types5', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier typen berichten in"
                  invalid={!!errors.messageTypes5}
                />
                <Paragraph>{errors.messageTypes5?.message}</Paragraph>
              </FormField>
            </Fieldset>
            <FieldsetLegend className="subarticle">Subartikel d.</FieldsetLegend>
            <Fieldset className="indent-fieldset">
              <FormField invalid={!!errors.messageTypes6}>
                <Paragraph>
                  <FormLabel htmlFor="message-types6">Naam mailadres</FormLabel>
                </Paragraph>
                <FormFieldDescription>(Voor alle andere typen berichten binnen dit domein)</FormFieldDescription>
                <Textarea
                  id="message-types6"
                  {...register('message-types6', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier een naam in"
                  invalid={!!errors.messageTypes6}
                />
                <Paragraph>{errors.messageTypes6?.message}</Paragraph>
              </FormField>
            </Fieldset>
            <FieldsetLegend className="article">Artikel 3 Aanwijzing kanalen van het domein [...]</FieldsetLegend>
            <Fieldset>
              <FormField invalid={!!errors.oneOrMoreArticles11}>
                <Paragraph>
                  <FormLabel htmlFor="one-or-more-articles11">Eén of meer artikelen</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Eén of meer artikelen waarin de aanwijzing van kanalen voor het indienen van berichten in andere
                  domeinen dan artikel 2 plaatsvindt. Hiervoor kan het stramien van artikel 2 worden aangehouden
                </FormFieldDescription>
                <Textarea
                  id="one-or-more-articles11"
                  {...register('one-or-more-articles11', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier één of meer artikelen in"
                  invalid={!!errors.oneOrMoreArticles11}
                />
                <Paragraph>{errors.oneOrMoreArticles11?.message}</Paragraph>
              </FormField>
            </Fieldset>
            <FieldsetLegend className="article">Artikel [...] Kanaal bezwaarschriften en klachten</FieldsetLegend>
            <FieldsetLegend className="subarticle">Subartikel 5.</FieldsetLegend>
            <Fieldset className="indent-fieldset">
              <FormField invalid={!!errors.channel7}>
                <Paragraph>
                  <FormLabel htmlFor="channel-7">Kanaal bezwaarschriften</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Het kanaal dat wordt aangewezen voor het indienen van bezwaarschriften in afwijking van het hierna
                  opgevraagde artikel of artikelen
                </FormFieldDescription>
                <Textbox
                  id="channel-7"
                  type="text"
                  {...register('channel-7', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier een kanaal in"
                  invalid={!!errors.channel7}
                />
                <Paragraph>{errors.channel7?.message}</Paragraph>
              </FormField>
              <FormField invalid={!!errors.oneOrMoreArticles12}>
                <Paragraph>
                  <FormLabel htmlFor="one-or-more-articles12">Afwijkend(e) artikel of artikelen</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Het artikel of de artikelen waarvoor in afwijking hiervan, voor het indienen van bezwaarschriften het
                  hiervóór ingevulde kanaal wordt aangewezen
                </FormFieldDescription>
                <Textarea
                  id="one-or-more-articles12"
                  {...register('one-or-more-articles12', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier één of meer artikelen in"
                  invalid={!!errors.oneOrMoreArticles12}
                />
                <Paragraph>{errors.oneOrMoreArticles12?.message}</Paragraph>
              </FormField>
            </Fieldset>
            <FieldsetLegend className="subarticle">Subartikel 6.</FieldsetLegend>
            <Fieldset className="indent-fieldset">
              <FormField invalid={!!errors.channel8}>
                <Paragraph>
                  <FormLabel htmlFor="channel-8">Kanaal klachten</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Het kanaal dat wordt aangewezen voor het indienen van klachten in afwijking van het hierna opgevraagde
                  artikel of artikelen
                </FormFieldDescription>
                <Textbox
                  id="channel-8"
                  type="text"
                  {...register('channel-8', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier een kanaal in"
                  invalid={!!errors.channel8}
                />
                <Paragraph>{errors.channel8?.message}</Paragraph>
              </FormField>
              <FormField invalid={!!errors.oneOrMoreArticles13}>
                <Paragraph>
                  <FormLabel htmlFor="one-or-more-articles13">Afwijkend(e) artikel of artikelen</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Het artikel of de artikelen waarvoor in afwijking hiervan, voor het indienen van klachten het hiervóór
                  ingevulde kanaal wordt aangewezen
                </FormFieldDescription>
                <Textarea
                  id="one-or-more-articles13"
                  {...register('one-or-more-articles13', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier één of meer artikelen in"
                  invalid={!!errors.oneOrMoreArticles13}
                />
                <Paragraph>{errors.oneOrMoreArticles13?.message}</Paragraph>
              </FormField>
            </Fieldset>
            <FieldsetLegend className="article">Artikel [...] Kanaal Omgevingswet</FieldsetLegend>
            <Fieldset>
              <FormField invalid={!!errors.oneOrMoreArticles14}>
                <Paragraph>
                  <FormLabel htmlFor="one-or-more-articles14">Afwijkend(e) artikel of artikelen</FormLabel>
                </Paragraph>
                <FormFieldDescription>
                  Het artikel of de artikelen waarvoor in afwijking hiervan, berichten die daartoe bij of krachtens de
                  Omgevingswet zijn aangewezen: het Omgevingsloket als bedoeld in [(per 1 januari 2024:)] artikel 20.21
                  van die wet als kanaal gebruikt worden
                </FormFieldDescription>
                <Textarea
                  id="one-or-more-articles14"
                  {...register('one-or-more-articles14', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier één of meer artikelen in"
                  invalid={!!errors.oneOrMoreArticles14}
                />
                <Paragraph>{errors.oneOrMoreArticles14?.message}</Paragraph>
              </FormField>
            </Fieldset>
            <FieldsetLegend className="article">Artikel [...] Inwerkingtreding besluit</FieldsetLegend>
            <Fieldset>
              <FormField invalid={!!errors.date}>
                <Paragraph>
                  <FormLabel htmlFor="date">Datum</FormLabel>
                </Paragraph>
                <FormFieldDescription>De ingangsdatum waarop dit besluit in werking treedt</FormFieldDescription>
                <Textbox
                  id="date"
                  type="text"
                  {...register('date', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder="Vul hier een datum in"
                  invalid={!!errors.date}
                />
                <Paragraph>{errors.date?.message}</Paragraph>
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
