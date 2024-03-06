'use client';

import { Article, Document, Heading1, Page, PageContent } from '@utrecht/component-library-react';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { ExampleFooterFocus } from '@/components/ExampleFooter/ExampleFooterFocus/ExampleFooterFocus';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ [key: string]: string }>();

  return (
    <Document>
      <Page>
        <ExampleHeaderFunnel />
        <ExampleNavigation />
        <PageContent>
          <Article className="voorbeeld-article-space">
            <Heading1>Confirmation</Heading1>
          </Article>
        </PageContent>
      </Page>
      <ExampleFooterFocus />
    </Document>
  );
}
