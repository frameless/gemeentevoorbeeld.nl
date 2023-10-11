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
} from '@utrecht/component-library-react';

import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import '../../styling/css/maandagochtend.css';
import { Form } from 'react-hook-form';


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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          <Form method="post">
          <FormField>
            <FormLabel className="example-foute-form-label">Selecteer een reden</FormLabel>
            <RadioButton
              onChange={(e) => setSelectedReason(e.target.value)}
              checked={selectedReason === 'Nog een weekend modus'}
              value="Nog een weekend modus"
            />
            Nog een weekend modus
          </FormField>
          <FormField>
            <RadioButton
              onChange={(e) => setSelectedReason(e.target.value)}
              checked={selectedReason === 'Weekend te kort'}
              value="Weekend te kort"
            />
            Weekend te kort
          </FormField>
          <FormField>
            <RadioButton
              onChange={(e) => setSelectedReason(e.target.value)}
              checked={selectedReason === 'Vermoeidheid'}
              value="Vermoeidheid"
            />
            Vermoeidheid
          </FormField>
          <FormField>
            <RadioButton
              onChange={(e) => setSelectedReason(e.target.value)}
              checked={selectedReason === 'Puberteit'}
              value="Puberteit"
            />
            Puberteit
          </FormField>
          <FormField>
            <RadioButton
              onChange={(e) => setSelectedReason(e.target.value)}
              checked={selectedReason === 'Ajax heeft verloren'}
              value="Ajax heeft verloren"
            />
            Ajax heeft verloren
          </FormField>
          <FormField>
            <FormLabel className="example-foute-form-label">Aanvullende Onderbouwing</FormLabel>
            <FormFieldDescription>
              Onderbouw de reden die u heeft opgegeven en beschrijf wat er eventueel aan gedaan kan worden.
            </FormFieldDescription>
            <Textarea onChange={(e) => setAdditionalInfo(e.target.value)} value={additionalInfo} />
          </FormField>
          <Heading2>Uw gegevens</Heading2>
          <FormField>
            <FormLabel className="example-foute-form-label">Naam</FormLabel>
            <Textbox onChange={(e) => setName(e.target.value)} value={name} />
          </FormField>
          <FormField>
            <FormLabel className="example-foute-form-label">Straat</FormLabel>
            <Textbox onChange={(e) => setStreet(e.target.value)} value={street} />
          </FormField>
          <FormField>
            <FormLabel className="example-foute-form-label">Huisnummer</FormLabel>
            <Textbox onChange={(e) => setHouseNumber(e.target.value)} value={houseNumber} />
          </FormField>
          <FormField>
            <FormLabel className="example-foute-form-label">Toevoeging (Optioneel)</FormLabel>
            <Textbox />
          </FormField>
          <FormField>
            <FormLabel className="example-foute-form-label">Postcode</FormLabel>
            <Textbox onChange={(e) => setPostcode(e.target.value)} value={postcode} />
          </FormField>
          <FormField>
            <FormLabel className="example-foute-form-label">Woonplaats</FormLabel>
            <Textbox onChange={(e) => setWoonplaats(e.target.value)} value={woonplaats} />
          </FormField>
          <FormField>
            <FormLabel className="example-foute-form-label">E-mailadres</FormLabel>
            <Textbox onChange={(e) => setEmail(e.target.value)} value={email} />
          </FormField>
          <FormField>
            <FormLabel className="example-foute-form-label">Telefoonnummer</FormLabel>
            <Textbox onChange={(e) => setTelefoonnummer(e.target.value)} value={telefoonnummer} />
          </FormField>
          <ButtonGroup>
            <Button appearance="primary-action-button" type="submit" >
              Versturen
            </Button>
          </ButtonGroup>
          </Form>
        </PageContent>
      </Page>
      <ExampleFooter />
    </Document>
  );
}
