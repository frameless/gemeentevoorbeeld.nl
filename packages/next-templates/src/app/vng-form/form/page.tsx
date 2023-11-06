'use client';

import {
  Button,
  Document,
  Fieldset,
  FieldsetLegend,
  FormField,
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
            <FormField invalid={!!errors.domain}>
              <Paragraph>
                <FormLabel htmlFor="domain">
                  Het domein waaruit de berichten komen die de verzender uit eigen beweging indient
                </FormLabel>
              </Paragraph>
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
            <FormField invalid={!!errors.channel}>
              <Paragraph>
                <FormLabel htmlFor="channel">
                  Welk kanaal wordt aangewezen voor de typen berichten waarvoor deze beschikbaar is in dit domein
                </FormLabel>
              </Paragraph>
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
                <FormLabel htmlFor="message-types">
                  Typen berichten waarvoor dit aangewezen kanaal beschikbaar is
                </FormLabel>
              </Paragraph>
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
            <FieldsetLegend>Artikel 3 Aanwijzing kanalen van het domein [...]</FieldsetLegend>
            <FormField invalid={!!errors.oneOrMoreArticles}>
              <Paragraph>
                <FormLabel htmlFor="one-or-more-articles">
                  Eén of meer artikelen waarin de aanwijzing van kanalen voor het indienen van berichten in andere
                  domeinen dan artikel 2 plaatsvindt. Hiervoor kan het stramien van artikel 2 worden aangehouden
                </FormLabel>
              </Paragraph>
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
            <FieldsetLegend>Artikel [...] Kanaal bezwaarschriften en klachten</FieldsetLegend>
            <FormField invalid={!!errors.channel2}>
              <Paragraph>
                <FormLabel htmlFor="channel-2">
                  Het kanaal dat wordt aangewezen voor het indienen van bezwaarschriften in afwijking van het hierna
                  opgevraagde artikel of artikelen
                </FormLabel>
              </Paragraph>
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
                <FormLabel htmlFor="one-or-more-articles2">
                  Het artikel of de artikelen waarvoor in afwijking hiervan, voor het indienen van bezwaarschriften het
                  hiervóór ingevulde kanaal wordt aangewezen
                </FormLabel>
              </Paragraph>
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
            <FormField invalid={!!errors.channel3}>
              <Paragraph>
                <FormLabel htmlFor="channel-3">
                  Het kanaal dat wordt aangewezen voor het indienen van klachten in afwijking van het hierna opgevraagde
                  artikel of artikelen
                </FormLabel>
              </Paragraph>
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
                <FormLabel htmlFor="one-or-more-articles3">
                  Het artikel of de artikelen waarvoor in afwijking hiervan, voor het indienen van klachten het hiervóór
                  ingevulde kanaal wordt aangewezen
                </FormLabel>
              </Paragraph>
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
            <FieldsetLegend>Artikel [...] Kanaal Omgevingswet</FieldsetLegend>
            <FormField invalid={!!errors.oneOrMoreArticles4}>
              <Paragraph>
                <FormLabel htmlFor="one-or-more-articles4">
                  Het artikel of de artikelen waarvoor in afwijking hiervan, berichten die daartoe bij of krachtens de
                  Omgevingswet zijn aangewezen: het Omgevingsloket als bedoeld in [(per 1 januari 2024:)] artikel 20.21
                  van die wet als kanaal gebruikt worden
                </FormLabel>
              </Paragraph>
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
            <FieldsetLegend>Artikel [...] Kanaal Dienstenwet</FieldsetLegend>
            <FormField invalid={!!errors.oneOrMoreArticles5}>
              <Paragraph>
                <FormLabel htmlFor="one-or-more-articles5">
                  Het artikel of de artikelen waarvoor in afwijking hiervan, berichten die deel uitmaken van een
                  procedure of formaliteit die valt onder de Dienstenwet de Berichtenbox voor Bedrijven als bedoeld in
                  artikel 5 van de Dienstenwet als kanaal wordt aangewezen
                </FormLabel>
              </Paragraph>
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
            <Heading2>Variant C</Heading2>
            <FieldsetLegend>Artikel 2 Aanwijzing kanalen van het domein [...]</FieldsetLegend>
            <FormField invalid={!!errors.domain2}>
              <Paragraph>
                <FormLabel htmlFor="domain2">
                  Het domein waarvoor berichten die de verzender uit eigen beweging indient waarvoor het hierna
                  opgevraagde kanaal dat wordt ontsloten op [naam specifieke url voor dit domein] wordt aangewezen
                </FormLabel>
              </Paragraph>
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
                <FormLabel htmlFor="channel4">
                  Welk kanaal wordt aangewezen voor de typen berichten waarvoor deze beschikbaar is in dit domein
                </FormLabel>
              </Paragraph>
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
                <FormLabel htmlFor="message-types2">
                  Typen berichten waarvoor dit aangewezen kanaal beschikbaar is
                </FormLabel>
              </Paragraph>
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
            <FieldsetLegend>Artikel 3 Aanwijzing kanalen van het domein [...]</FieldsetLegend>
            <FormField invalid={!!errors.oneOrMoreArticles6}>
              <Paragraph>
                <FormLabel htmlFor="one-or-more-articles6">
                  Eén of meer artikelen waarin de aanwijzing van kanalen voor het indienen van berichten in andere
                  domeinen dan artikel 2 plaatsvindt. Hiervoor kan het stramien van artikel 2 worden aangehouden
                </FormLabel>
              </Paragraph>
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
            <FieldsetLegend>Artikel [...] Kanaal bezwaarschriften en klachten</FieldsetLegend>
            <FormField invalid={!!errors.channel5}>
              <Paragraph>
                <FormLabel htmlFor="channel-5">
                  Het kanaal dat wordt aangewezen voor het indienen van bezwaarschriften in afwijking van het hierna
                  opgevraagde artikel of artikelen
                </FormLabel>
              </Paragraph>
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
                <FormLabel htmlFor="one-or-more-articles7">
                  Het artikel of de artikelen waarvoor in afwijking hiervan, voor het indienen van bezwaarschriften het
                  hiervóór ingevulde kanaal wordt aangewezen
                </FormLabel>
              </Paragraph>
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
            <FormField invalid={!!errors.channel6}>
              <Paragraph>
                <FormLabel htmlFor="channel-6">
                  Het kanaal dat wordt aangewezen voor het indienen van klachten in afwijking van het hierna opgevraagde
                  artikel of artikelen
                </FormLabel>
              </Paragraph>
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
                <FormLabel htmlFor="one-or-more-articles8">
                  Het artikel of de artikelen waarvoor in afwijking hiervan, voor het indienen van klachten het hiervóór
                  ingevulde kanaal wordt aangewezen
                </FormLabel>
              </Paragraph>
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
            <FieldsetLegend>Artikel [...] Kanaal Omgevingswet</FieldsetLegend>
            <FormField invalid={!!errors.oneOrMoreArticles9}>
              <Paragraph>
                <FormLabel htmlFor="one-or-more-articles9">
                  Het artikel of de artikelen waarvoor in afwijking hiervan, berichten die daartoe bij of krachtens de
                  Omgevingswet zijn aangewezen: het Omgevingsloket als bedoeld in [(per 1 januari 2024:)] artikel 20.21
                  van die wet als kanaal gebruikt worden
                </FormLabel>
              </Paragraph>
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
            <FieldsetLegend>Artikel [...] Kanaal Dienstenwet</FieldsetLegend>
            <FormField invalid={!!errors.oneOrMoreArticles10}>
              <Paragraph>
                <FormLabel htmlFor="one-or-more-articles10">
                  Het artikel of de artikelen waarvoor in afwijking hiervan, berichten die deel uitmaken van een
                  procedure of formaliteit die valt onder de Dienstenwet de Berichtenbox voor Bedrijven als bedoeld in
                  artikel 5 van de Dienstenwet als kanaal wordt aangewezen
                </FormLabel>
              </Paragraph>
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
            <Heading2>Variant D</Heading2>
            <FieldsetLegend>Artikel 2 Aanwijzing kanalen van het domein [...]</FieldsetLegend>
            <FormField invalid={!!errors.messageTypes3}>
              <Paragraph>
                <FormLabel htmlFor="message-types3">
                  Typen berichten waarvoor een specifiek webformulier beschikbaar is voor webformulieren die worden
                  ontsloten op [...]
                </FormLabel>
              </Paragraph>
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
            <FormField invalid={!!errors.name1}>
              <Paragraph>
                <FormLabel htmlFor="name1">Naam voor generiek e-formulier</FormLabel>
              </Paragraph>
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
                <FormLabel htmlFor="message-types4">
                  Typen berichten waar dit formulier voor kan worden gebruikt die worden ontsloten op [...]
                </FormLabel>
              </Paragraph>
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
                <FormLabel htmlFor="message-types5">
                  Typen berichten waarvoor dit e-mailadres kan worden gebruikt
                </FormLabel>
              </Paragraph>
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
            <FormField invalid={!!errors.messageTypes6}>
              <Paragraph>
                <FormLabel htmlFor="message-types6">
                  Naam mailadres voor alle andere typen berichten binnen dit domein
                </FormLabel>
              </Paragraph>
              <Textarea
                id="message-types6"
                {...register('message-types6', {
                  required: 'Dit is verplicht',
                  minLength: { value: 4, message: 'Min length is 4' },
                })}
                placeholder="Vul hier typen berichten in"
                invalid={!!errors.messageTypes6}
              />
              <Paragraph>{errors.messageTypes6?.message}</Paragraph>
            </FormField>
            <FieldsetLegend>Artikel 3 Aanwijzing kanalen van het domein [...]</FieldsetLegend>
            <FormField invalid={!!errors.oneOrMoreArticles11}>
              <Paragraph>
                <FormLabel htmlFor="one-or-more-articles11">
                  Eén of meer artikelen waarin de aanwijzing van kanalen voor het indienen van berichten in andere
                  domeinen dan artikel 2 plaatsvindt. Hiervoor kan het stramien van artikel 2 worden aangehouden
                </FormLabel>
              </Paragraph>
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
            <FieldsetLegend>Artikel [...] Kanaal bezwaarschriften en klachten</FieldsetLegend>
            <FormField invalid={!!errors.channel7}>
              <Paragraph>
                <FormLabel htmlFor="channel-7">
                  Het kanaal dat wordt aangewezen voor het indienen van bezwaarschriften in afwijking van het hierna
                  opgevraagde artikel of artikelen
                </FormLabel>
              </Paragraph>
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
                <FormLabel htmlFor="one-or-more-articles12">
                  Het artikel of de artikelen waarvoor in afwijking hiervan, voor het indienen van bezwaarschriften het
                  hiervóór ingevulde kanaal wordt aangewezen
                </FormLabel>
              </Paragraph>
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
            <FormField invalid={!!errors.channel8}>
              <Paragraph>
                <FormLabel htmlFor="channel-8">
                  Het kanaal dat wordt aangewezen voor het indienen van klachten in afwijking van het hierna opgevraagde
                  artikel of artikelen
                </FormLabel>
              </Paragraph>
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
                <FormLabel htmlFor="one-or-more-articles13">
                  Het artikel of de artikelen waarvoor in afwijking hiervan, voor het indienen van klachten het hiervóór
                  ingevulde kanaal wordt aangewezen
                </FormLabel>
              </Paragraph>
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
            <FieldsetLegend>Artikel [...] Kanaal Omgevingswet</FieldsetLegend>
            <FormField invalid={!!errors.oneOrMoreArticles14}>
              <Paragraph>
                <FormLabel htmlFor="one-or-more-articles14">
                  Het artikel of de artikelen waarvoor in afwijking hiervan, berichten die daartoe bij of krachtens de
                  Omgevingswet zijn aangewezen: het Omgevingsloket als bedoeld in [(per 1 januari 2024:)] artikel 20.21
                  van die wet als kanaal gebruikt worden
                </FormLabel>
              </Paragraph>
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
            <FieldsetLegend>Artikel [...] Inwerkingtreding besluit</FieldsetLegend>
            <FormField invalid={!!errors.date}>
              <Paragraph>
                <FormLabel htmlFor="date">De ingangsdatum waarop dit besluit in werking treedt</FormLabel>
              </Paragraph>
              <Textbox
                id="date"
                type="text"
                {...register('date', {
                  required: 'Dit is verplicht',
                  minLength: { value: 4, message: 'Min length is 4' },
                })}
                placeholder="Vul hier een kanaal in"
                invalid={!!errors.date}
              />
              <Paragraph>{errors.date?.message}</Paragraph>
            </FormField>
            <Button appearance="primary-action-button" type="submit">
              Indienen
            </Button>
          </form>
        </PageContent>
      </Page>
    </Document>
  );
}
