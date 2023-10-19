import React, { HTMLAttributes } from 'react';
import { Button, FormField, Paragraph } from '@utrecht/component-library-react';
import Dropzone from 'react-dropzone';
import './file-input.css';

interface ExampleFileInputProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleFileInput = ({ ...props }: ExampleFileInputProps) => (
  <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
    {({ getRootProps, getInputProps }) => (
      <FormField className="voorbeeld-bijlage-flex-container">
        <input className="voorbeeld-file-input" {...getInputProps()} />
        <Button type="button" appearance="secondary-action" {...getRootProps()}>
          Bestand Kiezen
        </Button>
        <Paragraph className="paragraph-space-bijlagen">Geen bestand gekozen</Paragraph>
      </FormField>
    )}
  </Dropzone>
);
ExampleFileInput.displayName = 'ExampleFileInput';
