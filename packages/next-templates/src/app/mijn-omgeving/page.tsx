'use client';

import {
  Article,
  BreadcrumbNavLink,
  BreadcrumbNav,
  BreadcrumbNavSeparator,
  ButtonGroup,
  Document,
  Heading1,
  Heading2,
  Link,
  Paragraph,
  Page,
  PageContent,
} from '@utrecht/component-library-react';
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '@gemeente-denhaag/sidenav';

import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { Card } from '@/components/Card/Card';
// import { HeaderIngelogd } from '@/components/ExampleHeader/HeaderIngelogd/HeaderIngelogd';

import {
  IconCurrencyEuro,
  IconLayoutGrid,
  IconInbox,
  IconArchive,
  IconHome,
  IconParking,
  IconBuildingCommunity,
  IconUser,
} from '@tabler/icons-react';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import IconChevronRight from '../../app/styling/assets/chevronRight.svg';

import '@/app/styling/css/detail-page.css';
import '@utrecht/design-tokens/dist/index.css';
import '@/app/styling/css/mijn-omgeving.css';

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ [key: string]: string }>();

  return (
    <Document>
      <Page>
        <ExampleHeader />
        {/* <HeaderIngelogd /> */}
        <ExampleNavigation />

        <PageContent>
          <BreadcrumbNav label="Kruimelpad">
            <BreadcrumbNavLink href="" index={0} rel="home">
              Home
            </BreadcrumbNavLink>
            <BreadcrumbNavSeparator>
              <IconChevronRight className="voorbeeld-chevron-right-space" />
            </BreadcrumbNavSeparator>
            <BreadcrumbNavLink href="" index={1} rel="mijn-omgeving">
              Mijn Omgeving
            </BreadcrumbNavLink>
          </BreadcrumbNav>

          <Article id="main" className="voorbeeld-main-layout voorbeeld-toptask-layout">
            <div className="voorbeeld-sidenav-layout">
              <Sidenav>
                <SidenavList>
                  <SidenavItem className="voorbeeld-sidenav-spacing">
                    <SidenavLink current href="#">
                      <IconLayoutGrid />
                      Overzicht
                    </SidenavLink>
                  </SidenavItem>

                  <SidenavItem>
                    <SidenavLink href="#">
                      <IconInbox />
                      Berichten
                    </SidenavLink>
                  </SidenavItem>
                  <SidenavItem className="voorbeeld-sidenav-spacing">
                    <SidenavLink href="#">
                      <IconArchive />
                      Mijn zaken
                    </SidenavLink>
                  </SidenavItem>
                </SidenavList>
              </Sidenav>

              <Sidenav>
                <SidenavList>
                  <SidenavItem>
                    <SidenavLink href="#">
                      <IconCurrencyEuro />
                      Belastingzaken
                    </SidenavLink>
                  </SidenavItem>
                  <SidenavItem>
                    <SidenavLink href="#">
                      <IconHome /> WOZ
                    </SidenavLink>
                  </SidenavItem>
                  <SidenavItem>
                    <SidenavLink href="#">
                      <IconParking />
                      Parkeren
                    </SidenavLink>
                  </SidenavItem>
                  <SidenavItem className="voorbeeld-sidenav-spacing">
                    <SidenavLink href="#">
                      <IconBuildingCommunity />
                      Erfpacht
                    </SidenavLink>
                  </SidenavItem>
                </SidenavList>
              </Sidenav>

              <Sidenav>
                <SidenavList>
                  <SidenavItem>
                    <SidenavLink href="#">
                      <IconUser />
                      Account
                    </SidenavLink>
                  </SidenavItem>
                </SidenavList>
              </Sidenav>
            </div>

            <div className="voorbeeld-content">
              <Heading1>Hallo Jeroen van Drouwen</Heading1>
              <Paragraph>
                In ‘Mijn omgeving’ kunt u zelf uw persoonlijke zaken regelen wanneer het u uitkomt. U kunt bijvoorbeeld
                uw rekeningen betalen en zien wanneer uw aanvraag klaar is.
              </Paragraph>

              <Heading2>Wat moet ik regelen?</Heading2>
              <Paragraph>U hoeft op dit moment niets te regelen.</Paragraph>
              <Heading2>Mijn zaken</Heading2>
              <Card />

              <ButtonGroup>
                <Link href="./mijn-omgeving/mijn-zaken">Bekijk alle zaken</Link>
              </ButtonGroup>
            </div>
          </Article>
        </PageContent>

        <ExampleFooter />
      </Page>
    </Document>
  );
}
