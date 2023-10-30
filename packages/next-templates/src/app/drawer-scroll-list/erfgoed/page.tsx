'use client';
import {
  Button,
  ButtonLink,
  Document,
  Drawer,
  Heading3,
  PageHeader,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import '../styles/drawer-scroll-list.css';

export default function Home() {
  return (
    <Document>
      <Drawer open>
        <PageHeader className="voorbeeld--sticky-header">
          <Heading3>Erfgoed</Heading3>
          <Button>X</Button>
        </PageHeader>
        <UnorderedList>
          <UnorderedListItem>
            <ButtonLink>Duitse bommenwerper</ButtonLink>
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
          <UnorderedListItem>
            <ButtonLink>Zwaard uit de Krommerijn</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Fort Blauwkapel</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Huizen van Zocher</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Toren Het Paard</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Tolsteegpoort</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Nicolaïtoren</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Hommelbos: een tuin van landgoed Welgelegen</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Rond het Nicolaaskerkhof</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Eten in de vroege middeleeuwen</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Het Utrechtse Schip</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Singelroute</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Kikkers in Leidsche Rijn</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Onder het Domplein</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Vrouwjuttenhof</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Bastion Zonnenburg</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Middeleeuws riool Mariaplaats</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Middeleeuws huis Steenweg</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Fort aan de Klop</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Paardenveld</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Rituele maaltijden</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Schepen van de Waterstraat</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Tivoli aan de Oudegracht</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Boerderij de Coehoorn</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Torenuurwerk Commiezenhuis</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>Utrechts Psalter</ButtonLink>
          </UnorderedListItem>
          <UnorderedListItem>
            <ButtonLink>De Neder-Germaanse Limes</ButtonLink>
          </UnorderedListItem>
        </UnorderedList>
      </Drawer>
    </Document>
  );
}
