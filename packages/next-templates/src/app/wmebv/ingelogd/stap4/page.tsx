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
import { Strong, UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import { IconPrinter, IconCircleCheck, IconFileText } from '@tabler/icons-react';
import { ExampleHeaderFunnelWmebv } from '@/components/wmebv/Header/ExampleHeaderFunnelWmebv';
import '@/app/styling/css/wmebv.css';
import { ContactFormSessionData, FORM_SESSION_KEY, useSessionState } from '../../SessionData';
import { ExampleFooterWmebv } from '@/components/wmebv/Footer/ExampleFooterWmebv';
import { ExampleSuccessPage } from '@/components/wmebv/SuccessPage';

export default function home() {
  const userdata = {
    username: 'J. van Drouwen',
    userURL: '/mijn-omgeving/',
  };

  const data = {
    code: '230829-1118-59dc',
    email: 'j.vandrouwen@gmail.com',
  };

  const [storedData, _, __, removeStoredData] = useSessionState<ContactFormSessionData>(FORM_SESSION_KEY, data);

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv userURL={userdata.userURL} username={userdata.username} />
      <ExampleSuccessPage storedData={storedData} removeStoredData={removeStoredData} mijnOmgeving />
      <ExampleFooterWmebv />
    </UtrechtPage>
  );
}
