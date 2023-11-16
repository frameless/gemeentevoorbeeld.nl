import {
  FormField,
  FormFieldDescription,
  FormFieldErrorMessage,
  FormFieldProps,
  FormLabel,
  Textbox,
} from '@utrecht/component-library-react';
import { TextboxTypes } from '@utrecht/component-library-react/dist/Textbox';
import clsx from 'clsx';
import { ForwardedRef, ReactNode, forwardRef, useId } from 'react';

export interface FormFieldTextboxProps extends FormFieldProps {
  invalid?: boolean;
  disabled?: boolean;
  label: ReactNode;
  errorMessage?: ReactNode;
  description?: ReactNode;
  status?: ReactNode;
  readOnly?: boolean;
  placeholder?: string;
  min?: number | string;
  max?: number | string;
  autoComplete?: string;
  pattern?: string;
  type?: string;
  required?: boolean;
  value?: string | number;
  defaultValue?: string;
  onInput?: any;
  onChange?: any;
  onFocus?: any;
  onBlur?: any;
}

export const FormFieldTextbox = forwardRef(
  (
    {
      invalid,
      disabled,
      label,
      errorMessage,
      description,
      readOnly,
      status,
      autoComplete,
      min,
      max,
      placeholder,
      pattern,
      required,
      type,
      value,
      onChange,
      onInput,
      onFocus,
      onBlur,
      defaultValue,
      ...props
    }: FormFieldTextboxProps,
    ref: ForwardedRef<HTMLInputElement>,
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
          <Textbox
            ref={ref}
            id={inputId}
            className="utrecht-form-field__input"
            type={(type as TextboxTypes) || 'text'}
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
            min={typeof min === 'number' ? String(min) : typeof min === 'string' ? min : undefined}
            max={typeof max === 'number' ? String(max) : typeof max === 'string' ? max : undefined}
            pattern={pattern}
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

FormFieldTextbox.displayName = 'FormFieldTextbox';
