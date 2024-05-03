'use client';

import {
  Article,
  Button,
  ButtonGroup,
  BreadcrumbNav,
  BreadcrumbNavLink,
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
  Heading1,
  Heading2,
  Heading3,
  Link,
  LinkButton,
  MultilineData,
  Page,
  PageContent,
  Paragraph,
  PreserveData,
  //   UrlData,
} from '@utrecht/component-library-react';

import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { FormFieldFile } from '@/components/FormFieldFile';
import { FormNav } from '@/components/FormNav/FormNav';
import { IconArrowLeft, IconChevronUp, IconPencil, IconX } from '@tabler/icons-react';

import { useEffect } from 'react';

import '@/app/styling/css/wmebv.css';
import '@/app/styling/css/detail-page.css';
import '@/app/styling/css/klachtenformulier-niet-ingelogd.css';
import '@utrecht/design-tokens/dist/index.css';

export default function home() {
  const stepProgressLabel = 'Stap 4 van 4';
  const stepLabel = 'Overzicht ingevulde gegevens';
  const websiteLabel = 'gemeente voorbeeld';

  useEffect(() => {
    if (typeof document?.title === 'string') {
      document.title = `${stepProgressLabel}: ${stepLabel} - ${websiteLabel}`;
    }
  }, []);

  return (
    <Page>
      <ExampleHeader />
      <ExampleNavigation />
      <PageContent className="voorbeeld-page-content-flex">
        <BreadcrumbNav className="voorbeeld-breadcrumb-nav" label="Kruimelpad">
          <BreadcrumbNavLink href="/klachtenformulier-niet-ingelogd/stap3">
            <IconArrowLeft />
            Vorige Stap
          </BreadcrumbNavLink>
        </BreadcrumbNav>

        <Article id="main" className="voorbeeld-article-space voorbeeld-main-layout">
          <div>
            <Heading1>Klacht over de gemeente doorgeven</Heading1>
            <Paragraph lead>Stap 4 van 4</Paragraph>
            <Paragraph>Vul de vakjes met een * altijd in. Anders kunt u niet verder.</Paragraph>

            <Heading2>Overzicht ingevulde gegevens</Heading2>

            <form>
              <Heading3>Uw klacht</Heading3>
              <ButtonGroup>
                <Link href="./stap1">
                  <IconPencil />
                  <span>Aanpassen</span>
                </Link>
              </ButtonGroup>
              <DataList>
                <DataListItem>
                  <DataListKey>De klacht omschrijving</DataListKey>
                  <DataListValue>
                    <MultilineData></MultilineData>
                  </DataListValue>
                </DataListItem>
              </DataList>
              <Heading3>Uw gegevens</Heading3>
              <ButtonGroup>
                <Link href="./stap2">
                  <IconPencil />
                  <span>Aanpassen</span>
                </Link>
              </ButtonGroup>
              <DataList className="voorbeeld-datalist-style">
                <DataListItem>
                  <DataListKey>Naam</DataListKey>
                  <DataListValue>
                    <PreserveData></PreserveData>
                  </DataListValue>
                </DataListItem>
                <DataListItem>
                  <DataListKey>Straat</DataListKey>
                  <DataListValue>
                    <PreserveData></PreserveData>
                  </DataListValue>
                </DataListItem>
                <DataListItem>
                  <DataListKey>Huisnummer</DataListKey>
                  <DataListValue>
                    <PreserveData></PreserveData>
                  </DataListValue>
                </DataListItem>
                <DataListItem>
                  <DataListKey>Postcode</DataListKey>
                  <DataListValue>
                    <PreserveData></PreserveData>
                  </DataListValue>
                </DataListItem>
                <DataListItem>
                  <DataListKey>Woonplaats</DataListKey>
                  <DataListValue>
                    <PreserveData></PreserveData>
                  </DataListValue>
                </DataListItem>
                <DataListItem>
                  <DataListKey>E-mailadres</DataListKey>
                  <DataListValue>{/* <UrlData></UrlData> */}</DataListValue>
                </DataListItem>
                <DataListItem>
                  <DataListKey>Telefoonnummer</DataListKey>
                  <DataListValue>
                    <PreserveData></PreserveData>
                  </DataListValue>
                </DataListItem>
              </DataList>

              <ButtonGroup direction="column">
                <Button type="submit" appearance="primary-action-button">
                  Versturen
                </Button>

                <LinkButton>
                  <IconX />
                  Stoppen met formulier
                </LinkButton>
              </ButtonGroup>
            </form>

            <Link href="#">
              <IconChevronUp />
              Naar boven
            </Link>
          </div>

          <div className="voorbeeld-formnav__stap4">
            <FormNav></FormNav>
          </div>
        </Article>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
