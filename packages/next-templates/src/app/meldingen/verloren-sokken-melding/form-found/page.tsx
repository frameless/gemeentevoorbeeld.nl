'use client';
import {
  ButtonGroup,
  ButtonLink,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading1,
  Page,
  PageContent,
  Paragraph,
  Textarea,
  Textbox,
} from '@utrecht/component-library-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ExampleFooterFocus } from '@/components/ExampleFooter/ExampleFooterFocus/ExampleFooterFocus';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';

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
      <ExampleHeaderFunnel />
      <PageContent>
        <Heading1>Maak een melding van een gevonden sok</Heading1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField type="text">
            <FormLabel htmlFor="Voornaam">Voornaam</FormLabel>
            <Textbox {...register('Voornaam')} id="Voornaam" name="Voornaam" type="text" />
          </FormField>
          <FormField type="text">
            <FormLabel htmlFor="Achternaam">Achternaam</FormLabel>
            <Textbox {...register('Achternaam')} id="Achternaam" name="Achternaam" type="text" />
          </FormField>
          <FormField type="text">
            <FormLabel htmlFor="Telefoon">Telefoon</FormLabel>
            <Textbox {...register('Telefoon')} id="Telefoon" name="Telefoon" type="text" />
          </FormField>
          <FormField type="text">
            <FormLabel htmlFor="Email">E-mail</FormLabel>
            <Textbox {...register('Email')} id="Email" name="Email" type="text" />
          </FormField>
          <FormField type="text">
            <FormLabel htmlFor="Beschrijving">Beschrijving sok en/of sokken</FormLabel>
            <FormFieldDescription>
              Geef zo goed mogelijk de kenmerken van de sok aan, zodat we hem zo snel mogelijk met zijn vriendje kunnen
              herenigen.
            </FormFieldDescription>
            <Textarea {...register('Beschrijving')} id="Beschrijving" name="beschrijving" />
          </FormField>
          <FormField type="text">
            <FormLabel htmlFor="Waar-gevonden">Waar heb je de sok gevonden?</FormLabel>
            <Textarea {...register('GevondenLocatie')} id="Waar-gevonden" name="GevondenLocatie" />
            <FormField type="text">
              <FormLabel htmlFor="Plaatsnaam">Plaatsnaam</FormLabel>
              <Textbox {...register('Plaatsnaam')} id="Plaatsnaam" name="Plaatsnaam" type="text" />
            </FormField>
          </FormField>
          <ButtonGroup>
            <ButtonLink href="conformation-lost" appearance="primary-action-button">
              Versturen
            </ButtonLink>
          </ButtonGroup>
        </form>
      </PageContent>
      <ExampleFooterFocus />
    </Page>
  );
}
