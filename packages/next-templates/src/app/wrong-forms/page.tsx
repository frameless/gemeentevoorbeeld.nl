'use client';
import React, { ReactNode, useState } from 'react';

import {
  ButtonGroup,
  Document,
  ButtonLink,
  Button,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading1,
  Page,
  PageContent,
  Paragraph,
  Textarea,
  Textbox,
  TextboxProps,
  Heading2,
  Select,
  SelectOption,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import '../styling/css/wrong-form-socks.css';
import { Control, Controller, FieldErrors, FieldValues, useForm } from 'react-hook-form';

interface ReactHookFormFieldTextboxProps extends TextboxProps {
  label: ReactNode;
  id: string;
  name: string;
  errors: FieldErrors;
  control: Control<any>;
  requiredError?: string;
  maxLengthError?: string;
  unknownError?: string;
}

const ReactHookFormFieldTextbox = ({
  control,
  errors,
  name,
  id,
  label,
  required,
  maxLength,
  requiredError,
  maxLengthError,
  unknownError,
  ...restProps
}: ReactHookFormFieldTextboxProps) => {
  return (
    <>
      <Controller
        control={control}
        rules={{
          required,
          maxLength,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormField>
            <FormLabel htmlFor={id} className="example-foute-form-label">
              {label}
            </FormLabel>
            <Textbox
              id={id}
              onBlur={onBlur}
              onInput={onChange}
              value={value}
              className="example-foute-form-focus"
              {...restProps}
            />
          </FormField>
        )}
        name={name}
      />
      {errors[name]?.type === 'required' ? (
        <FormFieldDescription invalid>
          <Paragraph>{requiredError}</Paragraph>
        </FormFieldDescription>
      ) : errors[name]?.type === 'maxLength' ? (
        <FormFieldDescription invalid>
          <Paragraph>{maxLengthError}</Paragraph>
        </FormFieldDescription>
      ) : errors[name] ? (
        <FormFieldDescription invalid>
          <Paragraph>{unknownError}</Paragraph>
        </FormFieldDescription>
      ) : undefined}
    </>
  );
};

export default function Home() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      achternaam: 'Tables',
      mail: 'test',
    },
  });

  const isValidEmail = (email: string): boolean => {
    return true;
  };

  const handleFormHookSubmit = () => {
    if (validateForm()) {
      alert('Formulier verstuurd!');
    } else {
      console.log('Invalid form!');
    }
  };

  return (
    <Document>
      <ExampleHeaderFunnel />
      <Page>
        <PageContent>
          <Heading1>Melding verloren sokken</Heading1>
          <Paragraph lead>
            Sokken kwijt? That socks! Vul alle velden in. Als een veld optioneel is, staat dit erbij.
          </Paragraph>

          <Heading2>Beschrijving sokken</Heading2>
          <form method="post" onSubmit={handleSubmit(handleFormHookSubmit)}>
            <FormField>
              <FormLabel className="example-foute-form-label">Aantal</FormLabel>
              <Select className="example-foute-form-focus">
                <SelectOption value="1">Kies een aantal</SelectOption>
                <SelectOption value="2">1</SelectOption>
                <SelectOption value="3">2</SelectOption>
              </Select>
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">Aantal</FormLabel>
              <Select className="example-foute-form-focus">
                <SelectOption value="1">Kies een kleur</SelectOption>
                <SelectOption value="2">Beige</SelectOption>
                <SelectOption value="3">Blauw</SelectOption>
                <SelectOption value="4">Bruin</SelectOption>
                <SelectOption value="5">Creme</SelectOption>
                <SelectOption value="6">Diverse</SelectOption>
                <SelectOption value="7">Geel</SelectOption>
                <SelectOption value="8">Goud</SelectOption>
                <SelectOption value="9">Grijs</SelectOption>
                <SelectOption value="10">Groen</SelectOption>
                <SelectOption value="11">Oranje</SelectOption>
                <SelectOption value="12">Paars</SelectOption>
                <SelectOption value="13">Rood</SelectOption>
                <SelectOption value="14">Roze</SelectOption>
                <SelectOption value="15">Wit</SelectOption>
                <SelectOption value="16">Zilver</SelectOption>
                <SelectOption value="17">Zwart</SelectOption>
              </Select>
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">Merk</FormLabel>
              <Textbox />
              <ReactHookFormFieldTextbox
                control={control}
                errors={errors}
                label="Merk"
                maxLength={200}
                required
                id="merk"
                requiredError="Vul merk in."
                maxLengthError="Merk is te lang."
                unknownError="Merk klopt niet."
                name="merk"
              ></ReactHookFormFieldTextbox>
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">Aantal</FormLabel>
              <Select className="example-foute-form-focus">
                <SelectOption value="1">Kies een waarde</SelectOption>
                <SelectOption value="2">Onbekend</SelectOption>
                <SelectOption value="3">Meer dan 450 euro</SelectOption>
                <SelectOption value="3">Minder dan 450 euro</SelectOption>
              </Select>
            </FormField>
            <FormField>
              <ReactHookFormFieldTextbox
                control={control}
                errors={errors}
                label="Aanvullende informatie"
                maxLength={350}
                required
                requiredError="Vul aanvullende informatie in."
                maxLengthError="Aanvullende informatie is te lang."
                unknownError="Aanvullende informatie klopt niet."
                id="woonplaats"
                name="woonplaats"
              ></ReactHookFormFieldTextbox>
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">Bijlage</FormLabel>
              <Paragraph>(optioneel)</Paragraph>
              <UnorderedList>
                <UnorderedListItem>Bestanden moeten kleiner zijn dan 10 MB.</UnorderedListItem>
                <UnorderedListItem>Toegestane bestandstypen: gif, jpg, jpeg, png.</UnorderedListItem>
              </UnorderedList>
              <Button className="example-foute-form-focus" appearance="secondary-action-button">
                Foto kiezen
              </Button>
              <FormFieldDescription>geen bestand gekozen</FormFieldDescription>
            </FormField>
            <Heading2>Waar ben u uw sokken verloren?</Heading2>
            <ReactHookFormFieldTextbox
              control={control}
              errors={errors}
              label="Plaats"
              maxLength={200}
              required
              requiredError="Vul plaats in."
              maxLengthError="Plaats is te lang."
              unknownError="Plaats klopt niet."
              id="plaats"
              name="plaats"
            ></ReactHookFormFieldTextbox>
            <FormField>
              <ReactHookFormFieldTextbox
                control={control}
                errors={errors}
                label="Straat"
                maxLength={200}
                required
                requiredError="Vul straat in."
                maxLengthError="Straat is te lang."
                unknownError="Straat klopt niet."
                id="street"
                name="straat"
              ></ReactHookFormFieldTextbox>
            </FormField>
            <ReactHookFormFieldTextbox
              control={control}
              errors={errors}
              label="Straat"
              maxLength={200}
              required
              requiredError="Vul straat in."
              maxLengthError="Straat is te lang."
              unknownError="Straat klopt niet."
              id="street"
              name="straat"
            ></ReactHookFormFieldTextbox>
            <FormField>
              <ReactHookFormFieldTextbox
                control={control}
                errors={errors}
                label="Ter hoogte van"
                maxLength={100}
                required
                requiredError="Vul in."
                maxLengthError="Is te lang, gebruik minder tekens."
                unknownError="Klopt niet."
                id="woonplaats"
                name="woonplaats"
              ></ReactHookFormFieldTextbox>
            </FormField>
            <Heading2>Uw gegevens</Heading2>
            <Paragraph>Zodat wij u kunnen bereiken wanneer uw sokken gevonden zijn.</Paragraph>
            <FormField>
              <FormLabel className="example-foute-form-label">Geslacht</FormLabel>
              <Select className="example-foute-form-focus">
                <SelectOption value="1">Kies een geslacht</SelectOption>
                <SelectOption value="2">man</SelectOption>
                <SelectOption value="3">vrouw</SelectOption>
                <SelectOption value="4">Onbekend</SelectOption>
              </Select>
            </FormField>

            <ReactHookFormFieldTextbox
              control={control}
              errors={errors}
              label="Voorletter(s)"
              maxLength={2}
              required
              requiredError="Vul voorletter in."
              maxLengthError="Voorletter is te lang."
              unknownError="Voorletter klopt niet."
              id="voorletter"
              name="voorletter"
            ></ReactHookFormFieldTextbox>

            <FormField>
              <FormLabel className="example-foute-form-label">Tussenvoegsel (optioneel)</FormLabel>
              <Textbox className="example-foute-form-focus" />
            </FormField>

            <ReactHookFormFieldTextbox
              control={control}
              errors={errors}
              label="Achternaam"
              maxLength={200}
              required
              id="faoksdofasd"
              requiredError="Vul achternaam in."
              maxLengthError="Achternaam is te lang."
              unknownError="Achternaam klopt niet."
              name="achternaam"
            ></ReactHookFormFieldTextbox>

            <ReactHookFormFieldTextbox
              control={control}
              errors={errors}
              label="E-mailadres"
              maxLength={200}
              required
              requiredError="Vul E-mailadres in."
              maxLengthError="E-mailadres is te lang."
              unknownError="E-mailadres klopt niet."
              id="mail"
              name="mail"
            ></ReactHookFormFieldTextbox>

            <ReactHookFormFieldTextbox
              control={control}
              errors={errors}
              label="Telefoonnummer"
              maxLength={10}
              required
              requiredError="Vul telefoonnummer in."
              maxLengthError="Telefoonnummer is te lang."
              unknownError="Telefoonnummer klopt niet."
              id="phone"
              name="telefoonnummer"
            ></ReactHookFormFieldTextbox>

            <ReactHookFormFieldTextbox
              control={control}
              errors={errors}
              label="Straat"
              maxLength={200}
              required
              requiredError="Vul straat in."
              maxLengthError="Straat is te lang."
              unknownError="Straat klopt niet."
              id="street"
              name="straat"
            ></ReactHookFormFieldTextbox>

            <ReactHookFormFieldTextbox
              control={control}
              errors={errors}
              label="Huisnummer"
              maxLength={4}
              required
              requiredError="Vul huisnummer in."
              maxLengthError="Huisnummer is te lang."
              unknownError="Huisnummer klopt niet."
              id="housenumber"
              name="huisnummer"
            ></ReactHookFormFieldTextbox>

            <ReactHookFormFieldTextbox
              control={control}
              errors={errors}
              label="Postcode"
              maxLength={6}
              required
              requiredError="Vul postcode in."
              maxLengthError="Postcode is te lang."
              unknownError="Postcode klopt niet."
              id="postcode"
              name="Postcode"
            ></ReactHookFormFieldTextbox>

            <ReactHookFormFieldTextbox
              control={control}
              errors={errors}
              label="Woonplaats"
              maxLength={200}
              required
              requiredError="Vul woonplaats in."
              maxLengthError="Woonplaats is te lang."
              unknownError="Woonplaats klopt niet."
              id="woonplaats"
              name="woonplaats"
            ></ReactHookFormFieldTextbox>
            <ButtonGroup>
              <Button className="example-foute-form-focus" appearance="primary-action-button">
                annuleren
              </Button>
              <Button className="example-foute-form-focus" appearance="primary-action-button" type="submit">
                Versturen
              </Button>
            </ButtonGroup>
          </form>
        </PageContent>
      </Page>
      <ExampleFooter />
    </Document>
  );
}
