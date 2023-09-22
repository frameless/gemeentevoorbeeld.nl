import React, { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import {
  FormLabel,
  FormFieldDescription,
  FormField,
  Paragraph,
  Textbox,
  Textarea,
} from '@utrecht/component-library-react';

export interface FormFieldInputProps extends HTMLAttributes<HTMLDivElement> {
  type: string;
  htmlfor: string;
  name: string;
  id: string;
  autocomplete: string;
  label: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode;
  classification: boolean;
}

export const FormFieldInput = ({
  type,
  label,
  description,
  errorMessage,
  children,
  htmlfor,
  id,
  autocomplete,
  name,
  classification,
}: PropsWithChildren<FormFieldInputProps>) => (
  <FormField type={type}>
    {label && (
      <Paragraph className={'utrecht-form-field__label'}>
        <FormLabel className="voorbeeld-form-label" htmlFor={htmlfor}>
          {label}
        </FormLabel>
      </Paragraph>
    )}
    {description && (
      <FormFieldDescription className={'utrecht-form-field__description'}>{description}</FormFieldDescription>
    )}
    <Paragraph className={'utrecht-form-field__input'}>{children}</Paragraph>
    {errorMessage && (
      <FormFieldDescription className={'utrecht-form-field__description'} invalid>
        {errorMessage}
      </FormFieldDescription>
    )}

    {classification ? (
      <Textarea id={id} autoComplete={autocomplete} name={name} />
    ) : (
      <Textbox id={id} autoComplete={autocomplete} name={name} />
    )}
  </FormField>
);
