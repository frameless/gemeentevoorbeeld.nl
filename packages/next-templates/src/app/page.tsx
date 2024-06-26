'use client';

import {
  AccordionProvider,
  Button,
  Heading2,
  Heading3,
  Heading4,
  Link,
  LinkList,
  LinkListLink,
  Paragraph,
  Page,
  PageContent,
} from '@utrecht/component-library-react';
import '@/app/styling/css/homepage.css';
import { TopTaskLink } from '@/components/TopTask/TopTaskLink';
import { TopTaskNavigation } from '@/components/TopTask/TopTaskNavigation';
import { TopTaskCard } from '@/components/TopTask/TopTaskCard';
import { IconClock, IconCalendar } from '@tabler/icons-react';
import {
  UtrechtIcon,
  UtrechtIconAfvalScheiden,
  UtrechtIconMeldingKlacht,
  UtrechtIconNummerbord,
  UtrechtIconPaspoort,
  UtrechtIconVerhuizen,
  UtrechtIconWerken,
  UtrechtIconChevronRight,
} from '@utrecht/web-component-library-react';
import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';

export default function Home() {
  return (
    <Page className="voorbeeld-page--flex">
      <ExampleHeader />
      <ExampleNavigation />
      <PageContent className="voorbeeld-page-content--flex">
        <section className="voorbeeld-section">
          <div className="voorbeeld-section-content voorbeeld-toptask-layout">
            <TopTaskNavigation>
              <TopTaskLink icon={<UtrechtIconPaspoort />}>Paspoort of ID-kaart aanvragen</TopTaskLink>
              <TopTaskLink href="/meldingen/" icon={<UtrechtIconMeldingKlacht />}>
                Meldingen openbare ruimte
              </TopTaskLink>
              <TopTaskLink icon={<UtrechtIconVerhuizen />}>Verhuizing doorgeven</TopTaskLink>
              <TopTaskLink icon={<UtrechtIconWerken />}>Werken bij de gemeente</TopTaskLink>
              <TopTaskLink icon={<UtrechtIconNummerbord />}>Parkeren: kentekenwijziging doorgeven</TopTaskLink>
              <TopTaskLink icon={<UtrechtIconAfvalScheiden />}>Afval</TopTaskLink>
            </TopTaskNavigation>
            <TopTaskCard
              icon={
                <UtrechtIcon className="voorbeeld-icon-clock">
                  <IconClock />
                </UtrechtIcon>
              }
            >
              <Heading3>Openingstijden</Heading3>
              <Heading4>
                Openingstijden <br />
                Gemeentehuis
              </Heading4>
              <div itemScope itemType="https://schema.org/Pharmacy">
                <Paragraph className="voorbeeld-paragraph--opening-times">
                  Vandaag:
                  <br />
                  <time itemProp="openingHours" dateTime="08:30">
                    08.30
                  </time>{' '}
                  -{' '}
                  <time itemProp="openingHours" dateTime="17:30">
                    17:30
                  </time>
                  <br />
                  <time itemProp="openingHours" dateTime="18:00">
                    18.00
                  </time>{' '}
                  -{' '}
                  <time itemProp="openingHours" dateTime="20:00">
                    20:00
                  </time>
                </Paragraph>
              </div>
              <Button appearance="secondary-action-button">Contact</Button>
            </TopTaskCard>
          </div>
        </section>
        <section className="voorbeeld-section voorbeeld-section--alternate voorbeeld-section--spacing">
          <div className="voorbeeld-section-content">
            <div className="voorbeeld-section-container-wrapper">
              <div className="voorbeeld-container-group">
                <Heading2>Zelf regelen</Heading2>
                <Button className="voorbeeld-button-more" appearance="primary-action-button">
                  Meer bekijken
                </Button>
              </div>
            </div>
            <AccordionProvider
              sections={[
                {
                  className: 'voorbeeld-accordion__section',
                  headingLevel: 2,
                  body: (
                    <div className="voorbeeld-container-wrapper voorbeeld-accordion__container">
                      <Paragraph className="voorbeeld-paragraph">
                        Met een paspoort, identiteitskaart of rijbewijs kunt u zich identificeren en reizen. Onder
                        voorwaarden kunt u de Nederlandse identiteit krijgen.
                      </Paragraph>
                      <LinkList className="voorbeeld-link-list">
                        <LinkListLink
                          href="#"
                          icon={<UtrechtIconChevronRight className="voorbeeld-accordion-chevron--right" />}
                        >
                          Paspoort aanvragen
                        </LinkListLink>
                        <LinkListLink
                          href="#"
                          icon={<UtrechtIconChevronRight className="voorbeeld-accordion-chevron--right" />}
                        >
                          ID-kaart aanvragen
                        </LinkListLink>
                        <LinkListLink
                          href="#"
                          icon={<UtrechtIconChevronRight className="voorbeeld-accordion-chevron--right" />}
                        >
                          Rijbewijs aanvragen
                        </LinkListLink>
                      </LinkList>
                    </div>
                  ),
                  label: 'Paspoort, ID-kaart en rijbewijs',
                },
                {
                  className: 'voorbeeld-accordion__section',
                  headingLevel: 2,
                  body: (
                    <div className="voorbeeld-container-wrapper voorbeeld-accordion__container">
                      <LinkList className="voorbeeld-link-list">
                        <LinkListLink
                          href="#"
                          icon={<UtrechtIconChevronRight className="voorbeeld-accordion-chevron--right" />}
                        >
                          Verhuizing naar Gemeente voorbeeld
                        </LinkListLink>
                        <LinkListLink
                          href="#"
                          icon={<UtrechtIconChevronRight className="voorbeeld-accordion-chevron--right" />}
                        >
                          Verhuizing vanuit het buitenland naar Gemeente voorbeeld doorgeven
                        </LinkListLink>
                        <LinkListLink
                          href="#"
                          icon={<UtrechtIconChevronRight className="voorbeeld-accordion-chevron--right" />}
                        >
                          Verhuizing naar het buitenland doorgeven
                        </LinkListLink>
                      </LinkList>
                    </div>
                  ),
                  label: 'Verhuizen',
                },
                {
                  className: 'voorbeeld-accordion__section',
                  headingLevel: 2,
                  body: (
                    <div className="voorbeeld-container-wrapper voorbeeld-accordion__container">
                      <Paragraph className="voorbeeld-paragraph">
                        Wilt u het kenteken aanpassen van uw parkeervergunning, garageabonnement of
                        gehandicaptenparkeerplaats? Kies hier wat u wilt aanpassen.
                      </Paragraph>
                      <LinkList className="voorbeeld-link-list">
                        <LinkListLink
                          href="#"
                          icon={<UtrechtIconChevronRight className="voorbeeld-accordion-chevron--right" />}
                        >
                          Parkeervergunning bewoner, kenteken aanpassen
                        </LinkListLink>
                        <LinkListLink
                          href="#"
                          icon={<UtrechtIconChevronRight className="voorbeeld-accordion-chevron--right" />}
                        >
                          Parkeervergunning huurauto of leenauto, kenteken aanpassen
                        </LinkListLink>
                        <LinkListLink
                          href="#"
                          icon={<UtrechtIconChevronRight className="voorbeeld-accordion-chevron--right" />}
                        >
                          Parkeervergunning gehandicapte, kenteken aanpassen
                        </LinkListLink>
                        <LinkListLink
                          href="#"
                          icon={<UtrechtIconChevronRight className="voorbeeld-accordion-chevron--right" />}
                        >
                          Parkeervergunning hulpverlener (ga naar Parkeervergunning bewoner, kenteken aanpassen)
                        </LinkListLink>
                        <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                          Gehandicaptenparkeerplaats, kenteken aanpassen
                        </LinkListLink>
                        <LinkListLink
                          href="#"
                          icon={<UtrechtIconChevronRight className="voorbeeld-accordion-chevron--right" />}
                        >
                          Garageabonnement bewoner (kenteken aanpassen) (pdf, 182 kB)
                        </LinkListLink>
                      </LinkList>
                    </div>
                  ),
                  label: 'Kentekenwijziging doorgeven',
                },
              ]}
            />
          </div>
        </section>
        <section className="voorbeeld-section">
          <div className="voorbeeld-section-content">
            <div className="voorbeeld-container-group">
              <Heading2 className="voorbeeld-heading-2">Nieuws en inzichten</Heading2>
              <Button className="voorbeeld-button-more" appearance="primary-action-button">
                Meer nieuws
              </Button>
            </div>
            <ul className="voorbeeld-unordered-list-cards">
              <li>
                <Link className="voorbeeld-link-card" href="#">
                  <div className="voorbeeld-container-card">
                    <Heading4>Wijkraadsleden officieel beëdigd</Heading4>
                    <div className="voorbeeld-container-date">
                      <IconCalendar />
                      <Paragraph>donderdag 15 februari 2024</Paragraph>
                    </div>
                    <Paragraph>
                      Burgemeester Pos heeft 273 wijkraadsleden officieel beëdigd. Ze hebben allemaal de eed afgelegd of
                      een belofte gedaan op het stadhuis van gemeente Voorbeeld.
                    </Paragraph>
                    <div className="voorbeeld-container-icon">
                      <UtrechtIconChevronRight className="voorbeeld-accordion-chevron--right" />
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link className="voorbeeld-link-card" href="#">
                  <div className="voorbeeld-container-card">
                    <Heading4>Huurteam geeft huurders gratis hulp</Heading4>
                    <div className="voorbeeld-container-date">
                      <IconCalendar />
                      <Paragraph>donderdag 15 februari 2024</Paragraph>
                    </div>
                    <Paragraph>
                      Alle huurders in Lenteveld die een woning, appartement of kamer huren van een particuliere
                      verhuurder kunnen gratis gebruikmaken van de hulp van het Huurteam.
                    </Paragraph>
                    <div className="voorbeeld-container-icon">
                      <UtrechtIconChevronRight className="voorbeeld-accordion-chevron--right" />
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link className="voorbeeld-link-card" href="#">
                  <div className="voorbeeld-container-card">
                    <Heading4>Bijzonder beroep: specialist maatschappelijke ontwikkeling</Heading4>
                    <div className="voorbeeld-container-date">
                      <IconCalendar />
                      <Paragraph>donderdag 15 februari 2024</Paragraph>
                    </div>
                    <Paragraph>
                      De medewerkers van de gemeente doen van alles in de stad. Sommige beroepen zijn bekend, andere
                      minder.
                    </Paragraph>
                    <div className="voorbeeld-container-icon">
                      <UtrechtIconChevronRight className="voorbeeld-accordion-chevron--right" />
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link className="voorbeeld-link-card" href="#">
                  <div className="voorbeeld-container-card">
                    <Heading4>De Tegeltaxi gaat weer rijden!</Heading4>
                    <div className="voorbeeld-container-date">
                      <IconCalendar />
                      <Paragraph>donderdag 15 februari 2024</Paragraph>
                    </div>
                    <Paragraph>
                      Na het succes van de pilot vorig jaar, gaat de TegelTaxi weer in gemeente Voorbeeld rijden!
                    </Paragraph>
                    <div className="voorbeeld-container-icon">
                      <UtrechtIconChevronRight className="voorbeeld-accordion-chevron--right" />
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="voorbeeld-section voorbeeld-section--alternate"></section>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
