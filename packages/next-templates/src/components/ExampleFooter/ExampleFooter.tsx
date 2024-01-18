import Logo from '../../app/styling/assets/voorbeeld-footer.svg';
import { NavigationList } from '../NavigationList/Navigationlist';
import { NavigationListItem } from '../NavigationList/NavigationListItem';
import { Heading5, PageFooter, Paragraph, UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import React, { HTMLAttributes } from 'react';
import './footer.css';

interface ExampleFooterProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleFooter = ({ ...props }: ExampleFooterProps) => (
  <PageFooter className="example-page-footer">
    <div className="utrecht-page-footer__content">
      <div className="example-link-list-container" {...props}>
        <Logo className="example--footer-logo" />
        <NavigationList>
          <NavigationListItem className="utrecht-link-list__item" href="/wmebv/" label="Contact" />
          <NavigationListItem className="utrecht-link-list__item" href="#" label="RSS" />
        </NavigationList>
        <NavigationList>
          <NavigationListItem className="utrecht-link-list__item" href="#" label="Bescherming persoonsgegevens" />
          <NavigationListItem className="utrecht-link-list__item" href="#" label="Gebruikersvoorwaarden" />
          <NavigationListItem className="utrecht-link-list__item" href="#" label="Proclaimer" />
          <NavigationListItem className="utrecht-link-list__item" href="#" label="Cookieverklaring" />
        </NavigationList>
      </div>
    </div>
  </PageFooter>
);

ExampleFooter.displayName = 'ExampleFooter';
