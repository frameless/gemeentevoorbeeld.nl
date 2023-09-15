'use client';

import {
  Article,
  Button,
  ButtonLink,
  Document,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading2,
  Heading4,
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
import { useForm } from 'react-hook-form';
import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
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
        <ExampleHeader />
        <PageContent>
          <Link className="example--back-link" href="./detail-page">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z"
                fill="#5315F6"
              />
            </svg>
            &nbsp;&nbsp;<span className="example--underlined">Terug</span>
          </Link>
          <Heading2>Melding openbare ruimte</Heading2>
          <Paragraph>Vul alle velden in. Als een veld optioneel is, staat dit erbij</Paragraph>
          <Heading4>Wat wilt u melden?</Heading4>
          <Paragraph>Kies een categorie die bij uw melding past.</Paragraph>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <FormField invalid={!!errors.mainCategory}>
              <Paragraph>
                <FormLabel htmlFor="mainCategory">Hoofdcategorie</FormLabel>
              </Paragraph>
              <Select
                id="mainCategory"
                {...register('mainCategory', {
                  required: 'Dit is verplicht',
                })}
                placeholder="Kies een hoofdcategorie"
                invalid={!!errors.location}
              >
                <SelectOption selected disabled value="">
                  Kies een hoofdcategorie
                </SelectOption>
                <SelectOption value="1">Option #1</SelectOption>
                <SelectOption value="2">Option #2</SelectOption>
                <SelectOption value="3">Option #3</SelectOption>
                <SelectOption value="4">Option #4</SelectOption>
              </Select>
              <Paragraph>{errors.location?.message}</Paragraph>
            </FormField>
            <FormField invalid={!!errors.subCategory}>
              <Paragraph>
                <FormLabel htmlFor="subCategory">Subcategorie</FormLabel>
              </Paragraph>
              <Select
                id="subCategory"
                {...register('subCategory', {
                  required: 'Dit is verplicht',
                })}
                placeholder="Kies een subcategorie"
                invalid={!!errors.location}
              >
                <SelectOption selected disabled value="">
                  Kies een subcategorie
                </SelectOption>
                <SelectOption value="1">Option #1</SelectOption>
                <SelectOption value="2">Option #2</SelectOption>
                <SelectOption value="3">Option #3</SelectOption>
                <SelectOption value="4">Option #4</SelectOption>
              </Select>
              <Paragraph>{errors.location?.message}</Paragraph>
            </FormField>
            <FormField invalid={!!errors.description}>
              <Paragraph>
                <FormLabel htmlFor="description">Beschrijving:</FormLabel>
              </Paragraph>
              <Paragraph className="example--placeholder-paragraph">
                <FormLabel htmlFor="description">
                  Beschrijf hier wat er aan de hand is en eventueel wat er aan gedaan kan worden.
                </FormLabel>
              </Paragraph>
              <Textarea
                id="description"
                invalid={!!errors.description}
                {...register('description', {
                  required: 'Dit is verplicht',
                  minLength: { value: 4, message: 'Min length is 4' },
                })}
                placeholder=""
              ></Textarea>
              {/*Going to make this a component soon (ExampleBijlageToevoegen) everything between the Article */}
              <Article>
                <Paragraph>Bijlage</Paragraph>
                <Paragraph>(optioneel)</Paragraph>
                <UnorderedList>
                  <UnorderedListItem>Bestanden moeten kleiner zijn dan 10 MB.</UnorderedListItem>
                  <UnorderedListItem>Toegestane bestandstypen: gif, jpg, jpeg, png.</UnorderedListItem>
                </UnorderedList>
                <Button appearance="primary-action-button">Bestand kiezen</Button>
                <Paragraph>Geen bestand gekozen</Paragraph>
              </Article>
            </FormField>
            <Heading4>Op welke locatie heeft de melding betrekking?</Heading4>
            <FormField invalid={!!errors.place}>
              <Paragraph>
                <FormLabel htmlFor="place">Plaats</FormLabel>
              </Paragraph>
              <Textbox
                id="place"
                invalid={!!errors.place}
                {...register('place', {
                  required: 'Dit is verplicht',
                  minLength: { value: 4, message: 'Min length is 4' },
                })}
                placeholder=""
              ></Textbox>
              <Paragraph>{errors.description?.message}</Paragraph>
            </FormField>
            <FormField invalid={!!errors.street}>
              <Paragraph>
                <FormLabel htmlFor="place">Straat</FormLabel>
              </Paragraph>
              <Textbox
                id="street"
                invalid={!!errors.street}
                {...register('street', {
                  required: 'Dit is verplicht',
                  minLength: { value: 4, message: 'Min length is 4' },
                })}
                placeholder=""
              ></Textbox>
              <Paragraph>{errors.street?.message}</Paragraph>
            </FormField>
            <FormField invalid={!!errors.height}>
              <Paragraph>
                <FormLabel htmlFor="height">Ter hoogte van</FormLabel>
              </Paragraph>
              <Paragraph className="example--placeholder-paragraph">
                <FormLabel htmlFor="height">Bijvoorbeeld het huisnummer, parkeerplaats of speeltuintje.</FormLabel>
              </Paragraph>
              <Textarea
                id="height"
                invalid={!!errors.height}
                {...register('height', {
                  required: 'Dit is verplicht',
                  minLength: { value: 4, message: 'Min length is 4' },
                })}
                placeholder=""
              ></Textarea>
              <Paragraph>{errors.height?.message}</Paragraph>
            </FormField>
            <Heading4>Hoe kunnen we u bereiken voor meer informatie?</Heading4>
            <Fieldset role="radiogroup">
              <FieldsetLegend>Anoniem Melden?</FieldsetLegend>
              <FormFieldDescription>
                Als u iets anoniem meld kunnen we u niet informeren over het verloop van de afhandeling voor deze
                melding.
              </FormFieldDescription>
              <FormField type="radio">
                <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                  <FormLabel htmlFor="anoniem-ja" type="radio">
                    <RadioButton className="utrecht-form-field__input" id="anoniem-ja" name="anoniem" value="1" />
                    Ja
                  </FormLabel>
                </Paragraph>
              </FormField>
              <FormField type="radio">
                <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                  <FormLabel htmlFor="anoniem-nee" type="radio">
                    <RadioButton className="utrecht-form-field__input" id="anoniem-nee" name="anoniem" value="2" />
                    Nee
                  </FormLabel>
                </Paragraph>
              </FormField>
            </Fieldset>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor="Naam">Naam</FormLabel>
              </Paragraph>
              <Paragraph>
                <Textbox autoComplete="name" id="Naam" name="Naam" type="text" />
              </Paragraph>
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor="Email">E-mail</FormLabel>
              </Paragraph>
              <Paragraph>
                <Textbox autoComplete="email" id="Email" name="Email" type="text" />
              </Paragraph>
            </FormField>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor="Telefoon">Telefoon</FormLabel>
              </Paragraph>
              <Paragraph>
                <Textbox autoComplete="tel" id="Telefoon" name="Telefoon" type="text" />
              </Paragraph>
            </FormField>
            <ButtonLink appearance="primary-action-button">Versturen</ButtonLink>
          </form>
        </PageContent>
        <ExampleFooterFocus />
      </Page>
    </Document>
  );
}
