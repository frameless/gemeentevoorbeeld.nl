import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import RootLayout from '@/components/RootLayout';
import {
  Article,
  ButtonGroup,
  Heading1,
  HeadingGroup,
  Link,
  Paragraph,
  PreHeading,
} from '@utrecht/component-library-react/dist/css-module';
import { Button } from '@/components/Button';
import { Page, PageContent } from '@utrecht/component-library-react/dist/css-module';
import { UtrechtUrlData } from '@utrecht/web-component-library-react';

export default function Custom404() {
  return (
    <RootLayout>
      <Page>
        <ExampleHeaderFunnel></ExampleHeaderFunnel>
        <PageContent
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              alignSelf: 'center',
            }}
          >
            <Article id="main">
              <HeadingGroup>
                <Heading1>Ga terug naar de website</Heading1>
                <PreHeading lang="en">404: Page Not Found</PreHeading>
              </HeadingGroup>
              <Paragraph lead>
                Deze pagina is niet onderdeel van de voorbeeldwebsite. Ga terug naar de vorige pagina om verder te gaan
                met de website van gemeente Voorbeeld.
              </Paragraph>
              <ButtonGroup direction="column">
                <Button
                  appearance="primary-action-button"
                  onClick={() => {
                    history.back();
                  }}
                  rel="prev"
                >
                  Terug naar de vorige pagina
                </Button>
                <Link href="/">
                  {' '}
                  Terug naar <UtrechtUrlData>gemeentevoorbeeld.nl</UtrechtUrlData>
                </Link>
              </ButtonGroup>
            </Article>
          </div>
        </PageContent>
      </Page>
    </RootLayout>
  );
}
