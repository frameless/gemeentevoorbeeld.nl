import Logo from '../../../app/styling/assets/voorbeeld-footer.svg';
import { Heading5, PageFooter, Paragraph } from '@utrecht/component-library-react';
import React, { HTMLAttributes } from 'react';
import '../footer.css';

interface ExampleFooterFocusProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleFooterFocus = ({ ...props }: ExampleFooterFocusProps) => (
  <PageFooter>
    <div className="example-link-list-container" {...props}>
      <Logo className="example--footer-logo" />
      <section>
        <Heading5>Heading</Heading5>
        <Paragraph className="utrecht-link-list__item">
          Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *
        </Paragraph>
      </section>
    </div>
  </PageFooter>
);

ExampleFooterFocus.displayName = 'ExampleFooter';
