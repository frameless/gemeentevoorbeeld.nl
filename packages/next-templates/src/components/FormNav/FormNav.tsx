// Use ExampleNavigation.tsx or Navigation.tsx as inspiration for a fully functionning version of FormNav?

import { Separator, Heading2, Link, UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import React from 'react';
import './formnav.css';

export const FormNav = () => (
  <div>
    <Heading2>Voortgang</Heading2>
    <Separator className="voorbeeld-separator"></Separator>
    <UnorderedList>
      <UnorderedListItem className="voorbeeld-form-nav__list-item">
        {/* Current step (1/4) - Bulletpoint = dark */}
        <Link className="voorbeeld-form-nav__link" href="/klachtenformulier-niet-ingelogd/stap1">
          Uw klacht {/* Current step (1/4) - Text = Bold */}
        </Link>
      </UnorderedListItem>
      <Separator></Separator>
      <UnorderedListItem className="voorbeeld-form-nav__list-item">
        <Link className="voorbeeld-form-nav__link" href="/klachtenformulier-niet-ingelogd/stap2">
          Uw gegevens
        </Link>
      </UnorderedListItem>
      <Separator></Separator>
      <UnorderedListItem className="voorbeeld-form-nav__list-item">
        <Link className="voorbeeld-form-nav__link" href="/klachtenformulier-niet-ingelogd/stap3">
          Bijlage toevoegen
        </Link>
      </UnorderedListItem>
      <Separator></Separator>
      <UnorderedListItem className="voorbeeld-form-nav__list-item">
        <Link className="voorbeeld-form-nav__link" href="/404">
          Overzicht
        </Link>
      </UnorderedListItem>
      <Separator></Separator>
    </UnorderedList>
  </div>
);

FormNav.displayName = 'FormNav';
