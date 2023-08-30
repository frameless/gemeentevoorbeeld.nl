'use client';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';
import { Button, ButtonGroup, Heading3, Page, Paragraph } from '@utrecht/component-library-react';
// import { UtrechtIconArrow } from '@utrecht/web-component-library-react';

export default function Home() {
  return (
    <Page>
      <Heading3>Gegevens Bevestiging</Heading3>
      <Paragraph>
        Beschikbaarheid <b> op donderdag 31 augustus 2023</b>.<br />
        Voor meer informatie over de aanhanger of bakfiets klikt u op de blauwe info- button achter de locatie.
        <br />
        <br />
        Reserveren kan per dagdeel (10.00 - 13.00 uur / 13.30 - 16.30 uur).
        <br />U heeft een account nodig om een reservering te maken. Klik in het gewenste dagdeel in de tijdsbalk
        hieronder om de reservering te starten.
      </Paragraph>

      <ButtonGroup>
        <Button appearance="primary-action-button">Gegevens bevestigen</Button>
        <Button appearance="secondary-action-button" type="reset" name="clear">
          Gegevens bewerken
        </Button>
      </ButtonGroup>
    </Page>
  );
}
