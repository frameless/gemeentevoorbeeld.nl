'use client';
import { Button, DataList, Drawer, Heading3, Image, Link, Page, Paragraph } from '@utrecht/component-library-react';
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

const drawerData = [
  [
    {
      title: 'Duitse Bommenwerper',
      info: 'Utrechtse archeologen onderzochten in 2010 een neergestorte Duitse bommenwerper. Lees was ze ontdekte overhet vliegtuig.',
      linkHref: 'https://erfgoed.utrecht.nl/verhalen/duitse-bommenwerper/',
      period: 'Moderne tijd',
      theme: 'Archeologie',
      tags: 'Oorlog en verdediging',
    },
  ],
  [
    {
      title: 'Werk aan de werf',
      info: 'Utrecht staat bekend om zijn werven en werfkelders. De eigenaren van de grachtenpanden moesten deze vroeger onderhouden. In de 20e eeuw raakten de werven in verval. Toen nam de gemeente Utrecht het eigendom van de werfmuren en kades over. Verschillende restauratierondes volgden.',
      linkHref: 'https://erfgoed.utrecht.nl/verhalen/werk-aan-de-werf/',
      period: 'Moderne tijd',
      theme: 'Gebouwen',
      tags: 'Woningbouw',
    },
  ],
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [erfopen, setErfopen] = useState(false);
  const [place, setPlace] = useState(0);

  function addOpen() {
    setOpen(true);
  }

  function closeOpen() {
    setOpen(false);
  }

  function closeAll() {
    setOpen(false);
    setErfopen(false);
  }

  function openErfOpen(data: string) {
    setErfopen(true);
    setPlace(itemSelection(data));
  }

  function closeErfOpen() {
    setErfopen(false);
  }

  function itemSelection(id: string) {
    if (id !== undefined) {
      return linkData.findIndex((obj) => obj.id === id);
    } else {
      setErfopen(false);
      return 0;
    }
  }
  return (
    <Page>
      <Button onClick={addOpen}>open drawer</Button>
      <Drawer className="voorbeeld-drawer voorbeeld-drawer--erfgoed-drawer" open={open}>
        <header className="voorbeeld-drawer__header voorbeeld-drawer__header--sticky">
          <Heading3>Erfgoed</Heading3>
          <Button onClick={closeOpen}>
            <Kruisje />
          </Button>
        </header>
        <ul className="voorbeeld--unorderedlist-lijst">
          {linkData.map(({ id, href, content }) => (
            <li>
              <Link onClick={() => openErfOpen(id)} id={id} href={href}>
                {content}
              </Link>
            </li>
          ))}
        </ul>
      </Drawer>

      <Drawer className="voorbeeld-drawer voorbeeld-drawer--button-drawer" open={erfopen}>
        <header>
          <Button onClick={closeErfOpen} className="voorbeeld-drawer__button-back" aria-label="terug">
            <BackArrow />
          </Button>
          <Button onClick={closeAll} className="voorbeeld-drawer__button-close" aria-label="sluit">
            <Kruisje />
          </Button>
        </header>
        {/* <div className="content">
          <Image
            alt="Duitse Bommenwerper in de lucht tijdens de tweede wereldoorlog"
            src="/nl-design-system-templates/packages/next-templates/src/app/drawer-scroll-list/erfgoed/duitsebommer.jpg"
          />
        </div> */}
        {drawerData[place].map(({ title, info, linkHref, period, theme, tags }) => (
          <div className="voorbeeld-drawer__details">
            <Heading3>{title}</Heading3>
            <Paragraph>{info}</Paragraph>
            <div>
              <Link className="links" href={linkHref}></Link>
            </div>
            <div className="voorbeeld-drawer__datalist">
              <DataList>
                <div>
                  <dt>Period</dt>
                  <dd>{period}</dd>
                </div>
                <div>
                  <dt>Thema</dt>
                  <dd>{theme}</dd>
                </div>
                <div>
                  <dt>Tags</dt>
                  <dd>{tags}</dd>
                </div>
              </DataList>
            </div>
          </div>
        ))}
      </Drawer>
    </Page>
  );
}
