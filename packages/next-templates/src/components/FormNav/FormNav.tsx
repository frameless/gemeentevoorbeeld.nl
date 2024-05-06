// Use ExampleNavigation.tsx or Navigation.tsx as inspiration for a fully functionning version of FormNav?

import { Separator, Heading2, Link, UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import React from 'react';
import './formnav.css';

export const FormNav = () => (
  <div>
    <Heading2>Voortgang</Heading2>
    <Separator className="voorbeeld-separator" />
    <UnorderedList>
      <UnorderedListItem className="voorbeeld-form-nav__list-item">
        <Link className="voorbeeld-form-nav__link" href="/klachtenformulier-niet-ingelogd/stap1">
          Uw klacht
        </Link>
      </UnorderedListItem>
      <Separator />
      <UnorderedListItem className="voorbeeld-form-nav__list-item">
        <Link className="voorbeeld-form-nav__link" href="/klachtenformulier-niet-ingelogd/stap2">
          Uw gegevens
        </Link>
      </UnorderedListItem>
      <Separator />
      <UnorderedListItem className="voorbeeld-form-nav__list-item">
        <Link className="voorbeeld-form-nav__link" href="/klachtenformulier-niet-ingelogd/stap3">
          Bijlage toevoegen
        </Link>
      </UnorderedListItem>
      <Separator />
      <UnorderedListItem className="voorbeeld-form-nav__list-item">
        <Link className="voorbeeld-form-nav__link" href="/klachtenformulier-niet-ingelogd/stap4">
          Overzicht
        </Link>
      </UnorderedListItem>
      <Separator />
    </UnorderedList>
  </div>
);

FormNav.displayName = 'FormNav';
