import React, { HTMLAttributes } from 'react';
import { Button, FormField, Paragraph } from '@utrecht/component-library-react';
import './file-input.css';

interface ExampleFileInputProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleFileInput = ({ ...props }: ExampleFileInputProps) => (
  <FormField className="voorbeeld-bijlage-flex-container">
    <input className="voorbeeld-file-input" />
    <Button type="button" appearance="secondary-action">
      Bestand Kiezen
    </Button>
    <Paragraph className="paragraph-space-bijlagen">Geen bestand gekozen</Paragraph>
  </FormField>
);

ExampleFileInput.displayName = 'ExampleFileInput';
