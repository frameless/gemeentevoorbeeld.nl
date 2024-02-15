'use client';

import {
  Article,
  Button,
  Document,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormLabel,
  Heading1,
  Heading2,
  Page,
  PageContent,
  Paragraph,
  RadioButton,
} from '@utrecht/component-library-react';
import '@/app/styling/css/form-page.css';
import BacklinkIcon from '@/app/styling/assets/backlink-icon.svg';
import { useForm } from 'react-hook-form';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import { ExampleFooterFocus } from '@/components/ExampleFooter/ExampleFooterFocus/ExampleFooterFocus';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ [key: string]: string }>({ reValidateMode: 'onBlur' });

  return (
    <Document>
      <Page>
        <ExampleHeaderFunnel />
        <ExampleNavigation />
        <PageContent>
          <Article className="voorbeeld-article-space">
            <Heading1>Verhuizing doorgeven</Heading1>

            <Heading2>Uw Gegevens</Heading2>
            <Paragraph>Naam</Paragraph>
            <Paragraph>Geboren</Paragraph>
            <Paragraph>Adress</Paragraph>

            <Heading2>Uw Situatie</Heading2>
            <Fieldset id="df861ef1-844a-42df-8365-b54f59474fb8" role="radiogroup">
              <FormField type="radio">
                <RadioButton id="right-now" name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3" value="1" />
                <FormLabel htmlFor="right-now" type="radio">
                  Ik ben eigenaar van de woning
                </FormLabel>
              </FormField>

              <FormField type="radio">
                <RadioButton id="shortly" name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3" value="2" />
                <FormLabel htmlFor="shortly" type="radio">
                  Ik heb een huurcontract en ik huur het gehele woning
                </FormLabel>
              </FormField>

              <FormField type="radio">
                <RadioButton id="when-pigs-can-fly" name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3" value="3" />
                <FormLabel htmlFor="when-pigs-can-fly" type="radio">
                  Ik heb een huurcontract en ik huur een deel van de woning
                </FormLabel>
              </FormField>

              <FormField type="radio">
                <RadioButton id="when-pigs-can-fly" name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3" value="4" />
                <FormLabel htmlFor="when-pigs-can-fly" type="radio">
                  Ik ga bij iemand wonen
                </FormLabel>
              </FormField>
            </Fieldset>
          </Article>
        </PageContent>
        <ExampleFooterFocus />
      </Page>
    </Document>
  );
}
