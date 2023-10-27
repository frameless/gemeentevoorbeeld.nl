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
  ColorSample,
} from '@utrecht/component-library-react';

import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import '../../styling/css/maandagochtend.css';
import { useForm } from 'react-hook-form';
// import InfoCirleIcon from '@/app/styling/assets/info-circle-icon.svg';
type FormErrors = {
  selectedReason?: string;
  aanvullendetekst?: string;
  name?: string;
  street?: string;
  houseNumber?: string;
  postcode?: string;
  woonplaats?: string;
  email?: string;
  telefoonnummer?: string;
};

export default function Home() {
  const { handleSubmit } = useForm({});

  const [selectedReason, setSelectedReason] = useState<string>('');
  const [additionalInfo, setAdditionalInfo] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [aanvullendetekst, setAanvullendetekst] = useState<string>('');
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
      errors.selectedReason = 'Selecteer een reden';
    }

    if (!aanvullendetekst) {
      errors.aanvullendetekst = 'Error code 786';
    }

    if (!name) {
      errors.name = 'Vul valide naam in';
    }

    if (!street) {
      errors.street = 'Vul geldige straat in';
    }

    if (!houseNumber) {
      errors.houseNumber = 'Kies een huisnummer';
    }

    if (!postcode) {
      errors.postcode = 'Invalid';
    }

    if (!woonplaats) {
      errors.woonplaats = 'Invoer klopt niet! Pas aan';
    }

    if (!email) {
      errors.email = 'Ongeldig';
    } else if (!isValidEmail(email)) {
      errors.email = 'Ongeldig e-mailadres';
    }

    if (!telefoonnummer) {
      errors.telefoonnummer = 'Error code 112';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

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
            {formErrors.selectedReason && (
              <FormFieldDescription invalid role="alert">
                <Paragraph className="errors-text">{formErrors.selectedReason}</Paragraph>
              </FormFieldDescription>
            )}

            <FormField>
              <FormLabel className="example-foute-form-label">Aanvullende Onderbouwing</FormLabel>
              <FormFieldDescription>
                Onderbouw de reden die u heeft opgegeven en beschrijf wat er eventueel wat er aan gedaan kan worden.
              </FormFieldDescription>
              <Textarea onChange={(e) => setAanvullendetekst(e.target.value)}></Textarea>
              {formErrors.aanvullendetekst && (
                <FormFieldDescription style={{ color: '#D2262E' }} invalid role="alert">
                  <Paragraph className="errors-text">{formErrors.aanvullendetekst}</Paragraph>
                </FormFieldDescription>
              )}
            </FormField>
            <Heading2>Uw gegevens</Heading2>
            <FormField>
              <FormLabel className="example-foute-form-label">Naam</FormLabel>
              <Textbox
                className="textbox-name-email"
                onChange={(e) => setName(e.target.value)}
                checked={name === 'Naam'}
              />
              {formErrors.name && (
                <FormFieldDescription invalid role="alert">
                  <Paragraph className="errors-text">{formErrors.name}</Paragraph>
                </FormFieldDescription>
              )}
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">Straat</FormLabel>
              <Textbox onChange={(e) => setStreet(e.target.value)} checked={name === 'Straat'} />
              {formErrors.street && (
                <FormFieldDescription invalid role="alert">
                  <Paragraph className="errors-text">{formErrors.street}</Paragraph>
                </FormFieldDescription>
              )}
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label-huisnummer">
                Huisnummer
                <FormLabel className="example-foute-form-label-huisnummer">Toevoeging(Optioneel)</FormLabel>
              </FormLabel>

              <Textbox
                className="aangepaste-textbox"
                onChange={(e) => setHouseNumber(e.target.value)}
                checked={name === 'Huisnummer'}
              />
              <Textbox className="aangepaste-textbox1" />

              {formErrors.houseNumber && (
                <FormFieldDescription invalid role="alert">
                  <Paragraph className="errors-text">{formErrors.houseNumber}</Paragraph>
                </FormFieldDescription>
              )}
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">
                Postcode
                {/* <InfoCirleIcon /> */}
              </FormLabel>
              <Textbox
                className="aangepaste-textbox"
                onChange={(e) => setPostcode(e.target.value)}
                checked={name === 'Postcode'}
              />
              {formErrors.postcode && (
                <FormFieldDescription invalid role="alert">
                  <Paragraph className="errors-text">{formErrors.postcode}</Paragraph>
                </FormFieldDescription>
              )}
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">Woonplaats</FormLabel>
              <Textbox onChange={(e) => setWoonplaats(e.target.value)} checked={name === 'Woonplaats'} />
              {formErrors.woonplaats && (
                <FormFieldDescription invalid role="alert">
                  <Paragraph className="errors-text">{formErrors.woonplaats}</Paragraph>
                </FormFieldDescription>
              )}
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">E-mailadres</FormLabel>
              <Textbox
                className="textbox-name-email"
                onChange={(e) => setEmail(e.target.value)}
                checked={name === 'E-mailadres'}
              />
              {formErrors.email && (
                <FormFieldDescription invalid role="alert">
                  <Paragraph className="errors-text">{formErrors.email}</Paragraph>
                </FormFieldDescription>
              )}
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">Telefoonnummer</FormLabel>
              <Textbox
                className="textbox-telefoonnummer"
                onChange={(e) => setTelefoonnummer(e.target.value)}
                checked={name === 'Telefoonnummer'}
              />
              {formErrors.telefoonnummer && (
                <FormFieldDescription invalid role="alert">
                  <Paragraph className="errors-text">{formErrors.telefoonnummer}</Paragraph>
                </FormFieldDescription>
              )}
            </FormField>

            <ButtonGroup>
              <Button appearance="primary-action-button" type="submit">
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
