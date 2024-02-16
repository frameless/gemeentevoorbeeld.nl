'use client';

import {
  AccordionProvider,
  Button,
  Heading2,
  Heading3,
  Heading4,
  LinkList,
  LinkListLink,
  Paragraph,
  Page,
  PageContent,
} from '@utrecht/component-library-react';
import { TopTaskLink } from '@/components/TopTask/TopTaskLink';
import { TopTaskNavigation } from '@/components/TopTask/TopTaskNavigation';
import { TopTaskHeader } from '@/components/TopTask/TopTaskHeader';
import { IconClock } from '@tabler/icons-react';
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
            <TopTaskNavigation className="grid">
              <TopTaskLink icon={<UtrechtIconPaspoort />}>Paspoort of ID-kaart aanvragen</TopTaskLink>
              <TopTaskLink href="/meldingen/" icon={<UtrechtIconMeldingKlacht />}>
                Meldingen openbare ruimte
              </TopTaskLink>
              <TopTaskLink icon={<UtrechtIconVerhuizen />}>Verhuizing doorgeven</TopTaskLink>
              <TopTaskLink icon={<UtrechtIconWerken />}>Werken bij de gemeente</TopTaskLink>
              <TopTaskLink icon={<UtrechtIconNummerbord />}>Parkeren: kentekenwijziging doorgeven</TopTaskLink>
              <TopTaskLink icon={<UtrechtIconAfvalScheiden />}>Afval</TopTaskLink>
            </TopTaskNavigation>
            <TopTaskHeader>
              <UtrechtIcon className="voorbeeld-icon-clock">
                <IconClock />
              </UtrechtIcon>
              <Heading3>Openingstijden</Heading3>
              <Heading4>Openingstijden Gemeentehuis</Heading4>
              <Paragraph className="voorbeeld-paragraph-opening-times">
                Vandaag:
                <br />
                08.30 - 17.00
                <br />
                18.00 - 20.00
              </Paragraph>
              <Button appearance="secondary-action-button">Contact</Button>
            </TopTaskHeader>
          </div>
        </section>
        <section className="voorbeeld-section voorbeeld-section--spacing">
          <div className="voorbeeld-section-content">
            <div className="voorbeeld-section-container-wrapper">
              <Heading2>Zelf regelen</Heading2>
              <Button className="voorbeeld-button-more" appearance="primary-action-button">
                Meer bekijken
              </Button>
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
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
