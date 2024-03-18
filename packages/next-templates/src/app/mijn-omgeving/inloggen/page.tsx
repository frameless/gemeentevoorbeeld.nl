'use client';

import {
  Article,
  Button,
  ButtonGroup,
  Heading1,
  Heading2,
  Icon,
  Link,
  Page,
  PageContent,
  Paragraph,
} from '@utrecht/component-library-react';
import { UtrechtDigidLogo } from '@utrecht/web-component-library-react';
import { ExampleHeaderFunnelWmebv } from '@/components/wmebv/Header/ExampleHeaderFunnelWmebv';
import { ExampleFooterWmebv } from '@/components/wmebv/Footer/ExampleFooterWmebv';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { Fieldset, FieldsetLegend, FormField, FormLabel, RadioButton } from '@utrecht/component-library-react';
import BacklinkIcon from '@/app/styling/assets/backlink-icon.svg';
import { IconArrowLeft } from '@tabler/icons-react';
import '@/app/styling/css/wmebv.css';
import '@/app/styling/css/detail-page.css';
import '@utrecht/design-tokens/dist/index.css';
import { useEffect } from 'react';

export default function home() {
  const stepLabel = 'Vraag aan de gemeente';
  const websiteLabel = 'gemeente Voorbeeld';

  useEffect(() => {
    if (typeof document?.title === 'string') {
      document.title = `${stepLabel} - ${websiteLabel}`;
    }
  }, []);

  return (
    <Page>
      <ExampleHeaderFunnelWmebv /> {/* use wmebv nav header or standard? */}
      <PageContent></PageContent>
      <ExampleFooterWmebv />
    </Page>
  );
}
