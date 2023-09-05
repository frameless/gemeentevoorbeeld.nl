'use client';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';
import {
  Button,
  ButtonGroup,
  ButtonLink,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormLabel,
  Heading3,
  Link,
  Page,
  Paragraph,
  RadioButton,
} from '@utrecht/component-library-react';
import { useSearchParams } from 'next/navigation';
import { DateValue } from '@/components-savi/DateValue';
import { EmptyIndicator } from '@/components-savi/EmptyIndicator';

export default function Home() {
  const searchParams = useSearchParams();

  return (
    <Page>
      <Heading3>Gegevens Bevestiging</Heading3>
      <Paragraph>
        {/* {searchParams.get('aanhangerbakfiets')}
        {searchParams.get('datums beschikbaarheid')} */}
        Beschikbaarheid van{' '}
        <Link>
          <strong>{searchParams.get('aanhangerbakfiets')}</strong>
        </Link>
        {' op '}
        <strong>
          {searchParams.get('datums beschikbaarheid') ? (
            <DateValue dateTime={searchParams.get('datums beschikbaarheid')} locale="nl" />
          ) : (
            <EmptyIndicator title="No date given" />
          )}
        </strong>
        .<br />
        Voor meer informatie over de aanhanger of bakfiets klikt u op de blauwe info- button achter de locatie.
        <br />
        <br />
        Reserveren kan per dagdeel (10.00 - 13.00 uur / 13.30 - 16.30 uur).
        <br /> Klik in het gewenste dagdeel in de tijdsbalk hieronder om de reservering te starten.
      </Paragraph>

      <form className="utrecht-form" method="GET">
        <Fieldset id="only" role="radiogroup">
          <FieldsetLegend>Selecteer uw gewenste dagdeel</FieldsetLegend>
          <FormField type="radio">
            <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
              <FormLabel htmlFor="aaaa" type="radio">
                <RadioButton className="utrecht-form-field__input" id="aaaa" name="dagdeel" value="1" />
                10.00 - 13.00 uur
              </FormLabel>
            </Paragraph>
          </FormField>
          <FormField type="radio">
            <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
              <FormLabel htmlFor="bbbb" type="radio">
                <RadioButton className="utrecht-form-field__input" id="bbbb" name="dagdeel" value="2" />
                13.30 - 16.30 uur
              </FormLabel>
            </Paragraph>
          </FormField>
        </Fieldset>

        <ButtonGroup>
          <Button appearance="primary-action-button" type="submit">
            Gegevens bevestigen
          </Button>
          <ButtonLink appearance="secondary-action-button" href="/savi/form">
            Gegevens bewerken
          </ButtonLink>
        </ButtonGroup>
      </form>
    </Page>
  );
}
