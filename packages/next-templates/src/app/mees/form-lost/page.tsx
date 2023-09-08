'use client';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';
import {
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

export default function Home() {
  return (
    <Page>
      <PageContent>
        <Heading1>Maak een melding van uw kwijtgeraakte sok</Heading1>
        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor="Voornaam">Voornaam</FormLabel>
          </Paragraph>
          <Paragraph>
            <Textbox id="Voornaam" name="message" type="text" />
          </Paragraph>
        </FormField>
        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor="Achternaam">Achternaam</FormLabel>
          </Paragraph>
          <Paragraph>
            <Textbox id="Achternaam" name="message" type="text" />
          </Paragraph>
        </FormField>
        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor="Telefoon">Telefoon</FormLabel>
          </Paragraph>
          <Paragraph>
            <Textbox id="Telefoon" name="message" type="text" />
          </Paragraph>
        </FormField>
        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor="Email">E-mail</FormLabel>
          </Paragraph>
          <Paragraph>
            <Textbox id="Email" name="message" type="text" />
          </Paragraph>
        </FormField>
        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor="Beschrijving">Beschrijving sok en/of sokken</FormLabel>
          </Paragraph>
          <FormFieldDescription id="Beschrijving">
            Geef zo goed mogelijk de kenmerken van de sok aan,<Paragraph></Paragraph> zodat we hem zo snel mogelijk met
            zijn vriendje kunnen herenigen.
          </FormFieldDescription>
          <Paragraph>
            <Textarea aria-describedby="Beschrijving" name="message" />
          </Paragraph>
        </FormField>
        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor="Waar-gevonden">Waar ben je je sok verloren?</FormLabel>
          </Paragraph>
          <Paragraph>
            <Textarea id="Waar-gevonden" name="message" />
          </Paragraph>
          <FormField type="text">
            <Paragraph>
              <FormLabel htmlFor="Plaatsnaam">Plaatsnaam</FormLabel>
            </Paragraph>
            <Paragraph>
              <Textbox id="Plaatsnaam" name="message" type="text" />
            </Paragraph>
          </FormField>
        </FormField>
        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor="Laatst-gezien">Wanneer heb je je sok voor het laatst gezien?</FormLabel>
          </Paragraph>
          <Paragraph>
            <Textbox id="Laatst-gezien" name="lost-date" type="date" />
          </Paragraph>
        </FormField>
        <ButtonGroup>
          <ButtonLink href="conformation-lost" appearance="primary-action-button">
            Versturen
          </ButtonLink>
        </ButtonGroup>
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
