'use client';

import {
  UtrechtArticle,
  UtrechtHeading1,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
  UtrechtLink,
  UtrechtButtonGroup,
  UtrechtIcon,
  UtrechtAlert,
  UtrechtHeading2,
  UtrechtUrlData,
} from '@utrecht/web-component-library-react';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { Strong, UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import { IconPrinter, IconCircleCheck, IconFileText } from '@tabler/icons-react';
import '@/app/styling/css/wmebv.css';
import { ExampleHeaderFunnelWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderFunnelWmebv';
import { useEffect, useState } from 'react';

export default function home() {
  const [storedData, setStoredData] = useState<any>();

  useEffect(() => {
    const stored = sessionStorage.getItem('wmebv');

    setStoredData(stored ? { ...JSON.parse(stored), code: '230829-1118-59dc' } : { code: '230829-1118-59dc' });
  }, []);

  const deleteFormData = () => sessionStorage.removeItem('wmebv');

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <UtrechtAlert type="ok" className="utrecht-spotlight-section-wmebv">
            <UtrechtHeading1>
              <UtrechtIcon
                style={{
                  '--utrecht-icon-color': 'var(--_utrecht-alert-icon-color, currentColor)',
                }}
              >
                <IconCircleCheck size={33} />
              </UtrechtIcon>
              Vraag met succes verstuurd
            </UtrechtHeading1>
            <UtrechtParagraph>Kenmerk: {storedData?.code}</UtrechtParagraph>
          </UtrechtAlert>
          <UtrechtHeading2>Wat gaat er nu gebeuren?</UtrechtHeading2>
          <UnorderedList>
            <UnorderedListItem>
              U ontvangt een bevestigingsmail op
              <Strong>
                <UtrechtUrlData>{storedData?.email}</UtrechtUrlData>
              </Strong>
            </UnorderedListItem>
            <UnorderedListItem>De afdeling Vraagbaak gaat met uw vraag aan de slag.</UnorderedListItem>
          </UnorderedList>
          <UtrechtButtonGroup direction="column">
            <UtrechtLink href="#">
              <UtrechtIcon>
                <IconPrinter />
              </UtrechtIcon>
              Print uw vraag
            </UtrechtLink>
            <UtrechtLink href="/" download="vraag.pdf">
              <UtrechtIcon>
                <IconFileText />
              </UtrechtIcon>
              Download uw vraag als PDF
            </UtrechtLink>
            <UtrechtLink
              href="/wmebv"
              onClick={() => {
                deleteFormData();
                location.assign('/wmebv');
              }}
            >
              Terug naar voorbeeld.nl
            </UtrechtLink>
          </UtrechtButtonGroup>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}
