'use client';

import {
  UtrechtArticle,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtButtonLink,
  UtrechtHeading1,
  UtrechtButtonGroup,
} from '@utrecht/web-component-library-react';
import { ExampleHeaderWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderWmebv';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import '@/app/styling/css/wmebv.css';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderWmebv />
      <ExampleNavigation />
      <UtrechtPageContent>
        <UtrechtArticle>
          <UtrechtHeading1>Doe alsof u inlogt met DigiD</UtrechtHeading1>
          <UtrechtButtonGroup>
            <UtrechtButtonLink href="./niet-ingelogd/stap1" appearance="primary-action-button">
              Inloggen
            </UtrechtButtonLink>
          </UtrechtButtonGroup>
        </UtrechtArticle>
      </UtrechtPageContent>
    </UtrechtPage>
  );
}
