'use client';

import {
  UtrechtArticle,
  UtrechtButtonGroup,
  UtrechtHeading1,
  UtrechtLink,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
} from '@utrecht/web-component-library-react';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from '@utrecht/component-library-react';
import '@/app/styling/css/wmebv.css';
import { ExampleHeaderWmebv } from '@/components/wmebv/Header/ExampleHeaderWmebv';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderWmebv></ExampleHeaderWmebv>
      <ExampleNavigation></ExampleNavigation>
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle id="main" className="voorbeeld-article-space ">
          <UtrechtHeading1>Sitemap</UtrechtHeading1>
          <UtrechtParagraph lead>
            Deze pagina helpt developers en designers door overzicht te geven in alle formulierpagina&#39;s die zijn
            gebouwd.
          </UtrechtParagraph>
          <Table>
            <TableHeader>
              <TableHeaderCell>Paginatitel</TableHeaderCell>
              <TableHeaderCell>Links</TableHeaderCell>
            </TableHeader>
            <TableBody>
              {[
                {
                  title: 'Contact met de gemeente',
                  website: '/wmebv/',
                  designSmallViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=881-21345&mode=design&t=lxuHnDyJ9WRWt7UW-4',
                  designLargeViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=570-15695&mode=design&t=lxuHnDyJ9WRWt7UW-4',
                },
                {
                  title: 'Intro: Vraag aan de gemeente',
                  website: '../Intro/',
                  designSmallViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=900-21853&mode=design&t=IIaLEbdXyyoId09W-4',
                  designLargeViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=615-17577&mode=design&t=IIaLEbdXyyoId09W-4',
                },
                {
                  title: 'Vraag aan de gemeente: Inloggen',
                  designSmallViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=900-22042&mode=design&t=IIaLEbdXyyoId09W-4',
                  designLargeViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=615-17615&mode=design&t=IIaLEbdXyyoId09W-4',
                },
                {
                  title: 'Doe alsof u inlogt',
                  designLargeViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=570-16477&mode=design&t=LwIeBeuochTrqfav-4',
                },
                {
                  title: 'Stap 1 van 4: Vraag aan de gemeente',
                  website: './ingelogd/stap1',
                  designSmallViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=900-23534&mode=design&t=IIaLEbdXyyoId09W-4',
                  designLargeViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=615-17771&mode=design&t=IIaLEbdXyyoId09W-4',
                },
                {
                  title: 'Ingelogd: Stap 2 van 4: Vraag aan de gemeente',
                  website: './ingelogd/stap2',
                  designSmallViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=900-23669&mode=design&t=LwIeBeuochTrqfav-4',
                  designLargeViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=615-17742&mode=design&t=LwIeBeuochTrqfav-4',
                },
                {
                  title: 'Ingelogd: Stap 3 van 4: Vraag aan de gemeente',
                  website: './ingelogd/stap3',
                  designSmallViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=900-23868&mode=design&t=LwIeBeuochTrqfav-4',
                  designLargeViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=615-17720&mode=design&t=LwIeBeuochTrqfav-4',
                },
                {
                  title: 'Ingelogd: Stap 4 van 4: Vraag aan de gemeente',
                  website: './ingelogd/stap4',
                  designSmallViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=900-24020&mode=design&t=LwIeBeuochTrqfav-4',
                  designLargeViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=615-17865&mode=design&t=LwIeBeuochTrqfav-4',
                },
                {
                  title: 'Niet ingelogd: Stap 1 van 4: Vraag aan de gemeente',
                  website: './niet-ingelogd/stap1',
                  designSmallViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=900-22206&mode=design&t=LwIeBeuochTrqfav-4',
                  designLargeViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=615-17635&mode=design&t=LwIeBeuochTrqfav-4',
                },
                {
                  title: 'Niet ingelogd: Stap 2 van 4: Vraag aan de gemeente',
                  website: './niet-ingelogd/stap2',
                  designSmallViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=900-22382&mode=design&t=LwIeBeuochTrqfav-4',
                  designLargeViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=615-17665&mode=design&t=LwIeBeuochTrqfav-4',
                },
                {
                  title: 'Niet ingelogd: Stap 3 van 4: Vraag aan de gemeente',
                  website: './niet-ingelogd/stap3',
                  designSmallViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=900-22671&mode=design&t=LwIeBeuochTrqfav-4',
                  designLargeViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=615-17696&mode=design&t=LwIeBeuochTrqfav-4',
                },
                {
                  title: 'Niet ingelogd: Stap 4 van 4: Vraag aan de gemeente',
                  website: './niet-ingelogd/stap4',
                  designSmallViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=900-23333&mode=design&t=LwIeBeuochTrqfav-4',
                  designLargeViewport:
                    'https://www.figma.com/file/iIr1gkAR3oZ0UFWKIni8Nv/VNG---WMEBV---Templates?type=design&node-id=615-17852&mode=design&t=LwIeBeuochTrqfav-4',
                },
              ].map(({ title, website, designSmallViewport, designLargeViewport }, index) => (
                <TableRow key={index}>
                  <TableCell>{title}</TableCell>
                  <TableCell>
                    <UtrechtButtonGroup direction="column">
                      {website && <UtrechtLink href={website}>Webpagina</UtrechtLink>}
                      {designLargeViewport && (
                        <UtrechtLink href={designLargeViewport} target="figma">
                          Design groot scherm (Figma)
                        </UtrechtLink>
                      )}
                      {designSmallViewport && (
                        <UtrechtLink href={designSmallViewport} target="figma">
                          Design voor klein scherm (Figma)
                        </UtrechtLink>
                      )}
                    </UtrechtButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter></ExampleFooter>
    </UtrechtPage>
  );
}
