'use client';
import {
  Button,
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
            <Link id="voorbeeld-button-update" href="#voorbeeld--button-drawer">
              Duitse bommenwerper
            </Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link>Werk aan de werf</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link>Bouw en sloop van kasteel Vredenburg </Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link>Ceciliaklooster</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link>Middeleeuwse stadsmuur</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link>Oude tempel in Rijnvliet?</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link>Dorp aan de rivier</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link>Romeinse wachttorens</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link>Kerkje van Blauwkapel</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link>De Utrechtse werven</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link>Domplein</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link>Haardkuil uit de oude steentijd</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link>Janskerkhof</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link>Bijlhouwerstoren en Sterrenburg</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link>Natuur op de forten</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link>Buurtoren</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link>Rondom de Plompetorengracht</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link>Herderplein in buurt Halve Maan</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link>Rondom de Nieuwe Kamp</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link> Kanunniken te paard?</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link id="paulusabdij" href="#voorbeeld--button-drawer">
              Paulusabdij
            </Link>
          </UnorderedListItem>
        </UnorderedList>
      </Drawer>

      <Drawer id="voorbeeld--button-drawer">
        <header>
          <Heading3>Duitse bommenwerper</Heading3>

          <Link id="voorbeeld-button-update" href="#paulusabdij">
            Terug
          </Link>
          <Button>Dicht maken</Button>
        </header>
        <UnorderedList className="voorbeeld--unorderedlist-lijst">
          <UnorderedListItem>
            <Link href="#voorbeeld--button-drawer">sdfsd</Link>
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
