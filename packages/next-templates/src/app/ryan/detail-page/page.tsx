'use client';

import {
  ButtonLink,
  Document,
  Heading1,
  Heading5,
  Page,
  PageFooter,
  Paragraph,
} from '@utrecht/component-library-react';
import '../../styling/component-styles/footer.css';
import Logo from '../../styling/assets/voorbeeld-footer.svg';

export default function Home() {
  return (
    <Document>
      <Page>
        <Heading1>Melding ontbreken van een Roze Eenhoornparkeerzone</Heading1>
        <Paragraph>
          We begrijpen dat sommige van onze fantasierijke bewoners zich zorgen maken over het ontbreken van een
          essentiële faciliteit in onze gemeente: een parkeerzone speciaal voor roze eenhoorns. We erkennen de unieke
          behoeften van deze betoverende wezens en hun metgezellen, de vliegende huisdieren. Terwijl dit meldpunt vooral
          dient voor lichtvoetige absurditeit, willen we u graag een plek bieden om uw creativiteit te uiten.
        </Paragraph>
        <Paragraph>
          Ons doel is om een glimlach op uw gezicht te toveren en uw gevoel voor avontuur aan te wakkeren. Dus voel u
          vrij om uw gedachten, visuele kunstwerken en eenhoornverhalen met ons te delen. Vergeet niet dat terwijl we
          misschien niet in staat zijn om een echte roze eenhoornparkeerzone te creëren, we altijd genieten van uw
          deelname aan dit humoristische initiatief.
        </Paragraph>
        <Paragraph>
          <b>Ga naar het Meldingsformulier:</b>
        </Paragraph>
        <ButtonLink appearance="primary-action-button" href="./form">
          Maak melding
        </ButtonLink>
        <Paragraph>
          <i>
            Dank u voor uw bijdrage aan ons Absurde Meldpunt. We hopen dat u hebt genoten van deze unieke reis in de
            wereld van verbeelding.
          </i>
        </Paragraph>
        <PageFooter>
          <div className="example-link-list-container">
            <Logo className="example--footer-logo" />
            <ul className="utrecht-link-list utrecht-link-list--html-ul">
              <Heading5>Heading</Heading5>
              <li className="utrecht-link-list__item">
                <a href="#" className="utrecht-link">
                  Navigatie item
                </a>
              </li>
              <li className="utrecht-link-list__item">
                <a href="#" className="utrecht-link">
                  Navigatie item
                </a>
              </li>
              <li className="utrecht-link-list__item">
                <a href="#" className="utrecht-link">
                  Navigatie item
                </a>
              </li>
              <li className="utrecht-link-list__item">
                <a href="#" className="utrecht-link">
                  Navigatie item
                </a>
              </li>
            </ul>
            <ul className="utrecht-link-list utrecht-link-list--html-ul">
              <Heading5>Heading</Heading5>
              <li className="utrecht-link-list__item">
                <a href="#" className="utrecht-link">
                  Navigatie item
                </a>
              </li>
              <li className="utrecht-link-list__item">
                <a href="#" className="utrecht-link">
                  Navigatie item
                </a>
              </li>
              <li className="utrecht-link-list__item">
                <a href="#" className="utrecht-link">
                  Navigatie item
                </a>
              </li>
              <li className="utrecht-link-list__item">
                <a href="#" className="utrecht-link">
                  Navigatie item
                </a>
              </li>
            </ul>
            <ul className="utrecht-link-list utrecht-link-list--html-ul">
              <Heading5>Heading</Heading5>
              <li className="utrecht-link-list__item">
                <Paragraph className="utrecht-footer-paragraph">
                  Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *
                </Paragraph>
              </li>
            </ul>
          </div>
        </PageFooter>
      </Page>
    </Document>
  );
}
