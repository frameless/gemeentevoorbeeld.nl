'use client';

import { UtrechtPage } from '@utrecht/web-component-library-react';
import '@/app/styling/css/wmebv.css';
import { ContactFormSessionData, FORM_SESSION_KEY, useSessionState } from '../../SessionData';
import { ExampleFooterWmebv } from '@/components/wmebv/Footer/ExampleFooterWmebv';
import { ExampleHeaderFunnelWmebv } from '@/components/wmebv/Header/ExampleHeaderFunnelWmebv';
import { ExampleSuccessPage } from '@/components/wmebv/SuccessPage';
import { useEffect } from 'react';

export default function home() {
  const data = {
    email: '',
    code: '230829-1118-59dc',
  };
  const [storedData, _, __, removeStoredData] = useSessionState<ContactFormSessionData>(FORM_SESSION_KEY, data);

  const stepLabel = 'Uw vraag is met succes verstuurd';
  const websiteLabel = 'gemeente Voorbeeld';

  useEffect(() => {
    if (typeof document?.title === 'string') {
      document.title = `${stepLabel} - ${websiteLabel}`;
    }
  }, []);

  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv />
      <ExampleSuccessPage storedData={storedData} removeStoredData={removeStoredData} />
      <ExampleFooterWmebv />
    </UtrechtPage>
  );
}
