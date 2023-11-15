'use client';

import {
  UtrechtArticle,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtHeading1,
  UtrechtButtonGroup,
  UtrechtButton,
} from '@utrecht/web-component-library-react';
import '@/app/styling/css/wmebv.css';
import { useId } from 'react';

export default function home() {
  const formHeadingId = useId();
  return (
    <UtrechtPage>
      <UtrechtPageContent>
        <UtrechtArticle id="main">
          <UtrechtHeading1 id={formHeadingId}>Doe alsof u inlogt met DigiD</UtrechtHeading1>
          <form action="./ingelogd/stap1" method="get" aria-labelledby={formHeadingId}>
            <UtrechtButtonGroup>
              <UtrechtButton type="submit" appearance="primary-action-button">
                Inloggen
              </UtrechtButton>
            </UtrechtButtonGroup>
          </form>
        </UtrechtArticle>
      </UtrechtPageContent>
    </UtrechtPage>
  );
}
