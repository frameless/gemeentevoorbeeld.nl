'use client';

import {
  Article,
  BreadcrumbNavLink,
  BreadcrumbNav,
  BreadcrumbNavSeparator,
  Document,
  Heading1,
  Heading2,
  Heading3,
  Link,
  Paragraph,
  Page,
  PageContent,
} from '@utrecht/component-library-react';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import { ExampleFooterFocus } from '@/components/ExampleFooter/ExampleFooterFocus/ExampleFooterFocus';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { UtrechtDigidLogo, UtrechtIconArrow } from '@utrecht/web-component-library-react';
import { ExampleHeaderFunnelWmebv } from '@/components/wmebv/Header/ExampleHeaderFunnelWmebv';

import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import BacklinkIcon from '@/app/styling/assets/backlink-icon.svg';
import IconChevronRight from '../../app/styling/assets/chevronRight.svg';
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

        <PageContent>
          <BreadcrumbNav label="Kruimelpad">
            <BreadcrumbNavLink href="" index={0} rel="home">
              Home
            </BreadcrumbNavLink>
            <BreadcrumbNavSeparator>
              <IconChevronRight className="voorbeeld-chevron-right-space" />
            </BreadcrumbNavSeparator>
            <BreadcrumbNavLink href="" index={1}>
              Mijn Omgeving{' '}
            </BreadcrumbNavLink>
          </BreadcrumbNav>

          <Article className="voorbeeld-article-space">
            <Heading1>Hallo Jeroen van Drouwen</Heading1>
            <Paragraph>
              In ‘Mijn omgeving’ kunt u zelf uw persoonlijke zaken regelen wanneer het u uitkomt. U kunt bijvoorbeeld uw
              rekeningen betalen en zien wanneer uw aanvraag klaar is.
            </Paragraph>

            <Heading2>Wat moet ik regelen?</Heading2>
            <Paragraph>U hoeft op dit moment niets te regelen.</Paragraph>

            <Heading2>Mijn zaken</Heading2>
          </Article>
        </PageContent>

        <ExampleFooter />
      </Page>
    </Document>
  );
}
