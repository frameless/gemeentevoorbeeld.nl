import {
  FormField,
  FormFieldDescription,
  FormFieldErrorMessage,
  FormFieldProps,
  FormLabel,
  Textarea,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, ReactNode, forwardRef, useId } from 'react';

export interface FormFieldTextareaProps extends FormFieldProps {
  name?: string;
  invalid?: boolean;
  disabled?: boolean;
  label: ReactNode;
  errorMessage?: ReactNode;
  autoComplete?: string;
  description?: ReactNode;
  status?: ReactNode;
  readOnly?: boolean;
  placeholder?: string;
  type?: string;
  required?: boolean;
  value?: string | number;
  defaultValue?: string;
  onInput?: any;
  onChange?: any;
  onFocus?: any;
  onBlur?: any;
}

export const FormFieldTextarea = forwardRef(
  (
    {
      name,
      invalid,
      disabled,
      label,
      autoComplete,
      errorMessage,
      description,
      readOnly,
      status,
      placeholder,
      required,
      type,
      value,
      onChange,
      onInput,
      onFocus,
      onBlur,
      defaultValue,
      ...props
    }: FormFieldTextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    const inputId = useId();
    const descriptionId = useId();
    const statusId = useId();
    const errorMessageId = useId();

    return (
      <FormField invalid={invalid} {...props}>
        <p className="utrecht-form-field__label">
          <FormLabel htmlFor={inputId}>{label}</FormLabel>
        </p>
        {description && <FormFieldDescription id={descriptionId}>{description}</FormFieldDescription>}
        {invalid && errorMessage && (
          <FormFieldErrorMessage className="utrecht-form-field__error-message" id={errorMessageId}>
            {errorMessage}
          </FormFieldErrorMessage>
        )}
        <p className="utrecht-form-field__input">
          <Textarea
            ref={ref}
            id={inputId}
            name={name}
            className="utrecht-form-field__input"
            autoComplete={autoComplete}
            aria-describedby={
              clsx({
                [descriptionId]: description,
                [errorMessageId]: invalid,
                [statusId]: status,
              }) || undefined
            }
            invalid={invalid}
            dir="auto"
            disabled={disabled}
            placeholder={placeholder}
            readOnly={readOnly}
            aria-required={required}
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            onInput={onInput}
            onChange={onChange}
            defaultValue={defaultValue}
          />
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

FormFieldTextarea.displayName = 'FormFieldTextarea';
