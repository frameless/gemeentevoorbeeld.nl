import { Formio, OFLibrary, OpenFormsModule, Templates, VERSION } from '@open-formulieren/sdk';
// import {Formio} from 'react-formio';
import { HTMLAttributes, PropsWithChildren, useEffect } from 'react';
import { Form } from 'react-formio';

export interface OpenFormProps extends HTMLAttributes<HTMLDivElement> {
  configuration: any;
}

export const OpenForm = ({ children, className, configuration, ...restProps }: PropsWithChildren<OpenFormProps>) => {
  useEffect(() => {
    console.log('Use OpenForms for FormIO');
    Formio.use(OpenFormsModule);
    Templates.current = OFLibrary;
  }, []);

  return (
    <div {...restProps} data-of-version={VERSION}>
      <Form form={configuration} options={{ noAlerts: true }} />
    </div>
  );
};

OpenForm.displayName = 'OpenForm';
