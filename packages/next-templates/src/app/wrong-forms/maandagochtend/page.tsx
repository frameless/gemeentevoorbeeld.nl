'use client';
import React, { useState } from 'react';

import {
  ButtonGroup,
  Document,
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
  Button,
  FormFieldErrorMessage,
} from '@utrecht/component-library-react';

import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import '../../styling/css/maandagochtend.css';
import { useForm } from 'react-hook-form';

type FormErrors = {
  selectedReason?: string;
  name?: string;
  street?: string;
  houseNumber?: string;
  postcode?: string;
  woonplaats?: string;
  email?: string;
};

export default function Home() {
  const { handleSubmit } = useForm({});

  const [selectedReason, setSelectedReason] = useState<string>('');
  const [additionalInfo, setAdditionalInfo] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [houseNumber, setHouseNumber] = useState<string>('');
  const [postcode, setPostcode] = useState<string>('');
  const [woonplaats, setWoonplaats] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telefoonnummer, setTelefoonnummer] = useState<string>('');
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const isValidEmail = (email: string): boolean => {
    return true;
  };

  const validateForm = () => {
    const errors: FormErrors = {};

    if (!selectedReason) {
      errors.selectedReason = 'Selecteer een reden is verplicht';
    }

    if (!name) {
      errors.name = 'Naam is verplicht';
    }

    if (!street) {
      errors.street = 'Straat is verplicht';
    }

    if (!houseNumber) {
      errors.houseNumber = 'Huisnummer is verplicht';
    }

    if (!postcode) {
      errors.postcode = 'Postcode is verplicht';
    }

    if (!woonplaats) {
      errors.woonplaats = 'Woonplaats is verplicht';
    }

    if (!email) {
      errors.email = 'E-mailadres is verplicht';
    } else if (!isValidEmail(email)) {
      errors.email = 'Ongeldig e-mailadres';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     alert('Formulier verstuurd!');
  //   }
  // };
  const handleFormHookSubmit = () => {
    if (validateForm()) {
      alert('Formulier verstuurd!');
    }
  };

  return (
    <Document>
      <ExampleHeaderFunnel />
      <Page>
        <PageContent>
          <Heading1>Bezwaar indienen tegen maandagochtend</Heading1>
          <Paragraph>Vul alle velden in. Als een veld optioneel is, dan staat dit erbij.</Paragraph>
          <Heading2>Waarom maakt u bezwaar?</Heading2>
          <Paragraph>Kies een categorie die bij uw melding past.</Paragraph>
          <form method="post" onSubmit={handleSubmit(handleFormHookSubmit)}>
            <FormField>
              <FormLabel className="example-foute-form-label">Selecteer een reden</FormLabel>
              <RadioButton
                onChange={(e) => setSelectedReason(e.target.value)}
                checked={selectedReason === 'Nog een weekend modus'}
                value="Nog een weekend modus"
              />
              Nog een weekend modus
            </FormField>

            <ButtonGroup>
              <Button appearance="primary-action-button" type="submit">
                Versturen
              </Button>
            </ButtonGroup>
            <FormFieldDescription invalid>
              {Object.values(formErrors).map((error) => (
                <Paragraph>{error}</Paragraph>
              ))}
            </FormFieldDescription>
          </form>
        </PageContent>
      </Page>
      <ExampleFooter />
    </Document>
  );
}
