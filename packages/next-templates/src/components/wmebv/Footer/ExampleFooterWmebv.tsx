import Logo from '../../../app/styling/assets/voorbeeld-footer.svg';
import { NavigationList } from '../../NavigationList/Navigationlist';
import { NavigationListItem } from '../../NavigationList/NavigationListItem';
import { Heading2, Heading5, PageFooter, Paragraph, UnorderedListItem } from '@utrecht/component-library-react';
import React, { HTMLAttributes } from 'react';
import '../../ExampleFooter/footer.css';
import { IconArrowRight } from '@tabler/icons-react';

import {
  UtrechtButton,
  UtrechtHeading2,
  UtrechtLink,
  UtrechtParagraph,
  UtrechtUrlData,
} from '@utrecht/web-component-library-react';
import { Address } from '@/components/Address';

interface ExampleFooterWmebvProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleFooterWmebv = ({ ...props }: ExampleFooterWmebvProps) => (
  <PageFooter className="utrecht-page-footer">
    <div className="utrecht-page-footer__content">
      <div className="example-link-list-container" {...props}>
        <Logo />
        <div className="voorbeeld-footer-block utrecht-link-list__item">
          <UtrechtHeading2 className="example-footer__heading-3">Contact</UtrechtHeading2>
          <Address>
            Bel <UtrechtLink href="tel:453453">453 453</UtrechtLink> (maandag tot en met vrijdag van 09.00 tot 17.00
            uur) of stuur een e-mail naar{' '}
            <UtrechtLink href="mailto:vragen@gemeentevoorbeeld.nl">
              <UtrechtUrlData>vragen@gemeentevoorbeeld.nl</UtrechtUrlData>
            </UtrechtLink>
          </Address>
        </div>
        <div>
          <NavigationList>
            <NavigationListItem className="example-nav-list-footer" href="#" label="Bescherming persoonsgegevens" />
            <NavigationListItem className="example-nav-list-footer" href="#" label="Gebruikersvoorwaarden" />
            <NavigationListItem className="example-nav-list-footer" href="#" label="Proclaimer" />
            <NavigationListItem className="example-nav-list-footer" href="#" label="Toegankelijkheid" />
          </NavigationList>
        </div>
      </div>
    </div>
  </PageFooter>
);

ExampleFooterWmebv.displayName = 'ExampleFooterWmebv';
