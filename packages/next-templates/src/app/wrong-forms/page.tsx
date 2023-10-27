'use client';
import React, { useState } from 'react';

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
  Heading2,
  Select,
  SelectOption,
  UnorderedList,
  UnorderedListItem,
  Article,
} from '@utrecht/component-library-react';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import '../styling/css/wrong-form-socks.css';
import { useForm } from 'react-hook-form';

type FormErrors = {
  aantalcijfer?: string;
  aantalkleur?: string;
  merk?: string;
  aantalwaarde?: string;
  aanvullendeinformatie?: string;
  plaats?: string;
  straat?: string;
  terhoogtevan?: string;
  geslacht?: string;
  name?: string;
  achternaam?: string;
  emailadres?: string;
  telefoonnummer?: string;
  street?: string;
  housenumber?: string;
  postcode?: string;
  woonplaats?: string;
};

export default function Home() {
  const { handleSubmit } = useForm({});

  const [aantalcijfer, setAantalcijfer] = useState<string>('');
  const [aantalkleur, setAantalkleur] = useState<string>('');
  const [merk, setMerk] = useState<string>('');
  const [aantalwaarde, setAantalwaarde] = useState<string>('');
  const [aanvullendeinformatie, setAanvullendeinformatie] = useState<string>('');
  const [plaats, setPlaats] = useState<string>('');
  const [straat, setStraat] = useState<string>('');
  const [terhoogtevan, setTerhoogtevan] = useState<string>('');
  const [geslacht, setGeslacht] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [achternaam, setAchternaam] = useState<string>('');
  const [emailadres, setEmailadres] = useState<string>('');
  const [telefoonummer, setTelefoonnummer] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [housenumber, setHousenumber] = useState<string>('');
  const [postcode, setPostcode] = useState<string>('');
  const [woonplaats, setWoonplaats] = useState<string>('');
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const isValidEmail = (email: string): boolean => {
    return true;
  };

  const validateForm = () => {
    const errors: FormErrors = {};

    if (!aantalcijfer) {
      errors.aantalcijfer = 'wqdqwdqwd';
    }

    if (!aantalkleur) {
      errors.aantalkleur = 'd3de3d3';
    }

    if (!merk) {
      errors.merk = 'TEST';
    }

    if (!aantalwaarde) {
      errors.aantalwaarde = '098765432';
    }

    if (!aanvullendeinformatie) {
      errors.aanvullendeinformatie = 'TEST';
    }

    if (!plaats) {
      errors.plaats = 'RESt';
    }

    if (!straat) {
      errors.straat = 'test';
    }

    if (!terhoogtevan) {
      errors.terhoogtevan = 'tets';
    }

    if (!geslacht) {
      errors.geslacht = 'test';
    }

    if (!name) {
      errors.name = 'de3d';
    }

    if (!achternaam) {
      errors.achternaam = 'de33d3d3dewd';
    }

    if (!emailadres) {
      errors.emailadres = 'wedwed';
    } else if (!isValidEmail(emailadres)) {
      errors.emailadres = 'Ongeldig e-mailadres';
    }

    if (!telefoonummer) {
      errors.telefoonnummer = 'wedwed';
    }

    if (!street) {
      errors.street = 'dwedwed';
    }

    if (!housenumber) {
      errors.housenumber = 'wedwedw';
    }

    if (!postcode) {
      errors.postcode = 'de3d3dwdde3';
    }

    if (!woonplaats) {
      errors.woonplaats = 'wed2ed3';
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
        <Article>
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
              <Textbox
                className="example-foute-form-focus"
                onChange={(e) => setMerk(e.target.value)}
                checked={name === 'Merk'}
              />
              {formErrors.merk && (
                <FormFieldDescription invalid role="alert">
                  <Paragraph className="errors-text">{formErrors.merk}</Paragraph>
                </FormFieldDescription>
              )}
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
              <FormLabel className="example-foute-form-label">Aanvullende informatie</FormLabel>
              <FormFieldDescription>Bijvoorbeeld een opdruk, gat of geur.</FormFieldDescription>
              <Textarea className="example-foute-form-focus" />
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
            <FormField>
              <FormLabel className="example-foute-form-label">Plaats</FormLabel>
              <Textbox className="example-foute-form-focus" />
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">Straat</FormLabel>
              <Textbox className="example-foute-form-focus" />
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">Ter hoogte van</FormLabel>
              <FormFieldDescription>Bijvoorbeeld het huisnummer, parkeerplaats of speeltuintje.</FormFieldDescription>
              <Textarea className="example-foute-form-focus" />
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
            <FormField>
              <FormLabel className="example-foute-form-label">Voorletter(s)</FormLabel>
              <Textbox className="example-foute-form-focus" />
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">Tussenvoegsel (optioneel)</FormLabel>
              <Textbox className="example-foute-form-focus" />
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">Achternaam</FormLabel>
              <Textbox className="example-foute-form-focus" />
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">E-mailadres</FormLabel>
              <Textbox className="example-foute-form-focus" />
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">Telefoonnummer</FormLabel>
              <Textbox className="example-foute-form-focus" />
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">Straat</FormLabel>
              <Textbox className="example-foute-form-focus" />
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">Huisnummer</FormLabel>
              <Textbox className="example-foute-form-focus" />
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">Toevoeging (Optioneel)</FormLabel>
              <Textbox className="example-foute-form-focus" />
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">Postcode</FormLabel>
              <Textbox className="example-foute-form-focus" />
            </FormField>
            <FormField>
              <FormLabel className="example-foute-form-label">Woonplaats</FormLabel>
              <Textbox className="example-foute-form-focus" />
            </FormField>
            <ButtonGroup>
              <ButtonLink className="example-foute-form-focus" href="#" appearance="primary-action-button">
                annuleren
              </ButtonLink>
              <ButtonLink
                className="example-foute-form-focus"
                href="#"
                appearance="primary-action-button"
                type="submit"
              >
                Versturen
              </ButtonLink>
            </ButtonGroup>
          </form>
          </Article>
        </PageContent>
      </Page>
      <ExampleFooter />
    </Document>
  );
}
