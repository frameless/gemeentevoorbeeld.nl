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
import { useState } from 'react';

const linkData = [
  { id: 'duitse_bommenwerper', href: '#voorbeeld--button-drawer', content: 'Duitse bommenwerper' },
  { id: 'werf', href: '#voorbeeld--button-drawer2', content: 'Werk aan de werf' },
  { id: 'vredebrug', href: '#', content: 'Bouw en sloop van kasteel Vredenburg' },
  { id: 'cecilianklooster', href: '#', content: 'Ceciliaklooster' },
  { id: 'middeleeuse-stadsmuur', href: '#', content: 'Middeleeuwse stadsmuur' },
  { id: 'rijmvliet', href: '#', content: 'Oude tempel in Rijnvliet?' },
  { id: 'dorp-aan-rivier', href: '#', content: 'Dorp aan de rivier' },
  { id: 'romeinse-wachttoren', href: '#', content: 'Romeinse wachttorens' },
  { id: 'blauwkapel', href: '#', content: 'Kerkje van Blauwkapel' },
  { id: 'utrechtse-werven', href: '#', content: 'De Utrechtse werven' },
  { id: 'domplein', href: '#', content: 'Domplein' },
  { id: 'haardkuil-steentijd', href: '#', content: 'Haardkuil uit de oude steentijd' },
  { id: 'janskerkhof', href: '#', content: 'Janskerkhof' },
  { id: 'sterrenburg', href: '#', content: 'Bijlhouwerstoren en Sterrenburg' },
  { id: 'natuur', href: '#', content: 'Natuur op de forten' },
  { id: 'buurtoren', href: '#', content: 'Buurtoren' },
  { id: 'plompetorengracht', href: '#', content: 'Rondom de Plompetorengracht' },
  { id: 'herderplein', href: '#', content: 'Herderplein in buurt Halve Maan' },
  { id: 'kamp', href: '#', content: 'Rondom de Nieuwe Kamp' },
  { id: 'kanunniken', href: '#', content: 'Kanunniken te paard?' },
  { id: 'paulusabdij', href: '#', content: 'Paulusabdij' },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  function addOpen() {
    setOpen(true);
  }

  function closeOpen() {
    setOpen(false);
  }

  return (
    <Document>
      <Button onClick={addOpen}>open drawer</Button>
      <Drawer id="voorbeeld--erfgoed-drawer" open={open}>
        <header className="voorbeeld-drawer__header--sticky">
          <Heading3>Erfgoed</Heading3>
          <Button onClick={closeOpen}>
            <Kruisje />
          </Button>
        </header>
        <ul className="voorbeeld--unorderedlist-lijst">
          {linkData.map(({ id, href, content }) => (
            <li>
              <Link id={id} href={href}>
                {content}
              </Link>
            </li>
          ))}
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
