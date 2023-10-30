'use client';
import {
  Button,
  ButtonLink,
  DataList,
  Document,
  Drawer,
  Heading3,
  Image,
  Link,
  PageHeader,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import '../styles/drawer-scroll-list.css';

export default function Home() {
  return (
    <Document>
      <Drawer id="voorbeeld--erfgoed-drawer" open>
        <PageHeader className="voorbeeld--sticky-header">
          <Heading3>Erfgoed</Heading3>
          <Button>X</Button>
        </PageHeader>
        <UnorderedList className="voorbeeld--unorderedlist-lijst">
          <UnorderedListItem>
            <ButtonLink href="#voorbeeld--button-drawer">Duitse bommenwerper</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Werk aan de werf</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Bouw en sloop van kasteel Vredenburg </ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Ceciliaklooster</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Middeleeuwse stadsmuur</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Oude tempel in Rijnvliet?</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Dorp aan de rivier</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Romeinse wachttorens</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Kerkje van Blauwkapel</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>De Utrechtse werven</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Domplein</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Haardkuil uit de oude steentijd</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Janskerkhof</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Bijlhouwerstoren en Sterrenburg</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Natuur op de forten</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Buurtoren</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Rondom de Plompetorengracht</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Herderplein in buurt Halve Maan</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Rondom de Nieuwe Kamp</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink> Kanunniken te paard?</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Paulusabdij</ButtonLink>
          </UnorderedListItem>
        </UnorderedList>
      </Drawer>
      <Drawer id="voorbeeld--button-drawer" open>
        <PageHeader>
          <Heading3>BLablabla</Heading3>
          <Button>blebleble</Button>
        </PageHeader>
        <UnorderedList className="voorbeeld--unorderedlist-lijst">
          <UnorderedListItem>
            <ButtonLink href="#voorbeeld--button-drawer">sdfsd</ButtonLink>
          </UnorderedListItem>
        </UnorderedList>
        <div className="content">
          <Image
            alt="Duitse Bommenwerper in de lucht tijdens de tweede wereldoorlog"
            src="/packages/next-templates/src/app/drawer-scroll-list/duitsebommenwerper.jpeg"
          ></Image>
        </div>
        <div className="details">
          <Heading3>Duitse bommenwerper</Heading3>
          <Paragraph>
            Utrechtse archeologen onderzochten in 2010 een neergestorte Duitse bommenwerper. Lees was ze ontdekte over
            het vliegtuig.
          </Paragraph>
        </div>
        <div className="links">
          <Link href="https://www.cssscript.com/easy-sliding-drawer/">Add svg icons</Link>
        </div>
        <div className="details">
          {' '}
          <DataList></DataList>{' '}
        </div>
      </Drawer>
    </Document>
  );
}
