'use client';

import {
  Article,
  Button,
  Document,
  Heading1,
  Heading2,
  Page,
  PageContent,
  Paragraph,
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
          </Article>
        </PageContent>
        <ExampleFooterFocus />
      </Page>
    </Document>
  );
}
