'use client';
import { Button, DataList, Document, Drawer, Heading3, Image, Link, Paragraph } from '@utrecht/component-library-react';
import '../styles/drawer-scroll-list.css';

export default function Home() {
  return (
    <Document>
      <Drawer id="voorbeeld--erfgoed-drawer" open>
        <header className="voorbeeld-drawer__header--sticky">
          <Heading3>Erfgoed</Heading3>
          <Button>X</Button>
        </header>
        <ul className="voorbeeld--unorderedlist-lijst">
          <li>
            <Link id="voorbeeld-button-update" href="#voorbeeld--button-drawer">
              Duitse bommenwerper
            </Link>
          </li>
          <li>
            <Link>Werk aan de werf</Link>
          </li>
          <li>
            <Link>Bouw en sloop van kasteel Vredenburg </Link>
          </li>
          <li>
            <Link>Ceciliaklooster</Link>
          </li>
          <li>
            <Link>Middeleeuwse stadsmuur</Link>
          </li>
          <li>
            <Link>Oude tempel in Rijnvliet?</Link>
          </li>
          <li>
            <Link>Dorp aan de rivier</Link>
          </li>
          <li>
            <Link>Romeinse wachttorens</Link>
          </li>
          <li>
            <Link>Kerkje van Blauwkapel</Link>
          </li>
          <li>
            <Link>De Utrechtse werven</Link>
          </li>
          <li>
            <Link>Domplein</Link>
          </li>
          <li>
            <Link>Haardkuil uit de oude steentijd</Link>
          </li>
          <li>
            <Link>Janskerkhof</Link>
          </li>
          <li>
            <Link>Bijlhouwerstoren en Sterrenburg</Link>
          </li>
          <li>
            <Link>Natuur op de forten</Link>
          </li>
          <li>
            <Link>Buurtoren</Link>
          </li>
          <li>
            <Link>Rondom de Plompetorengracht</Link>
          </li>
          <li>
            <Link>Herderplein in buurt Halve Maan</Link>
          </li>
          <li>
            <Link>Rondom de Nieuwe Kamp</Link>
          </li>
          <li>
            <Link> Kanunniken te paard?</Link>
          </li>
          <li>
            <Link id="paulusabdij" href="#voorbeeld--button-drawer">
              Paulusabdij
            </Link>
          </li>
        </ul>
      </Drawer>

      <Drawer id="voorbeeld--button-drawer">
        <header>
          <Heading3>Duitse bommenwerper</Heading3>

          <Link id="voorbeeld-button-update" href="#paulusabdij">
            Terug
          </Link>
          <Button>Dicht maken</Button>
        </header>
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
