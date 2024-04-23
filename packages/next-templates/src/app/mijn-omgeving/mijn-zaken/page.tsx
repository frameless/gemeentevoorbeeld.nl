'use client';

import {
  Article,
  BreadcrumbNavLink,
  BreadcrumbNav,
  BreadcrumbNavSeparator,
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

import IconChevronRight from '../../../app/styling/assets/chevronRight.svg';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import '@/app/styling/css/detail-page.css';
import '@utrecht/design-tokens/dist/index.css';

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

          <Article id="main" className="voorbeeld-section-content voorbeeld-toptask-layout">
            <div>
              <Sidenav>
                <SidenavList>
                  <SidenavItem>
                    <SidenavLink current href="/#">
                      Overzicht
                    </SidenavLink>
                  </SidenavItem>
                  <SidenavItem>
                    <SidenavLink href="/#">Berichten</SidenavLink>
                  </SidenavItem>
                  <SidenavItem>
                    <SidenavLink href="/#">Mijn zaken</SidenavLink>
                  </SidenavItem>
                </SidenavList>
              </Sidenav>

              <Sidenav>
                <SidenavList>
                  <SidenavItem>
                    <SidenavLink href="/#">Belastingzaken</SidenavLink>
                  </SidenavItem>
                  <SidenavItem>
                    <SidenavLink href="/#">WOZ</SidenavLink>
                  </SidenavItem>
                  <SidenavItem>
                    <SidenavLink href="/#">Parkeren</SidenavLink>
                  </SidenavItem>
                  <SidenavItem>
                    <SidenavLink href="/#">Erfpacht</SidenavLink>
                  </SidenavItem>
                </SidenavList>
              </Sidenav>

              <Sidenav>
                <SidenavList>
                  <SidenavItem>
                    <SidenavLink href="/#">Account</SidenavLink>
                  </SidenavItem>
                </SidenavList>
              </Sidenav>
            </div>

            <div>
              <Heading1>Mijn zaken</Heading1>

              <Paragraph>Vraag aan de gemeente</Paragraph>
              <Link href="./mijn-omgeving/mijn-zaken">Bekijk zaak</Link>
            </div>
          </Article>
        </PageContent>

        <ExampleFooter />
      </Page>
    </Document>
  );
}
