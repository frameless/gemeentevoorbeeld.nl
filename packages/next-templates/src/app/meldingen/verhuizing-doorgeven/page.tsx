'use client';

import {
  Article,
  Document,
  Heading1,
  Heading2,
  Link,
  Paragraph,
  Page,
  PageContent,
  SpotlightSection,
} from '@utrecht/component-library-react';
import '@/app/styling/css/detail-page.css';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import { ExampleFooterFocus } from '@/components/ExampleFooter/ExampleFooterFocus/ExampleFooterFocus';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { UtrechtIconArrow } from '@utrecht/web-component-library-react';
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

  return (
    <Document>
      <Page>
        <ExampleHeaderFunnel />
        <ExampleNavigation />
        <PageContent>
          <Article className="voorbeeld-article-space">
            <Link className="voorbeeld-link-back" href="./">
              <BacklinkIcon />
              <span className="voorbeeld-span--underlined">Terug</span>
            </Link>
            <Heading1 className="voorbeeld-heading-1">Verhuizing doorgeven</Heading1>
            <Paragraph>
              Als u verhuist naar Utrecht of binnen Utrecht, geeft u uw adres aan ons door. Verhuist u van Utrecht naar
              een andere gemeente? Geef dan uw verhuizing door in uw nieuwe gemeente.
            </Paragraph>

            <Link href="https://www.utrecht.nl/city-of-utrecht/moving-to-utrecht-or-moving-within-utrecht">
              <UtrechtIconArrow />
              Read this information in English
            </Link>
            <SpotlightSection className="voorbeeld-spotlight-section">
              <Heading2 className="voorbeeld-spotlight-section-heading-style">Verwerking duurt langer</Heading2>
              <Paragraph>
                Door extra drukte en onderbezetting van personeel kan de verwerking van uw verhuizing 14 dagen duren.
              </Paragraph>
            </SpotlightSection>
            <Heading2>Wanneer geeft u uw verhuizing door?</Heading2>
            <Paragraph>
              Uw verhuizing doorgeven kan vanaf 4 weken voordat u verhuist tot maximaal 5 dagen erna. Geeft u later dan
              5 dagen na uw verhuizing uw nieuwe adres door? Dan telt de dag waarop u het doorgeeft als uw verhuisdatum.
              Dit kan invloed hebben op bijvoorbeeld uw toeslagen of studiefinanciering.
            </Paragraph>
          </Article>
        </PageContent>
        <ExampleFooterFocus />
      </Page>
    </Document>
  );
}
