import { IconExclamationCircle } from '@tabler/icons-react';
import { Alert, AlertProps } from '@utrecht/component-library-react';
import { UtrechtHeading2, UtrechtIcon, UtrechtLink, UtrechtParagraph } from '@utrecht/web-component-library-react';
import { ForwardedRef, forwardRef } from 'react';
import { FieldErrors } from 'react-hook-form';

export interface OptionalValidationAlertProps extends AlertProps {
  errors: FieldErrors;
}

export const OptionalValidationAlert = forwardRef(
  ({ errors, ...props }: OptionalValidationAlertProps, ref: ForwardedRef<HTMLDivElement>) => {
    const hasErrors = Object.values(errors).length > 0;
    return (
      <>
        {hasErrors && (
          <Alert
            ref={ref}
            type="error"
            icon={
              <UtrechtIcon>
                <IconExclamationCircle />
              </UtrechtIcon>
            }
            role="alert"
            {...props}
          >
            <UtrechtHeading2>Verbeter de fouten voor u verder gaat</UtrechtHeading2>
            {Object.entries(errors).map(
              ([name, error]) =>
                error?.message && (
                  <UtrechtParagraph key={name}>
                    <UtrechtLink href={`#field-${name}`}>{String(error?.message)}</UtrechtLink>
                  </UtrechtParagraph>
                ),
            )}
          </Alert>
        )}
      </>
    );
  },
);

OptionalValidationAlert.displayName = 'OptionalValidationAlert';
