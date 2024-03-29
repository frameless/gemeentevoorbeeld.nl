'use client';

import {
  Article,
  BreadcrumbNavLink,
  BreadcrumbNav,
  ButtonLink,
  Heading1,
  Heading2,
  Link,
  OrderedList,
  OrderedListItem,
  Page,
  PageContent,
  Paragraph,
  SpotlightSection,
  UnorderedList,
  UnorderedListItem,
  Heading3,
  BreadcrumbNavSeparator,
} from '@utrecht/component-library-react';
import '@/app/styling/css/detail-page.css';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';
import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import IconChevronRight from '../../../app/styling/assets/chevronRight.svg';

export default function Home() {
  return (
    <Page className="voorbeeld-page--flex">
      <ExampleHeader />
      <ExampleNavigation />
      <PageContent className="voorbeeld-page-content-flex">
        <Article id="main" className="voorbeeld-article-space">
          <BreadcrumbNav label="Kruimelpad">
            <BreadcrumbNavLink href="" index={0} rel="home">
              Home
            </BreadcrumbNavLink>
            <BreadcrumbNavSeparator>
              <IconChevronRight className="voorbeeld-chevron-right-space" />
            </BreadcrumbNavSeparator>
            <BreadcrumbNavLink href="" index={1}>
              Meldingen
            </BreadcrumbNavLink>
            <BreadcrumbNavSeparator>
              <IconChevronRight className="voorbeeld-chevron-right-space" />
            </BreadcrumbNavSeparator>
            <BreadcrumbNavLink href="" index={2} rel="up">
              Meldingen openbare ruimte
            </BreadcrumbNavLink>
          </BreadcrumbNav>
          <Heading1>Graffiti laten verwijderen van uw pand</Heading1>
          <Paragraph lead>
            Heeft u overlast van graffiti, posters of stickers op uw huis of pand? Meldpunt Graffiti zorgt ervoor dat
            deze gratis worden verwijderd.
          </Paragraph>

          <SpotlightSection className="voorbeeld-spotlight-section">
            <Heading2 className="voorbeeld-spotlight-section-heading-style">Op deze pagina</Heading2>
            <OrderedList>
              <OrderedListItem className="voorbeeld-ordered-list__item">
                <Link href="#toestemming">Eerst toestemming geven</Link>
              </OrderedListItem>
              <OrderedListItem className="voorbeeld-ordered-list__item">
                <Link href="#vervuiling">Dan vervuiling melden</Link>
              </OrderedListItem>
              <OrderedListItem className="voorbeeld-ordered-list__item">
                <Link href="#graffiti">Racistische graffiti melden</Link>
              </OrderedListItem>
              <OrderedListItem className="voorbeeld-ordered-list__item">
                <Link href="#weten">Goed om te weten</Link>
              </OrderedListItem>
              <OrderedListItem className="voorbeeld-ordered-list__item">
                <Link href="#hoe-lang">Hoe lang duurt het?</Link>
              </OrderedListItem>
              <OrderedListItem className="voorbeeld-ordered-list__item">
                <Link href="#contact">Contact</Link>
              </OrderedListItem>
              <OrderedListItem className="voorbeeld-ordered-list__item">
                <Link href="#zie-ook">Zie ook</Link>
              </OrderedListItem>
            </OrderedList>
          </SpotlightSection>
          <Paragraph className="voorbeeld-title-paragraph" small>
            Als u een koopwoning heeft of een pand van een particuliere eigenaar huurt of beheert, kunt u gebruik maken
            van de diensten van het Meldpunt Graffiti.
          </Paragraph>
          <Paragraph small>
            Als u een woning van een corporatie huurt, meldt u vervuiling direct aan hen. De corporatie verzorgt
            namelijk zelf de reiniging van hun panden.
          </Paragraph>

          <section id="toestemming">
            <Heading2>Eerst toestemming geven</Heading2>
            <UnorderedList>
              <UnorderedListItem>
                Graffiti of posters kunnen alleen worden verwijderd als u daarvoor toestemming geeft. U hoeft dit maar 1
                keer te doen. Heeft u al een keer toestemming gegeven? Dan kunt u de vervuiling meteen melden.
              </UnorderedListItem>
              <UnorderedListItem>
                Als u eigenaar, beheerder of gebruiker bent en in Den Haag woont kunt u het formulier met DigiD
                invullen. Uw inschrijving wordt dan digitaal verzonden.
              </UnorderedListItem>
              <UnorderedListItem>
                Nutsbedrijven (bijvoorbeeld Stedin, Ziggo, KPN), openbaar vervoersbedrijven (zoals de HTM en de NS) en
                rijksoverheidsinstellingen, zijn zelf verantwoordelijk voor het reinigen van hun objecten.
              </UnorderedListItem>
              <UnorderedListItem>
                Woont u niet in Den Haag of heeft u uw DigiD niet bij de hand? Vul het formulier dan in en print het.
                Het ondertekende formulier stuurt u naar 
                <Link href="https://www.figma.com/file/OlnanjplmeO3aWYzNKnNTo/Voorbeeld---Templates?type=design&node-id=501-878&mode=dev">
                  Meldpunt Graffiti
                </Link>
                . Dat kan als bijlage per <Link href="mailto:hallo@voorbeeld.nl">e-mail</Link> of per post.
              </UnorderedListItem>
            </UnorderedList>
            <Paragraph>
              <ButtonLink className="voorbeeld-button-link-space" appearance="primary-action-button" href="">
                Toestemming geven
              </ButtonLink>
            </Paragraph>
          </section>

          <section id="vervuiling">
            <Heading2>Dan vervuiling melden</Heading2>
            <Paragraph>
              Als u toestemming heeft gegeven, kunt u de vervuiling op uw pand melden met het meldingsformulier. De
              vervuiling wordt dan gratis verwijderd. Meld vervuiling met het meldingsformulier.
            </Paragraph>
            <Paragraph>
              <ButtonLink
                className="voorbeeld-button-link-space"
                appearance="primary-action-button"
                href="./graffiti-melding/form"
              >
                Melding doen
              </ButtonLink>
            </Paragraph>
          </section>

          <section id="graffiti">
            <Heading2>Racistische graffiti melden</Heading2>
            <Paragraph>
              Graffiti met racistisch karakter wordt binnen 24 uur verwijderd. Dit soort graffiti kunt u op werkdagen
              direct bij de gemeente melden via telefoonnummer 14070. In het weekend en op feestdagen belt u hiervoor de
              politie via 0900 - 88 44.
            </Paragraph>
          </section>

          <section id="weten">
            <Heading2>Goed om te weten</Heading2>
            <Heading3 className="voorbeeld-heading-3-space">Professioneel verwijderd</Heading3>
            <Paragraph>
              Het schoonmaken wordt altijd gedaan door een professioneel en gekwalificeerd schoonmaakbedrijf. Dat is
              belangrijk, omdat graffiti- en wildplakverwijdering specialistisch werk is en uw pand niet mag worden
              beschadigd. Naast schoonmaakspecialist zijn de schoonmakers daarom ook schilder en gevelspecialist.
            </Paragraph>
            <Heading3 className="voorbeeld-heading-3-space">Aangifte bij de politie</Heading3>
            <Paragraph>
              Als de graffiti te lezen is. Doet het Meldpunt Graffiti, namens u, aangifte bij de politie.
            </Paragraph>
          </section>

          <section id="hoe-lang">
            <Heading2>Hoe lang duurt het?</Heading2>
            <Paragraph>
              Graffiti, posters en stickers worden in principe binnen 5 werkdagen na melding verwijderd. Hoe snel dit
              gebeurt hangt af van de weersomstandigheden.
            </Paragraph>
          </section>

          <section id="contact">
            <Heading2>Contact</Heading2>
            <Paragraph>
              Het 
              <Link href="https://www.figma.com/file/OlnanjplmeO3aWYzNKnNTo/Voorbeeld---Templates?type=design&node-id=501-1396&mode=dev">
                Meldpunt Graffiti 
              </Link>
              van de gemeente coördineert het schoonmaken van de gevels en werkt samen met verschillende organisaties om
              de stad zoveel mogelijk vrij van graffiti te houden.
            </Paragraph>
          </section>

          <section id="zie-ook">
            <Heading2>Zie ook</Heading2>
            <UnorderedList className="voorbeeld-unordered-list-space">
              <Link href="https://www.figma.com/file/OlnanjplmeO3aWYzNKnNTo/Voorbeeld---Templates?type=design&node-id=501-1404&mode=dev">
                <UnorderedListItem>Graffiti in de openbare ruimte melden</UnorderedListItem>
              </Link>
            </UnorderedList>
          </section>
        </Article>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
