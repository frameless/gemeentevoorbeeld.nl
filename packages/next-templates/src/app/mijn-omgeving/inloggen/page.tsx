'use client';

import {
  Article,
  Button,
  ButtonGroup,
  Heading1,
  Heading2,
  Icon,
  Link,
  Page,
  PageContent,
  Paragraph,
} from '@utrecht/component-library-react';
import { UtrechtDigidLogo } from '@utrecht/web-component-library-react';
import { ExampleHeaderFunnelWmebv } from '@/components/wmebv/Header/ExampleHeaderFunnelWmebv';
import { ExampleFooterWmebv } from '@/components/wmebv/Footer/ExampleFooterWmebv';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { Fieldset, FieldsetLegend, FormField, FormLabel, RadioButton } from '@utrecht/component-library-react';
import BacklinkIcon from '@/app/styling/assets/backlink-icon.svg';
import { IconArrowLeft } from '@tabler/icons-react';
import '@/app/styling/css/wmebv.css';
import '@/app/styling/css/detail-page.css';
import '@utrecht/design-tokens/dist/index.css';
import { useEffect } from 'react';

export default function home() {
  const stepLabel = 'Vraag aan de gemeente';
  const websiteLabel = 'gemeente Voorbeeld';

  useEffect(() => {
    if (typeof document?.title === 'string') {
      document.title = `${stepLabel} - ${websiteLabel}`;
    }
  }, []);

  return (
    <Page>
      <ExampleHeaderFunnelWmebv /> {/* use wmebv nav header or standard? */}
      <PageContent>
        <Article id="main" className="voorbeeld-article-space ">
          <form method="POST" action="/api/wmebv/choose-form">
            <ButtonGroup>
              <Link href="./">
                <Icon>
                  <IconArrowLeft />
                </Icon>
                Terug
              </Link>
            </ButtonGroup>
            <Heading1>Vraag aan de gemeente</Heading1>
            <Heading2>Inloggen</Heading2>
            <Paragraph className="paragraph_digid">
              Dankzij uw DigiD kunt u overal makkelijk en veilig inloggen. Uw persoonlijke gegevens blijven goed
              beschermd. Wanneer u inlogt worden uw persoonlijke gegevens automatisch ingevuld.
            </Paragraph>

            <ButtonGroup>
              <Button type="submit" appearance="primary-action-button">
                Doorgaan
              </Button>{' '}
              {/* Why does this button send me to the next step in wmebv and not in mijn-omgeving? */}
            </ButtonGroup>
          </form>
        </Article>
      </PageContent>
      <ExampleFooterWmebv />
    </Page>
  );
}
