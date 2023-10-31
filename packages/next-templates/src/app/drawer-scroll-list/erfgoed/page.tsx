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
} from '@utrecht/component-library-react';
import '../styles/drawer-scroll-list.css';
import BackArrow from '../pijltje-rechts.svg';
import Kruisje from '../kruisje.svg';

export default function Home() {
  return (
    <Document>
      <Drawer id="voorbeeld--erfgoed-drawer" open>
        <header className="voorbeeld-drawer__header--sticky">
          <Heading3>Erfgoed</Heading3>
          <Button>
            <Kruisje />
          </Button>
        </header>
        <ul className="voorbeeld--unorderedlist-lijst">
          <li>
            <Link id="duitse_bommenwerper" href="#voorbeeld--button-drawer">
              Duitse bommenwerper
            </Link>
          </li>
          <li>
            <Link id="werf" href="#voorbeeld--button-drawer2">
              Werk aan de werf
            </Link>
          </li>
          <li>
            <Link id="vredebrug" href="#">
              Bouw en sloop van kasteel Vredenburg{' '}
            </Link>
          </li>
          <li>
            <Link id="cecilianklooster" href="#">
              Ceciliaklooster
            </Link>
          </li>
          <li>
            <Link id="middeleeuse-stadsmuur" href="#">
              Middeleeuwse stadsmuur
            </Link>
          </li>
          <li>
            <Link id="rijmvliet" href="#">
              Oude tempel in Rijnvliet?
            </Link>
          </li>
          <li>
            <Link id="dorp-aan-rivier" href="#">
              Dorp aan de rivier
            </Link>
          </li>
          <li>
            <Link id="romeinse-wachttoren" href="#">
              Romeinse wachttorens
            </Link>
          </li>
          <li>
            <Link id="blauwkapel" href="#">
              Kerkje van Blauwkapel
            </Link>
          </li>
          <li>
            <Link id="utrechtse-werven" href="#">
              De Utrechtse werven
            </Link>
          </li>
          <li>
            <Link id="domplein" href="#">
              Domplein
            </Link>
          </li>
          <li>
            <Link id="haardkuil-steentijd" href="#">
              Haardkuil uit de oude steentijd
            </Link>
          </li>
          <li>
            <Link id="janskerkhof" href="#">
              Janskerkhof
            </Link>
          </li>
          <li>
            <Link id="sterrenburg" href="#">
              Bijlhouwerstoren en Sterrenburg
            </Link>
          </li>
          <li>
            <Link id="natuur" href="#">
              Natuur op de forten
            </Link>
          </li>
          <li>
            <Link id="buurtoren" href="#">
              Buurtoren
            </Link>
          </li>
          <li>
            <Link id="plompetorengracht" href="#">
              Rondom de Plompetorengracht
            </Link>
          </li>
          <li>
            <Link id="herderplein" href="#">
              Herderplein in buurt Halve Maan
            </Link>
          </li>
          <li>
            <Link href="#" id="kamp">
              Rondom de Nieuwe Kamp
            </Link>
          </li>
          <li>
            <Link href="#" id="kanunniken">
              Kanunniken te paard?
            </Link>
          </li>
          <li>
            <Link href="#" id="paulusabdij">
              Paulusabdij
            </Link>
          </li>
        </ul>
      </Drawer>

      <Drawer id="voorbeeld--button-drawer">
        <header>
          <ButtonLink id="voorbeeld-button-update" href="#duitse_bommenwerper">
            <BackArrow />
          </ButtonLink>
          <Button>
            <Kruisje />
          </Button>
        </header>
        <div className="content">
          <Image
            alt="Duitse Bommenwerper in de lucht tijdens de tweede wereldoorlog"
            src="/nl-design-system-templates/packages/next-templates/src/app/drawer-scroll-list/erfgoed/duitsebommer.jpg"
          />
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
          </DataList>
        </div>
      </Drawer>

      <Drawer id="voorbeeld--button-drawer2">
        <header>
          <ButtonLink id="voorbeeld-button-update" href="#werf">
            <BackArrow />
          </ButtonLink>
          <Button>
            <Kruisje />
          </Button>
        </header>
        <div className="content">
          <Image
            alt="Constructie bij de werf"
            src="/nl-design-system-templates/packages/next-templates/src/app/drawer-scroll-list/erfgoed/duitsebommer.jpg"
          />
        </div>
        <div className="details">
          <Heading3>Werk aan de werf</Heading3>
          <Paragraph>
            Utrecht staat bekend om zijn werven en werfkelders. De eigenaren van de grachtenpanden moesten deze vroeger
            onderhouden. In de 20e eeuw raakten de werven in verval. Toen nam de gemeente Utrecht het eigendom van de
            werfmuren en kades over. Verschillende restauratierondes volgden.
          </Paragraph>
        </div>
        <div className="links">
          <Link href="https://www.cssscript.com/easy-sliding-drawer/">SVGLees het verhaal op de site SVG2 </Link>
        </div>
        <div className="details">
          <DataList>
            <div>
              <dt>Periode</dt>
              <dd>Moderne tijd</dd>
            </div>
            <div>
              <dt>Thema</dt>
              <dd>Gebouwen</dd>
            </div>
            <div>
              <dt>Tags</dt>
              <dd>Woningbouw</dd>
            </div>
          </DataList>
        </div>
      </Drawer>
    </Document>
  );
}
