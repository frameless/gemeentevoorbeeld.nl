'use client';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';
import {
  Button,
  ButtonGroup,
  ButtonLink,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading1,
  Heading5,
  Page,
  PageContent,
  PageFooter,
  Paragraph,
  Textarea,
  Textbox,
} from '@utrecht/component-library-react';
import Logo from '../../styling/assets/voorbeeld-footer.svg';
import '../../styling/component-styles/footer.css';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Inputs {
  Voornaam: string;
  Achternaam: string;
  Telefoon: string;
  Email: string;
  Beschrijving: string;
  GevondenLocatie: string;
  Plaatsnaam: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Page>
      <PageContent>
        <Heading1>Maak een melding van een gevonden sok</Heading1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField type="text">
            <Paragraph>
              <FormLabel htmlFor="Voornaam">Voornaam</FormLabel>
            </Paragraph>
            <Paragraph>
              <Textbox {...register('Voornaam')} id="Voornaam" name="Voornaam" type="text" />
            </Paragraph>
          </FormField>
          <FormField type="text">
            <Paragraph>
              <FormLabel htmlFor="Achternaam">Achternaam</FormLabel>
            </Paragraph>
            <Paragraph>
              <Textbox {...register('Achternaam')} id="Achternaam" name="Achternaam" type="text" />
            </Paragraph>
          </FormField>
          <FormField type="text">
            <Paragraph>
              <FormLabel htmlFor="Telefoon">Telefoon</FormLabel>
            </Paragraph>
            <Paragraph>
              <Textbox {...register('Telefoon')} id="Telefoon" name="Telefoon" type="text" />
            </Paragraph>
          </FormField>
          <FormField type="text">
            <Paragraph>
              <FormLabel htmlFor="Email">E-mail</FormLabel>
            </Paragraph>
            <Paragraph>
              <Textbox {...register('Email')} id="Email" name="Email" type="text" />
            </Paragraph>
          </FormField>
          <FormField type="text">
            <Paragraph>
              <FormLabel htmlFor="Beschrijving">Beschrijving sok en/of sokken</FormLabel>
            </Paragraph>
            <FormFieldDescription>
              Geef zo goed mogelijk de kenmerken van de sok aan, zodat we hem zo snel mogelijk met zijn vriendje kunnen
              herenigen.
            </FormFieldDescription>
            <Paragraph>
              <Textarea {...register('Beschrijving')} id="Beschrijving" name="beschrijving" />
            </Paragraph>
          </FormField>
          <FormField type="text">
            <Paragraph>
              <FormLabel htmlFor="Waar-gevonden">Waar heb je de sok gevonden?</FormLabel>
            </Paragraph>
            <Paragraph>
              <Textarea {...register('GevondenLocatie')} id="Waar-gevonden" name="GevondenLocatie" />
            </Paragraph>
            <FormField type="text">
              <Paragraph>
                <FormLabel htmlFor="Plaatsnaam">Plaatsnaam</FormLabel>
              </Paragraph>
              <Paragraph>
                <Textbox {...register('Plaatsnaam')} id="Plaatsnaam" name="Plaatsnaam" type="text" />
              </Paragraph>
            </FormField>
          </FormField>
          <ButtonGroup>
            <ButtonLink href="conformation-lost" appearance="primary-action-button">
              Versturen
            </ButtonLink>
          </ButtonGroup>
        </form>
      </PageContent>
      <PageFooter>
        <div className="example-link-list-container">
          <Logo CLassName="example--footer-logo" />
          <ul className="example--footer-list utrecht-link-list utrecht-link-list--html-ul">
            <Heading5>Heading</Heading5>
            <li className="utrecht-link-list-focus__item">
              <Paragraph className="utrecht-footer-paragraph">
                Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *
              </Paragraph>
            </li>
          </ul>
        </div>
      </PageFooter>
    </Page>
  );
}
