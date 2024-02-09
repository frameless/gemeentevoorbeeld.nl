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
  UnorderedList,
  UnorderedListItem,
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

            <Paragraph>Soms gaat het doorgeven van uw verhuizing net iets anders. Kies uw situatie:</Paragraph>
            <Heading2>Wie kan de verhuizing doorgeven?</Heading2>

            <UnorderedList>
              <UnorderedListItem>Iedereen van 16 jaar of ouder.</UnorderedListItem>
              <UnorderedListItem>Ouders, voogden of verzorgers voor kinderen jonger dan 18 jaar.</UnorderedListItem>
              <UnorderedListItem>
                Woont u op hetzelfde adres en verhuist u naar hetzelfde nieuwe adres? Dan kunt u de verhuizing doorgeven
                voor:
                <UnorderedList>
                  <UnorderedListItem>uw ouders en uw meerderjarige kind of kinderen.</UnorderedListItem>
                  <UnorderedListItem>uw echtgenoot of geregistreerd partner.</UnorderedListItem>
                </UnorderedList>
              </UnorderedListItem>
            </UnorderedList>

            <Heading2>Verhuizing doorgeven</Heading2>
            <Paragraph>
              We kunnen uw verhuizing alleen verwerken als uw aanvraag compleet is. Soms mist er nog iets. Dan nemen we
              contact met u op. Daarom is het handig als u bij uw aanvraag uw telefoonnummer doorgeeft.
            </Paragraph>

            <Heading2>Online</Heading2>
            <Paragraph>U hebt nodig:</Paragraph>

            <UnorderedList>
              <UnorderedListItem>
                <Link href="https://www.digid.nl/">Uw Digid</Link>
              </UnorderedListItem>
              <UnorderedListItem>Als u verhuist naar een huurwoning of koopwoning:</UnorderedListItem>
              <UnorderedList>
                <UnorderedListItem>kopie van uw huurcontract of eigendomsbewijs</UnorderedListItem>
              </UnorderedList>
              <UnorderedListItem>
                Als u verhuist naar een instelling:
                <UnorderedList>
                  <UnorderedListItem>
                    uw overeenkomst met de instelling of een verklaring van de instelling
                  </UnorderedListItem>
                </UnorderedList>
                <UnorderedListItem>Als u bij iemand anders gaat wonen:</UnorderedListItem>
                <UnorderedList>
                  <UnorderedListItem>
                    het ingevulde en met pen ondertekende formulier{' '}
                    <Link href="https://www.utrecht.nl/fileadmin/uploads/documenten/9.digitaalloket/Burgerzaken/Formulier-Verklaring-bewoning-adres.pdf">
                      Verklaring van inwoning
                    </Link>{' '}
                    (pdf, 557 kB).
                  </UnorderedListItem>
                  <UnorderedListItem>
                    kopie van een geldig identiteitsbewijs van de persoon bij wie u gaat wonen.
                  </UnorderedListItem>
                </UnorderedList>
              </UnorderedListItem>
            </UnorderedList>
          </Article>
        </PageContent>
        <ExampleFooterFocus />
      </Page>
    </Document>
  );
}
