'use client';

import {
  Article,
  ButtonLink,
  Document,
  Heading1,
  Page,
  PageContent,
  Paragraph,
} from '@utrecht/component-library-react';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';

export default function Home() {
  return (
    <Document>
      <Page>
        <ExampleHeader />
        <ExampleNavigation />
        <PageContent>
          <Article className="voorbeeld-article-space">
            <Heading1>Melding ontbreken van een Roze Eenhoornparkeerzone</Heading1>
            <Paragraph>
              We begrijpen dat sommige van onze fantasierijke bewoners zich zorgen maken over het ontbreken van een
              essentiële faciliteit in onze gemeente: een parkeerzone speciaal voor roze eenhoorns. We erkennen de
              unieke behoeften van deze betoverende wezens en hun metgezellen, de vliegende huisdieren. Terwijl dit
              meldpunt vooral dient voor lichtvoetige absurditeit, willen we u graag een plek bieden om uw creativiteit
              te uiten.
            </Paragraph>
            <Paragraph>
              Ons doel is om een glimlach op uw gezicht te toveren en uw gevoel voor avontuur aan te wakkeren. Dus voel
              u vrij om uw gedachten, visuele kunstwerken en eenhoornverhalen met ons te delen. Vergeet niet dat terwijl
              we misschien niet in staat zijn om een echte roze eenhoornparkeerzone te creëren, we altijd genieten van
              uw deelname aan dit humoristische initiatief.
            </Paragraph>
            <Paragraph>
              <b>Ga naar het Meldingsformulier:</b>
            </Paragraph>
            <ButtonLink appearance="primary-action-button" href="./eenhoornparkeerzone-melding/form">
              Maak melding
            </ButtonLink>
            <Paragraph className="voorbeeld-paragraph--spacing">
              <i>
                Dank u voor uw bijdrage aan ons Absurde Meldpunt. We hopen dat u hebt genoten van deze unieke reis in de
                wereld van verbeelding.
              </i>
            </Paragraph>
          </Article>
        </PageContent>
      </Page>
      <ExampleFooter />
    </Document>
  );
}
