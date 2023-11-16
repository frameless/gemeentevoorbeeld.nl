import { IconExclamationCircle } from '@tabler/icons-react';
import { Alert } from '@utrecht/component-library-react';
import { UtrechtHeading2, UtrechtIcon, UtrechtLink, UtrechtParagraph } from '@utrecht/web-component-library-react';
import { FieldErrors } from 'react-hook-form';

export interface OptionalValidationAlertProps {
  errors: FieldErrors;
}

export const OptionalValidationAlert = <T,>({ errors }: OptionalValidationAlertProps) => {
  const hasErrors = Object.values(errors).length > 0;
  return (
    <>
      {hasErrors && (
        <Alert
          type="error"
          icon={
            <UtrechtIcon>
              <IconExclamationCircle />
            </UtrechtIcon>
          }
          role="alert"
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
};
