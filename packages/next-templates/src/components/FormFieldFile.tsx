import {
  Button,
  FormField,
  FormFieldDescription,
  FormFieldErrorMessage,
  FormFieldProps,
  FormLabel,
  Textbox,
} from '@utrecht/component-library-react';
import { TextboxTypes } from '@utrecht/component-library-react/dist/Textbox';
import clsx from 'clsx';
import { ForwardedRef, ReactNode, forwardRef, useId, useRef } from 'react';

export interface FormFieldFileProps extends FormFieldProps {
  name?: string;
  invalid?: boolean;
  disabled?: boolean;
  label: ReactNode;
  errorMessage?: ReactNode;
  description?: ReactNode;
  status?: ReactNode;
  readOnly?: boolean;
  required?: boolean;
  value?: string | number;
  defaultValue?: string;
  onInput?: any;
  onChange?: any;
  onFocus?: any;
  onBlur?: any;
  buttonLabel?: string;
}

export const FormFieldFile = forwardRef(
  (
    {
      name,
      invalid,
      disabled,
      label,
      errorMessage,
      description,
      readOnly,
      status,
      required,
      type,
      value,
      onChange,
      onInput,
      onFocus,
      onBlur,
      defaultValue,
      buttonLabel,
      ...props
    }: FormFieldFileProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const labelId = useId();
    const inputId = useId();
    const descriptionId = useId();
    const statusId = useId();
    const errorMessageId = useId();
    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <FormField invalid={invalid} {...props}>
        <p className="utrecht-form-field__label">
          <FormLabel id={labelId} htmlFor={inputId}>
            {label}
          </FormLabel>
        </p>
        {description && <FormFieldDescription id={descriptionId}>{description}</FormFieldDescription>}
        {invalid && errorMessage && (
          <FormFieldErrorMessage className="utrecht-form-field__error-message" id={errorMessageId}>
            {errorMessage}
          </FormFieldErrorMessage>
        )}
        <p className="utrecht-form-field__input">
          <Textbox
            name={name}
            tabIndex={-1}
            aria-hidden="true"
            id={inputId}
            aria-describedby={descriptionId}
            type={'file' as TextboxTypes}
            className="sr-only"
            ref={inputRef}
          ></Textbox>
          <Button
            aria-labelledby={labelId}
            aria-describedby={
              clsx({
                [descriptionId]: description,
                [errorMessageId]: invalid,
                [statusId]: status,
              }) || undefined
            }
            aria-controls={inputId}
            appearance="secondary-action-button"
            onClick={() => {
              inputRef?.current?.click();
            }}
          >
            {buttonLabel}
          </Button>
        </p>
        {status && (
          <div className="utrecht-form-field__status" id={statusId}>
            <div className="utrecht-form-field-description utrecht-form-field-description--status">{status}</div>
          </div>
        )}
      </FormField>
    );
  },
);

FormFieldFile.displayName = 'FormFieldFile';
