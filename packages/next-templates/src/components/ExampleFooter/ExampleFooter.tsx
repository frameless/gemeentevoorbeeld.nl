import Logo from '../../app/styling/assets/voorbeeld-footer.svg';
import { NavigationList } from '../NavigationList/Navigationlist';
import { NavigationListItem } from '../NavigationList/NavigationListIItem';
import { Heading5, PageFooter, Paragraph, UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import React, { HTMLAttributes } from 'react';
import './footer.css';

interface ExampleFooterProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleFooter = ({ ...props }: ExampleFooterProps) => (
  <PageFooter>
    <div className="example-link-list-container" {...props}>
      <Logo className="example--footer-logo" />
      <NavigationList>
        <Heading5>Heading</Heading5>
        <NavigationListItem className="utrecht-link-list__item" href="example.com" label="example" />
        <NavigationListItem className="utrecht-link-list__item" href="example.com" label="example" />
        <NavigationListItem className="utrecht-link-list__item" href="example.com" label="example" />
        <NavigationListItem className="utrecht-link-list__item" href="example.com" label="example" />
      </NavigationList>
      <NavigationList>
        <Heading5>Heading</Heading5>
        <NavigationListItem className="utrecht-link-list__item" href="example.com" label="example" />
        <NavigationListItem className="utrecht-link-list__item" href="example.com" label="example" />
        <NavigationListItem className="utrecht-link-list__item" href="example.com" label="example" />
        <NavigationListItem className="utrecht-link-list__item" href="example.com" label="example" />
      </NavigationList>
      <div>
        <Heading5>Heading</Heading5>
        <Paragraph className="utrecht-link-list__item">
          Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *
        </Paragraph>
      </div>
    </div>
  </PageFooter>
);

ExampleFooter.displayName = 'ExampleFooter';
