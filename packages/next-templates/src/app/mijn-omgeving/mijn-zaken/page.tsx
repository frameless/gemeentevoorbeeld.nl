'use client';

import { Article, Document, Page, PageContent } from '@utrecht/component-library-react';

import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import '@/app/styling/css/detail-page.css';
import '@utrecht/design-tokens/dist/index.css';

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
        <ExampleHeader />
        <ExampleNavigation />

        <PageContent></PageContent>

        <ExampleFooter />
      </Page>
    </Document>
  );
}
