'use client';

import {
  Article,
  Document,
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
  Page,
  PageContent,
} from '@utrecht/component-library-react';
import '@/app/styling/css/detail-page.css';
import '@utrecht/design-tokens/dist/index.css';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import { ExampleFooterFocus } from '@/components/ExampleFooter/ExampleFooterFocus/ExampleFooterFocus';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { UtrechtDigidLogo, UtrechtIconArrow } from '@utrecht/web-component-library-react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import BacklinkIcon from '@/app/styling/assets/backlink-icon.svg';

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ [key: string]: string }>();
}
