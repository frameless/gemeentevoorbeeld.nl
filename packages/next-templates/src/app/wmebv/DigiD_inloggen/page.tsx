'use client';

import {
  UtrechtArticle,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtButtonLink,
  UtrechtDigidLogo,
  UtrechtHeading1,
} from '@utrecht/web-component-library-react';
import { ExampleHeaderWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
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
          <UtrechtButtonLink href="#" appearance="primary-action-button">
            Inloggen
          </UtrechtButtonLink>
        </UtrechtArticle>
      </UtrechtPageContent>
    </UtrechtPage>
  );
}
