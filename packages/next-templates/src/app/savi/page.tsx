'use client';

import {
  Article,
  BreadcrumbLink,
  BreadcrumbNav,
  ButtonLink,
  Heading1,
  Heading2,
  Heading3,
  Link,
  Page,
  PageContent,
  Paragraph,
  Strong,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';
import { UtrechtIconArrow } from '@utrecht/web-component-library-react';

export default function Home() {
  return (
    <Page>
      <PageContent>
        <Paragraph>
          <BreadcrumbNav appearance="arrows" label="Kruimelpad">
            {' '}
            <BreadcrumbLink href="/" index={0} rel="home">
              Home
            </BreadcrumbLink>
            <BreadcrumbLink href="/a/" index={1}>
              Online loket
            </BreadcrumbLink>
            <BreadcrumbLink href="/a/b/" index={2} rel="up">
              Producten
            </BreadcrumbLink>
          </BreadcrumbNav>
        </Paragraph>
        <Article>
          <Heading1>Aanhanger of bakfiets lenen</Heading1>
          <Paragraph>
            Bij de{' '}
            <Link href="https://www.utrecht.nl/wonen-en-leven/afval/afvalscheidingsstations/">
              afvalscheidingsstations
            </Link>{' '}
            kunt u gratis een aanhanger of een bakfiets lenen voor het wegbrengen van uw grofvuil of snoeiafval. Of voor
            de aanleg van een geveltuin.
          </Paragraph>
          <Heading2>Hoe werkt het?</Heading2>
          <Paragraph>U kunt een aanhanger of bakfiets lenen voor een dagdeel:</Paragraph>
          <UnorderedList>
            <UnorderedListItem>openingstijd - 13.00 uur</UnorderedListItem>
            <UnorderedListItem>
              13.30 - 16.30 uur (u kunt de aanhanger of bakfiets tot 15.30 uur ophalen)
            </UnorderedListItem>
          </UnorderedList>
          <Paragraph>
            Reserveer deze minimaal 1 dag van tevoren. Leent u de aanhanger of bakfiets voor de aanleg van een
            geveltuin? Reserveer dan altijd de hele dag, dus 2 dagdelen.
          </Paragraph>
          <Paragraph>
            <ButtonLink appearance="primary-action-button" href="savi/form/">
              Reserveer aanhanger of bakfiets <UtrechtIconArrow></UtrechtIconArrow>
            </ButtonLink>
          </Paragraph>
          <Heading2>Afmetingen</Heading2>
          <UnorderedList>
            <UnorderedListItem>De aanhanger is een open kar van 2 x 1,1 x 0,34 m.</UnorderedListItem>
            <UnorderedListItem>De grootte van de bakfiets is 1 x 0,5 x 0,6 m.</UnorderedListItem>
          </UnorderedList>
          <Heading2>Meenemen</Heading2>
          <UnorderedList>
            <UnorderedListItem>
              Uw rijbewijs (B of BE). <Strong>(alleen bij aanhanger)</Strong>
            </UnorderedListItem>
            <UnorderedListItem>
              Een groene kaart (internationaal verzekeringsbewijs; alleen nodig bij buitenlands rijbewijs).{' '}
              <Strong>(alleen bij anhanger)</Strong>
            </UnorderedListItem>
            <UnorderedListItem>
              Extra kentekenplaat van uw auto. <Strong>(alleen bij aanhanger)</Strong>
            </UnorderedListItem>
            <UnorderedListItem>€ 100 (contant) voor de borg.</UnorderedListItem>
            <UnorderedListItem>Net of zeil voor het afdekken van de lading.</UnorderedListItem>
            <UnorderedListItem>
              Bevat uw afval{' '}
              <Link href="https://www.utrecht.nl/wonen-en-leven/bouwen-en-verbouwen/u-wilt-slopen-of-asbest-weghalen/asbest/asbest-zelf-weghalen/">
                asbest
              </Link>
              ? Neem dan uw toestemmingsbewijs voor het verwijderen van asbest mee.
            </UnorderedListItem>
          </UnorderedList>
          <Heading2>Regels</Heading2>
          <UnorderedList>
            <UnorderedListItem>
              Alleen inwoners van Utrecht mogen een aanhanger of een bakfiets lenen. Bedrijven niet.
            </UnorderedListItem>
            <UnorderedListItem>
              U leent een aanhanger of een bakfiets alleen voor het vervoeren van grofvuil. Of voor materialen om een
              geveltuin aan te leggen.
            </UnorderedListItem>
            <UnorderedListItem>U dekt de lading af met een zeil of net.</UnorderedListItem>
            <UnorderedListItem>
              U mag uw vuil bij ieder afvalscheidingsstation inleveren. Let op: de aanhanger of de bakfiets moet u wel
              op tijd terugbrengen bij het afvalscheidingsstation waar u deze hebt geleend.
            </UnorderedListItem>
            <UnorderedListItem>
              U mag een ander persoon machtigen om uw aanhangwagen of bakfiets op te halen en/of in te leveren. Daarvoor
              is een toestemmingsverklaring nodig (kan gewoon een briefje zijn met toestemming en handtekening),
              legitimatie van degene die machtigt en van de gemachtigde.
            </UnorderedListItem>
            <UnorderedListItem>
              Een aanhanger of een bakfiets brengt u schoon terug. Leent u de aanhanger of bakfiets voor de aanleg van
              een geveltuin? Dan kunt u het zand mee terugnemen naar het afvalscheidingsstation. Op het
              afvalscheidingsstation kunt u de aanhanger of bakfiets schoonvegen.
            </UnorderedListItem>
            <UnorderedListItem>
              Let op: laadt de bakfiets niet te zwaar. Om het afvalstation te bereiken moet u een heuveltje op.
            </UnorderedListItem>
          </UnorderedList>
          <Heading3> Aanvullende regels voor het huren van een aanhanger </Heading3>
          <UnorderedList>
            <UnorderedListItem>De aanhanger mag achter uw eigen auto, met een B/BE rijbewijs.</UnorderedListItem>
            <UnorderedListItem>
              De aanhanger heeft een 7-polige stekker. Heeft uw voertuig een 13-polige stroomaansluiting? Zorg dan zelf
              voor een verloopstekker.
            </UnorderedListItem>
            <UnorderedListItem>De maximale belading van de aanhanger is 500 kg.</UnorderedListItem>
          </UnorderedList>
          {/* <Paragraph>
            <Link
              href="https://www.kcmsurvey.com/qSwudd733b9c27c2e91ba8c7b598MaSd?webpagina=Product%20-%20Aanhanger%20of%20bakfiets%20lenen"
              target="_blank"
            >
              Wat vindt u van deze pagina?
            </Link>
          </Paragraph>
          <Paragraph>
            <Link href="#body-main">Naar boven</Link>
          </Paragraph> */}
        </Article>
      </PageContent>
    </Page>
  );
}
