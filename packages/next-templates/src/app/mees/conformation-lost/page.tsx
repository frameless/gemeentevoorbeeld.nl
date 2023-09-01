'use client';
import {
  ButtonGroup,
  ButtonLink,
  Heading1,
  Heading2,
  Page,
  PageContent,
  Paragraph,
  Separator,
} from '@utrecht/component-library-react';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';

export default function Home() {
  return (
    <Page>
      <PageContent>
        <Heading1>Controleer je gegevens</Heading1>
        <Heading2>je verloren sok</Heading2>
        <Separator></Separator>
        <Heading2>U gegevens </Heading2>
        <Separator></Separator>
        <Paragraph>
          Dank u wel voor het melden van u verloren sok(ken). De gedetailleerde beschrijving die u heeft verstrekt, zal
          dienen als waardevolle informatie bij onze zoektocht naar u sok(ken).
        </Paragraph>
        <Heading2>Wat nu?</Heading2>
        <Paragraph>
          U ontvangt een bevestigings e-mail, het enige wat u nog hoeft te doen, geduldig afwachten. Ons toegewijde team
          zal uw melding grondig onderzoeken en proberen de sok met u te herenigen
        </Paragraph>
        <Paragraph>
          Als er nieuws of ontwikkelingen zijn met betrekking tot uw melding, ontvangt u een e-mail op het door u
          opgegeven e-mailadres om u op de hoogte te stellen.
        </Paragraph>
        <ButtonGroup>
          <ButtonLink href="mees" appearance="primary-action-button">
            Versturen
          </ButtonLink>
          <ButtonLink href="form-found" appearance="secondary-action-button">
            Terug
          </ButtonLink>
        </ButtonGroup>
      </PageContent>
    </Page>
  );
}
