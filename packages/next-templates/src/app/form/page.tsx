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
  Link,
  Page,
  PageContent,
  Paragraph,
  RadioButton,
  Select,
  SelectOption,
  Textarea,
  Textbox,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import '@/app/styling/css/detail-page.css';
import BacklinkIcon from '@/app/styling/assets/backlink-icon.svg';
import { useForm } from 'react-hook-form';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import { ExampleFooterFocus } from '@/components/ExampleFooter/ExampleFooterFocus/ExampleFooterFocus';

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
        <ExampleHeaderFunnel />
        <PageContent>
          <Link className="example--back-link" href="./detail-page">
            <BacklinkIcon />
            &nbsp;&nbsp;<span className="example--underlined">Terug</span>
          </Link>
          <Heading1>Melding openbare ruimte</Heading1>
          <Paragraph>Vul alle velden in. Als een veld optioneel is, staat dit erbij</Paragraph>
          <Heading2 className="voorbeeld-begin-of-block">Wat wilt u melden?</Heading2>
          <Paragraph>Kies een categorie die bij uw melding past.</Paragraph>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <FormField invalid={!!errors.mainCategory}>
              <Paragraph>
                <FormLabel className="voorbeeld-form-label" htmlFor="mainCategory">
                  Hoofdcategorie
                </FormLabel>
              </Paragraph>
              <Select
                id="mainCategory"
                {...register('mainCategory', {
                  required: 'Dit is verplicht',
                })}
                placeholder="Kies een hoofdcategorie"
                invalid={!!errors.mainCategory}
                className="voorbeeld-svg-arrow"
              >
                <SelectOption selected disabled value="">
                  Kies een hoofdcategorie
                </SelectOption>
                <SelectOption value="1">Option #1</SelectOption>
                <SelectOption value="2">Option #2</SelectOption>
                <SelectOption value="3">Option #3</SelectOption>
                <SelectOption value="4">Option #4</SelectOption>
              </Select>
              <FormFieldDescription invalid={!!errors.mainCategory}>
                {errors.mainCategory?.message}
              </FormFieldDescription>
            </FormField>
            <FormField invalid={!!errors.subCategory}>
              <Paragraph>
                <FormLabel className="voorbeeld-form-label" htmlFor="subCategory">
                  Subcategorie
                </FormLabel>
              </Paragraph>
              <Select
                id="subCategory"
                {...register('subCategory', {
                  required: 'Dit is verplicht',
                })}
                placeholder="Kies een subcategorie"
                invalid={!!errors.subCategory}
                className="voorbeeld-svg-arrow"
              >
                <SelectOption selected disabled value="">
                  Kies een subcategorie
                </SelectOption>
                <SelectOption value="1">Option #1</SelectOption>
                <SelectOption value="2">Option #2</SelectOption>
                <SelectOption value="3">Option #3</SelectOption>
                <SelectOption value="4">Option #4</SelectOption>
              </Select>
              <FormFieldDescription invalid={!!errors.subCategory}>{errors.subCategory?.message}</FormFieldDescription>
            </FormField>
            <FormField invalid={!!errors.description}>
              <Paragraph>
                <FormLabel className="voorbeeld-form-label" htmlFor="description">
                  Omschrijving:
                </FormLabel>
              </Paragraph>
              <FormFieldDescription>
                Beschrijf hier wat er aan de hand is en eventueel wat er aan gedaan kan worden.
              </FormFieldDescription>
              <Textarea
                className="utrecht-textarea-beschrijving"
                id="description"
                invalid={!!errors.description}
                {...register('description', {
                  required: 'Dit is verplicht',
                  minLength: { value: 4, message: 'Min length is 4' },
                })}
                placeholder=""
              ></Textarea>
              <Paragraph>Bijlage</Paragraph>
              <Paragraph>(optioneel)</Paragraph>
              <UnorderedList>
                <UnorderedListItem>Bestanden moeten kleiner zijn dan 10 MB.</UnorderedListItem>
                <UnorderedListItem>Toegestane bestandstypen: gif, jpg, jpeg, png.</UnorderedListItem>
              </UnorderedList>
              <Button appearance="primary-action-button">Bestand kiezen</Button>
              <Paragraph>Geen bestand gekozen</Paragraph>
            </FormField>
            <Heading2 className="voorbeeld-begin-of-block">Op welke locatie heeft de melding betrekking?</Heading2>
            <FormField invalid={!!errors.place}>
              <Paragraph>
                <FormLabel className="voorbeeld-form-label" htmlFor="place">
                  Plaats
                </FormLabel>
              </Paragraph>
              <Textbox
                id="place"
                invalid={!!errors.place}
                {...register('place', {
                  required: 'Dit is verplicht',
                  minLength: { value: 4, message: 'Min length is 4' },
                })}
                placeholder=""
              />
              <FormFieldDescription invalid={!!errors.place}>{errors.description?.message}</FormFieldDescription>
            </FormField>
            <FormField invalid={!!errors.street}>
              <Paragraph>
                <FormLabel className="voorbeeld-form-label" htmlFor="place">
                  Straat
                </FormLabel>
              </Paragraph>
              <Textbox
                id="street"
                invalid={!!errors.street}
                {...register('street', {
                  required: 'Dit is verplicht',
                  minLength: { value: 4, message: 'Min length is 4' },
                })}
                placeholder=""
              />
              <FormFieldDescription invalid={!!errors.street}>{errors.street?.message}</FormFieldDescription>
            </FormField>
            <FormField invalid={!!errors.height}>
              <Paragraph>
                <FormLabel className="voorbeeld-form-label" htmlFor="height">
                  Ter hoogte van
                </FormLabel>
              </Paragraph>
              <FormFieldDescription>Bijvoorbeeld het huisnummer, parkeerplaats of speeltuintje.</FormFieldDescription>
              <Textarea
                className="utrecht-textarea-form"
                id="height"
                invalid={!!errors.height}
                {...register('height', {
                  required: 'Dit is verplicht',
                  minLength: { value: 4, message: 'Min length is 4' },
                })}
                placeholder=""
              ></Textarea>
              <FormFieldDescription invalid={!!errors.height}>{errors.height?.message}</FormFieldDescription>
            </FormField>
            <Heading2 className="voorbeeld-begin-of-block">Hoe kunnen we u bereiken voor meer informatie?</Heading2>
            <Fieldset role="radiogroup">
              <FieldsetLegend>Anoniem Melden?</FieldsetLegend>
              <FormFieldDescription>
                Als u iets anoniem meld kunnen we u niet informeren over het verloop van de afhandeling voor deze
                melding.
              </FormFieldDescription>
              <FormField type="radio">
                <FormLabel htmlFor="anoniem-ja" type="radio">
                  Ja
                </FormLabel>
                <RadioButton className="utrecht-form-field__input" id="anoniem-ja" name="anoniem" value="1" />
              </FormField>
              <FormField type="radio">
                <FormLabel htmlFor="anoniem-nee" type="radio">
                  Nee
                </FormLabel>
                <RadioButton className="utrecht-form-field__input" id="anoniem-nee" name="anoniem" value="2" />
              </FormField>
            </Fieldset>
            <FormField invalid={!!errors.name} type="text">
              <Paragraph>
                <FormLabel className="voorbeeld-form-label" htmlFor="Naam">
                  Naam
                </FormLabel>
              </Paragraph>
              <Paragraph>
                <Textbox
                  autoComplete="name"
                  id="name"
                  invalid={!!errors.name}
                  {...register('name', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder=""
                  name="Naam"
                  type="text"
                />
              </Paragraph>
              <FormFieldDescription invalid={!!errors.name}>{errors.name?.message}</FormFieldDescription>
            </FormField>
            <FormField invalid={!!errors.email} type="text">
              <Paragraph>
                <FormLabel className="voorbeeld-form-label" htmlFor="Email">
                  E-mailadres
                </FormLabel>
              </Paragraph>
              <Paragraph>
                <Textbox
                  autoComplete="email"
                  id="email"
                  invalid={!!errors.email}
                  {...register('email', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder=""
                  name="Email"
                  type="email"
                />
              </Paragraph>
              <FormFieldDescription invalid={!!errors.email}>{errors.email?.message}</FormFieldDescription>
            </FormField>
            <FormField invalid={!!errors.telephone} type="text">
              <Paragraph>
                <FormLabel className="voorbeeld-form-label" htmlFor="Telefoon">
                  Telefoonnummer
                </FormLabel>
              </Paragraph>
              <Paragraph>
                <Textbox
                  autoComplete="tel"
                  id="telephone"
                  invalid={!!errors.telephone}
                  {...register('telephone', {
                    required: 'Dit is verplicht',
                    minLength: { value: 4, message: 'Min length is 4' },
                  })}
                  placeholder=""
                  name="Telefoon"
                  type="tel"
                />
              </Paragraph>
              <FormFieldDescription invalid={!!errors.telephone}>{errors.telephone?.message}</FormFieldDescription>
            </FormField>
            <Button className="voorbeeld-last-of-block" type="submit" appearance="primary-action-button">
              Versturen
            </Button>
          </form>
        </PageContent>
        <ExampleFooterFocus />
      </Page>
    </Document>
  );
}