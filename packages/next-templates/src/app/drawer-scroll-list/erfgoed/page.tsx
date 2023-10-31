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
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import '../styles/drawer-scroll-list.css';

export default function Home() {
  return (
    <Document>
      <Drawer id="voorbeeld--erfgoed-drawer" open>
        <header className="voorbeeld-drawer__header--sticky">
          <Heading3>Erfgoed</Heading3>
          <Button>X</Button>
        </header>
        <UnorderedList className="voorbeeld--unorderedlist-lijst">
          <UnorderedListItem>
            <ButtonLink id="voorbeeld-button-update" href="#voorbeeld--button-drawer">
              Duitse bommenwerper
            </ButtonLink>
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
            <ButtonLink id="paulusabdij" href="#voorbeeld--button-drawer">
              Paulusabdij
            </ButtonLink>
          </UnorderedListItem>
        </UnorderedList>
      </Drawer>

      <Drawer id="voorbeeld--button-drawer">
        <header>
          <Heading3>Duitse bommenwerper</Heading3>

          <ButtonLink id="voorbeeld-button-update" href="#paulusabdij">
            Terug
          </ButtonLink>
          <Button>Dicht maken</Button>
        </header>
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
          <Link href="https://www.cssscript.com/easy-sliding-drawer/">SVGLees het verhaal op de site SVG2 </Link>
        </div>
        <div className="details">
          {' '}
          <DataList>
            <div>
              <dt>Periode</dt>
              <dd>Moderne tijd</dd>
            </div>
            <div>
              <dt>Thema</dt>
              <dd>Archeologie</dd>
            </div>
            <div>
              <dt>Tags</dt>
              <dd>Oorlog en verdediging</dd>
            </div>
          </DataList>{' '}
        </div>
      </Drawer>
    </Document>
  );
}
