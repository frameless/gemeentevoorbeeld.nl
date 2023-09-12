'use client';

import {
  Document,
  Heading1,
  Heading5,
  Page,
  PageFooter,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import { NavigationList } from '../../../components/NavigationList';
import { NavigationListItem } from '../../../components/NavigationList/NavigationListItem';
import '../../styling/component-styles/footer.css';
import Logo from '../../styling/assets/voorbeeld-footer.svg';

export default function Home() {
  return (
    <Document>
      <Page>
        <Heading1>Melding Ontvangen: Ontbreken van een Roze Eenhoornparkeerzone</Heading1>
        <Paragraph>Beste [Uw Naam],</Paragraph>
        <Paragraph>
          Dank u wel voor uw creatieve bijdrage aan ons Absurde Meldpunt! We hebben uw melding over het ontbreken van
          een roze eenhoornparkeerzone voor vliegende huisdieren ontvangen en kunnen gerust stellen dat uw verzoek zeker
          in het rijk der verbeelding thuishoort.
        </Paragraph>
        <Paragraph>
          Hoewel we misschien niet in staat zijn om echte roze eenhoornparkeerzones te creëren, waarderen we uw deelname
          aan dit humoristische initiatief en uw bereidheid om een glimlach op ons gezicht te toveren.
        </Paragraph>
        <Paragraph>
          Als u ooit serieuze kwesties wilt melden of contact wilt opnemen met ons gemeentelijke meldpunt voor meer
          praktische zaken, bezoek dan onze officiële website voor de juiste contactinformatie.
        </Paragraph>
        <Paragraph>
          Nogmaals bedankt voor uw fantasierijke bijdrage. We hopen dat u hebt genoten van deze unieke reis in de wereld
          van verbeelding.
        </Paragraph>
        <Paragraph>Met vriendelijke groet,</Paragraph>
        <Paragraph>Het Team van het Gemeente Utrecht Absurde Meldpunt</Paragraph>
        <PageFooter className="example-footer">
          <Logo className="example--footer-logo" />
          <NavigationList className="example--footer-list utrecht-link-list utrecht-link-list--html-ul">
            <Heading5>Heading</Heading5>
            <NavigationListItem
              href="#"
              label="Navigatie item"
              className="utrecht-link-list-focus__item"
            ></NavigationListItem>
            <NavigationListItem
              href="#"
              label="Navigatie item"
              className="utrecht-link-list-focus__item"
            ></NavigationListItem>
            <NavigationListItem
              href="#"
              label="Navigatie item"
              className="utrecht-link-list-focus__item"
            ></NavigationListItem>
            <NavigationListItem
              href="#"
              label="Navigatie item"
              className="utrecht-link-list-focus__item"
            ></NavigationListItem>
          </NavigationList>
          <NavigationList className="example--footer-list utrecht-link-list utrecht-link-list--html-ul">
            <Heading5>Heading</Heading5>
            <NavigationListItem
              href="#"
              label="Navigatie item"
              className="utrecht-link-list-focus__item"
            ></NavigationListItem>
            <NavigationListItem
              href="#"
              label="Navigatie item"
              className="utrecht-link-list-focus__item"
            ></NavigationListItem>
            <NavigationListItem
              href="#"
              label="Navigatie item"
              className="utrecht-link-list-focus__item"
            ></NavigationListItem>
            <NavigationListItem
              href="#"
              label="Navigatie item"
              className="utrecht-link-list-focus__item"
            ></NavigationListItem>
          </NavigationList>
          <UnorderedList className="utrecht-link-list utrecht-link-list--html-ul">
            <UnorderedListItem className="utrecht-link-list__item">
              <Heading5>
                <br />
                Heading
              </Heading5>
              <Paragraph className="utrecht-footer-paragraph">
                Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *
              </Paragraph>
            </UnorderedListItem>
          </UnorderedList>
        </PageFooter>
      </Page>
    </Document>
  );
}
