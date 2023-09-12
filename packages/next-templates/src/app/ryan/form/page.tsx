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
  Heading4,
  Heading5,
  Link,
  Page,
  PageContent,
  Paragraph,
  RadioButton,
  Select,
  SelectOption,
  Textarea,
  Textbox,
} from '@utrecht/component-library-react';
import { UtrechtIcon } from '@utrecht/web-component-library-react';
import { NavigationList } from '@/components/NavigationList';
import { NavigationListItem } from '@/components/NavigationList/NavigationListItem';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import Logo from '../../styling/assets/voorbeeld-footer.svg';
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
          <br />
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
                placeholder="Vul hier een beschrijving in"
              ></Textarea>
              <Paragraph>{errors.description?.message}</Paragraph>
            </FormField>
            <Heading4>Op welke locatie heeft de melding betrekking?</Heading4>
            <FormField invalid={!!errors.place}>
              <Paragraph>
                <FormLabel htmlFor="place">Plaats:</FormLabel>
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
          </form>
          <Fieldset id="df861ef1-844a-42df-8365-b54f59474fb8" role="radiogroup">
            <FieldsetLegend>
              Hoe snel denkt u dat de eenhoorns en vliegende huisdieren hulp nodig hebben?
            </FieldsetLegend>
            <FormField type="radio" className="radio-field">
              <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                <FormLabel htmlFor="right-now" type="radio">
                  <RadioButton
                    className="utrecht-form-field__input"
                    id="right-now"
                    name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                    value="1"
                  />
                  Nu meteen
                </FormLabel>
              </Paragraph>
            </FormField>
            <FormField type="radio" className="radio-field">
              <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                <FormLabel htmlFor="shortly" type="radio">
                  <RadioButton
                    className="utrecht-form-field__input"
                    id="shortly"
                    name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                    value="2"
                  />
                  Binnenkort
                </FormLabel>
              </Paragraph>
            </FormField>
            <FormField type="radio" className="radio-field">
              <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                <FormLabel htmlFor="when-pigs-can-fly" type="radio">
                  <RadioButton
                    className="utrecht-form-field__input"
                    id="when-pigs-can-fly"
                    name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                    value="3"
                  />
                  Wanneer varkens kunnen vliegen
                </FormLabel>
              </Paragraph>
            </FormField>
          </Fieldset>
          <Paragraph>Contactgegevens:</Paragraph>
          <Paragraph>
            Laat uw naam en e-mailadres achter, zodat we u op de hoogte kunnen houden van eventuele magische
            ontwikkelingen.
          </Paragraph>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <FormField invalid={!!errors.fullName}>
              <Paragraph>
                <FormLabel>Volledige naam:</FormLabel>
              </Paragraph>
              <Textbox
                invalid={!!errors.fullName}
                {...register('fullName', {
                  required: 'Dit is verplicht',
                  minLength: { value: 4, message: 'Min length is 4' },
                })}
                placeholder="Vul hier uw volledige naam in"
              ></Textbox>
            </FormField>
            <Paragraph>{errors.fullName?.message}</Paragraph>
            <FormField invalid={!!errors.emailAdress}>
              <Paragraph>
                <FormLabel>E-mailadres:</FormLabel>
              </Paragraph>
              <Textbox
                invalid={!!errors.emailAdress}
                {...register('emailAdress', { required: 'Dit is verplicht' })}
                placeholder="Vul hier uw e-mailadres in"
              ></Textbox>
            </FormField>
            <Paragraph>{errors.emailAdress?.message}</Paragraph>
            <Button type="submit" appearance="primary-action-button" formAction="./confirmed">
              Dien uw melding in
            </Button>
          </form>
          <Paragraph>
            Dank u voor het deelnemen aan ons absurde meldpunt. Hoewel we geen garanties kunnen geven over de snelheid
            waarmee roze eenhoornparkeerzones worden gerealiseerd, waarderen we uw levendige verbeelding en deelname aan
            dit absurde avontuur.
          </Paragraph>
        </PageContent>
        <ExampleFooter />
      </Page>
    </Document>
  );
}
