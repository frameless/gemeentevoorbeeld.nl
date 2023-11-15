import Logo from '../../../app/styling/assets/voorbeeld-footer.svg';
import { NavigationList } from '../../NavigationList/Navigationlist';
import { NavigationListItem } from '../../NavigationList/NavigationListItem';
import { Heading2, Heading5, PageFooter, Paragraph, UnorderedListItem } from '@utrecht/component-library-react';
import React, { HTMLAttributes } from 'react';
import '../../ExampleFooter/footer.css';
import { UtrechtHeading2, UtrechtLink, UtrechtParagraph, UtrechtUrlData } from '@utrecht/web-component-library-react';

interface ExampleFooterWmebvProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleFooterWmebv = ({ ...props }: ExampleFooterWmebvProps) => (
  <PageFooter>
    <div className="utrecht-page-footer__content">
      <div className="example-link-list-container" {...props}>
        <div className="voorbeeld-footer-block">
          <Logo className="example--footer-logo" />
        </div>
        <div className="voorbeeld-footer-block utrecht-link-list__item">
          <UtrechtHeading2>Contact</UtrechtHeading2>
          <UtrechtParagraph>
            Bel <UtrechtLink href="tel:453453">453 453</UtrechtLink> (maandag tot en met vrijdag van 09.00 tot 17.00
            uur) of stuur een e-mail naar{' '}
            <UtrechtLink href="mailto:vragen@gemeentevoorbeeld.nl">
              <UtrechtUrlData>vragen@gemeentevoorbeeld.nl</UtrechtUrlData>
            </UtrechtLink>
            {'.'}
          </UtrechtParagraph>
        </div>
        <div className="voorbeeld-footer-block">
          <NavigationList>
            <NavigationListItem className="utrecht-link-list__item" href="#" label="Bescherming persoonsgegevens" />
            <NavigationListItem className="utrecht-link-list__item" href="#" label="Gebruikersvoorwaarden" />
            <NavigationListItem className="utrecht-link-list__item" href="#" label="Proclaimer" />
            <NavigationListItem className="utrecht-link-list__item" href="#" label="Cookieverklaring" />
          </NavigationList>
        </div>
      </div>
    </div>
  </PageFooter>
);

ExampleFooterWmebv.displayName = 'ExampleFooterWmebv';
