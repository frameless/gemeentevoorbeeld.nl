'use client';

import { UtrechtArticle, UtrechtHeading1, UtrechtPage, UtrechtPageContent } from '@utrecht/web-component-library-react';
import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { BreadcrumbNav, BreadcrumbNavLink } from '@utrecht/component-library-react';
import ChevronRight from '../styling/assets/chevronRight.svg';
import '@/app/styling/css/wmebv.css';
// import {} from '@utrecht/component-library-react';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeader></ExampleHeader>
      <ExampleNavigation></ExampleNavigation>
      <BreadcrumbNav label="Kruimelpad">
        <BreadcrumbNavLink className="voorbeeld-breadcrumb-text-decoration" href="" index={0} rel="home">
          Home <ChevronRight className="voorbeeld-chevron-right-space" />
        </BreadcrumbNavLink>
        <BreadcrumbNavLink className="voorbeeld-breadcrumb-text-decoration" href="" index={1}>
          Contact <ChevronRight className="voorbeeld-chevron-right-space" />
        </BreadcrumbNavLink>
        <BreadcrumbNavLink className="voorbeeld-breadcrumb-text-decoration" href="" index={2} rel="up">
          Ik heb een vraag
        </BreadcrumbNavLink>
      </BreadcrumbNav>
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <UtrechtHeading1>Contact met de gemeente</UtrechtHeading1>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter></ExampleFooter>
    </UtrechtPage>
  );
}
