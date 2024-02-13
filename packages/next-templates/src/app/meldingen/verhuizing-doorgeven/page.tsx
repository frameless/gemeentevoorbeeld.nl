'use client';

import {
  Article,
  AccordionProvider,
  ButtonLink,
  Document,
  Heading1,
  Heading2,
  Heading3,
  Link,
  Paragraph,
  Page,
  PageContent,
  SpotlightSection,
  UnorderedList,
  UnorderedListItem,
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
            <AccordionProvider
              sections={[
                {
                  className: 'voorbeeld-accordion__section',
                  headingLevel: 2,
                  body: (
                    <div>
                      <Paragraph className="voorbeeld-paragraph">
                        U hebt toestemming nodig van de persoon bij wie u gaat wonen. Dit is een bewoner van het adres
                        van 18 jaar of ouder. Bijvoorbeeld een van uw ouders of uw partner.
                      </Paragraph>

                      <Paragraph>Voeg deze bijlagen toe als u uw verhuizing online doorgeeft:</Paragraph>
                      <UnorderedList>
                        <UnorderedListItem>
                          Het ingevulde en met pen ondertekende formulier Verklaring van inwoning (pdf, 557 kB). Een
                          meerderjarige bewoner van het adres vult dit formulier in.
                        </UnorderedListItem>
                        <UnorderedListItem>
                          Een foto of een kopie van een geldig identiteitsbewijs van de persoon die toestemming geeft.
                          Dat kan een paspoort, ID-kaart of rijbewijs zijn.
                        </UnorderedListItem>
                        <UnorderedListItem>
                          De handtekening op de{' '}
                          <Link href="https://www.utrecht.nl/fileadmin/uploads/documenten/9.digitaalloket/Burgerzaken/Formulier-Verklaring-bewoning-adres.pdf">
                            Verklaring van inwoning
                          </Link>{' '}
                          moet overeenkomen met de handtekening op het identiteitsbewijs.
                        </UnorderedListItem>
                      </UnorderedList>
                    </div>
                  ),
                  label: 'U gaat bij iemand anders wonen',
                },
                {
                  className: 'voorbeeld-accordion__section',
                  headingLevel: 2,
                  body: (
                    <div>
                      <Paragraph>
                        U geeft het adres van de zorginstelling door als uw nieuwe adres. U hebt een kopie van het
                        verzorgingscontract of een verklaring van het verzorgingshuis nodig.
                      </Paragraph>
                      <Paragraph>
                        Iemand anders kan de verhuizing ook voor u doorgeven. Hij of zij heeft daarvoor ook het
                        verzorgingscontract of een verklaring van het verzorgingshuis nodig.
                      </Paragraph>
                    </div>
                  ),
                  label: 'U verhuist naar een zorginstelling',
                },
                {
                  className: 'voorbeeld-accordion__section',
                  headingLevel: 2,
                  body: (
                    <div>
                      <Paragraph>
                        Bijvoorbeeld naar een adres van het COA, het Leger des Heils, de Tussenvoorziening of het Kamer
                        Trainingscentrum. U geeft zelf uw verhuizing door. U hebt een verklaring van de instelling of
                        een kopie van uw overeenkomst met de instelling nodig.
                      </Paragraph>
                    </div>
                  ),
                  label: 'U verhuist naar opvang of een andere instelling',
                },
                {
                  className: 'voorbeeld-accordion__section',
                  headingLevel: 2,
                  body: (
                    <div>
                      <Paragraph>
                        U geeft dit tegelijk door met uw verhuizing. U hebt geen toestemming van de andere ouder nodig.
                      </Paragraph>
                    </div>
                  ),
                  label: 'Uw kind(eren) onder de 18 jaar verhuizen met u mee',
                },
                {
                  className: 'voorbeeld-accordion__section',
                  headingLevel: 2,
                  body: (
                    <div>
                      <Paragraph>
                        Geef de verhuizing door per post. Of maak een afspraak om langs te komen bij de balie. Zorg dat
                        u ook schriftelijke toestemming heeft van de andere ouder. De andere ouder ondertekent dit. Ook
                        hebt u een kopie nodig van het identiteitsbewijs van de andere ouder.
                      </Paragraph>
                    </div>
                  ),
                  label: 'Uw kind(eren) onder de 18 jaar verhuizen van de andere ouder naar u',
                },
              ]}
            />

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

            <Heading3>Online</Heading3>
            <Paragraph>U hebt nodig:</Paragraph>

            <UnorderedList>
              <UnorderedListItem>
                <Link href="https://www.digid.nl/">Uw Digid</Link>
              </UnorderedListItem>
              <UnorderedListItem>Als u verhuist naar een huurwoning of koopwoning:</UnorderedListItem>
              <UnorderedList>
                <UnorderedListItem>kopie van uw huurcontract of eigendomsbewijs</UnorderedListItem>
              </UnorderedList>
              <UnorderedListItem>Als u verhuist naar een instelling:</UnorderedListItem>
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
            </UnorderedList>

            <Heading3>Met DigiD</Heading3>
            <UtrechtDigidLogo className="voorbeeld-digid-logo" aria-label="DigiD logo" role="img" />
            <ButtonLink
              className="voorbeeld-button-link"
              appearance="primary-action-button"
              href="./verhuizing-doorgeven/form"
            >
              Geef verhuizing door
            </ButtonLink>

            <AccordionProvider
              sections={[
                {
                  className: 'voorbeeld-accordion__section',
                  headingLevel: 2,
                  body: (
                    <div>
                      <Paragraph className="voorbeeld-paragraph">
                        U kunt uw verhuizing ook doorgeven per post. U stuurt op:
                      </Paragraph>
                      <UnorderedList>
                        <UnorderedListItem>
                          Het ingevulde formulier{' '}
                          <Link href="https://www.utrecht.nl/fileadmin/uploads/documenten/9.digitaalloket/Burgerzaken/Formulier-Aangifte-adreswijziging.pdf">
                            Adreswijziging{' '}
                          </Link>{' '}
                          (pdf, 183 kB).
                        </UnorderedListItem>
                        <UnorderedListItem>
                          Kopie van uw geldige identiteitsbewijs (paspoort, ID-kaart of rijbewijs).
                        </UnorderedListItem>
                        <UnorderedListItem>
                          Als u verhuist naar een huurwoning of koopwoning:
                          <UnorderedList>
                            <UnorderedListItem>kopie van uw huurcontract of eigendomsbewijs</UnorderedListItem>
                          </UnorderedList>
                        </UnorderedListItem>
                        <UnorderedListItem>
                          Als u bij iemand anders gaat wonen:
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

                      <Paragraph>Hebt u alles ingevuld en ondertekend? Stuur het op naar:</Paragraph>
                      <Paragraph>
                        Gemeente voorbeeld <br/> Burgerzaken <br/> Postbus 1234 <br/> 1234 AB Utrecht
                      </Paragraph>
                    </div>
                  ),
                  label: 'Per post',
                },
                {
                  className: 'voorbeeld-accordion__section',
                  headingLevel: 2,
                  body: (
                    <div>
                      <Paragraph>
                        U kunt uw verhuizing ook doorgeven aan de balie. Maak hiervoor online een afspraak of bel naar
                        12 345.
                      </Paragraph>
                      <Paragraph>U neemt mee:</Paragraph>

                      <UnorderedList>
                        <UnorderedListItem>
                          Uw geldige identiteitsbewijs (paspoort, ID-kaart of rijbewijs).
                        </UnorderedListItem>
                        <UnorderedListItem>Als u verhuist naar een huurwoning of koopwoning:</UnorderedListItem>
                        <UnorderedList>
                          <UnorderedListItem>kopie van uw huurcontract of eigendomsbewijs</UnorderedListItem>
                        </UnorderedList>
                        <UnorderedListItem>Als u verhuist naar een instelling:</UnorderedListItem>
                        <UnorderedList>
                          <UnorderedListItem>
                            uw overeenkomst met de instelling of een verklaring van de instelling
                          </UnorderedListItem>
                        </UnorderedList>
                        <UnorderedListItem>Als u bij iemand anders gaat wonen:</UnorderedListItem>
                        <UnorderedList>
                          <UnorderedListItem>
                            Het ingevulde en met pen ondertekende formulier{' '}
                            <Link href="https://www.utrecht.nl/fileadmin/uploads/documenten/9.digitaalloket/Burgerzaken/Formulier-Verklaring-bewoning-adres.pdf">
                              Verklaring van inwoning
                            </Link>{' '}
                            (pdf, 64 kB).
                          </UnorderedListItem>
                          <UnorderedListItem>
                            kopie van een geldig identiteitsbewijs van de persoon bij wie u gaat wonen.
                          </UnorderedListItem>
                        </UnorderedList>
                      </UnorderedList>

                      <ButtonLink
                        className="voorbeeld-button-link"
                        appearance="primary-action-button"
                        href="./verhuizing-doorgeven/maak-een-afspraak"
                      >
                        Maak een afspraak
                      </ButtonLink>
                    </div>
                  ),
                  label: 'Aan de balie',
                },
              ]}
            />

            <Heading2>Na het doorgeven van uw verhuizing</Heading2>
            <Paragraph>
              Wij passen uw gegevens aan. Dat duurt ongeveer een week vanaf de verhuisdatum die u doorgeeft. Geeft u uw
              verhuizing van tevoren door? Dan verwerken wij de verhuizing vanaf de verhuisdatum die u doorgeeft. Op{' '}
              <Link href="https://mijn.overheid.nl/">MijnOverheid</Link> kunt u zien of uw verhuizing al verwerkt is.
            </Paragraph>

            <Paragraph>
              Wij geven uw verhuizing door aan een aantal organisaties. Op{' '}
              <Link href="https://www.rijksoverheid.nl/onderwerpen/privacy-en-persoonsgegevens/vraag-en-antwoord/wie-krijgen-mijn-persoonsgegevens-uit-brp">
                www.wiekrijgtmijngegevens.nl
              </Link>{' '}
              ziet u welke organisaties dit zijn.
            </Paragraph>

            <Heading2>Meer informatie</Heading2>
            <UnorderedList>
              <UnorderedListItem>
                Verhuist u naar een gebied waar betaald parkeren is? U kunt een{' '}
                <Link href="https://pki.utrecht.nl/Loket/product/072c0c626eaa6749c2e66a169466bace">
                  parkeervergunning aanvragen
                </Link>{' '}
                nadat uw verhuizing verwerkt is.
              </UnorderedListItem>
              <UnorderedListItem>
                Verhuist u binnen Utrecht en hebt u een parkeervergunning of staat u op de wachtlijst? Lees meer over{' '}
                <Link href="https://pki.utrecht.nl/Loket/product/b56ca6832d027c70623ac06470754237">
                  parkeervergunning en verhuizen.
                </Link>{' '}
              </UnorderedListItem>
              <UnorderedListItem>
                Hebt u geen woonadres? Dan kunt u misschien een{' '}
                <Link href="https://pki.utrecht.nl/Loket/product/e092a9b96cd92c14d36142b295966978">
                  briefadres aanvragen.
                </Link>
              </UnorderedListItem>
              <UnorderedListItem>
                Staat iemand onterecht op uw adres ingeschreven? Dan kunnen we een{' '}
                <Link href="https://pki.utrecht.nl/Loket/product/8e15db00bc88acfe844fc2226822024b">adresonderzoek</Link>{' '}
                starten.
              </UnorderedListItem>
              <UnorderedListItem>
                Informatie over{' '}
                <Link href="https://pki.utrecht.nl/Loket/product/3e70cf37a03c7f0441a1407c74d13bf9">
                  verhuizen naar het buitenland (emigreren).
                </Link>
              </UnorderedListItem>
              <UnorderedListItem>
                Informatie over{' '}
                <Link href="https://pki.utrecht.nl/Loket/product/0aaf6d6341dbccf4be35cede8e88180f">
                  inschrijven als u vanuit het buitenland naar Utrecht verhuist.
                </Link>
              </UnorderedListItem>
            </UnorderedList>
          </Article>
        </PageContent>
        <ExampleFooterFocus />
      </Page>
    </Document>
  );
}
