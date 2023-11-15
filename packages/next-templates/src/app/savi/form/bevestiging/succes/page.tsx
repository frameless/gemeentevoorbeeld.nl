'use client';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';
import { Heading3, Page, Paragraph } from '@utrecht/component-library-react';
import { useSearchParams } from 'next/navigation';
import { DateValue } from '@/components/DateValue';
import { EmptyIndicator } from '@/components/EmptyIndicator';

export default function Home() {
  const searchParams = useSearchParams();

  return (
    <Page>
      <Heading3>Gegevens Bevestiging</Heading3>
      <Paragraph>
        U hebt gekozen voor: <strong>{searchParams?.get('aanhanger bakfiets')}</strong>
        {' op '}
        <strong>
          {searchParams?.get('datums beschikbaarheid') ? (
            <DateValue dateTime={searchParams?.get('datums beschikbaarheid')!} locale="nl" />
          ) : (
            <EmptyIndicator title="No date given" />
          )}
        </strong>{' '}
        om <strong>{searchParams?.get('dagdeel')}</strong>
      </Paragraph>
      {/* <Paragraph>
        <img
          width="50%"
          src="/business_corgi.jpeg"
          alt="Meneer Corgi is tevreden met uw aanvraag."
          style={ marginInline: 'auto', display: 'block' }
        />
        </strong>
        <strong> Om {searchParams?.get('dagdeel')}</strong>
      </Paragraph> */}
    </Page>
  );
}
