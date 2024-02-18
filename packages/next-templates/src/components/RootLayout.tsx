'use client';

import { FormEvent, HTMLAttributes, PropsWithChildren, RefObject, useRef, useState } from 'react';
import { VoorbeeldTheme } from './VoorbeeldTheme';
import {
  Document,
  FormLabel,
  Heading1,
  Select,
  SelectOption,
  SkipLink,
  Surface,
} from '@utrecht/component-library-react/dist/css-module';
import { ThemeBuilder, ThemeBuilderCanvas, ThemeBuilderSidebar } from './ThemeBuilder';
import { FormFieldTextbox } from './FormFieldTextbox';
import { FormField } from '@utrecht/component-library-react';

interface UseTokenArgs {
  token: string;
  transformValue?: (value: string) => string;
}

const fontSizeRatios = [
  { exponent: 1.067, label: 'Minor second' },
  { exponent: 1.125, label: 'Major second' },
  { exponent: 1.2, label: 'Minor third' },
  { exponent: 1.25, label: 'Major third' },
  { exponent: 1.333, label: 'Perfect fourth' },
  { exponent: 1.444, label: 'Augmented fourth' },
  { exponent: 1.5, label: 'Perfect fifth' },
  { exponent: 1.618, label: 'Golden Ratio' },
];

const fontSizeRatioCssVariables = fontSizeRatios.map((obj) => {
  const { exponent } = obj;

  const cssVariables = Array(10)
    .fill(0)
    .map((_, index) => ({
      [`--frameless-font-scale-${index + 1}-number`]: Math.pow(exponent, index + 1),
      [`--frameless-font-scale-${index + 1}-font-size`]:
        `calc(var(--frameless-font-minimum-font-size, 1rem) * ${Math.pow(exponent, index + 1)})`,
    }))
    .reduce((obj, item) => ({ ...obj, ...item }), {});

  return {
    ...obj,
    cssVariables,
  };
});

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  const [tokens, setTokens] = useState({});
  const [cssVariables, setCssVariables] = useState({});

  const useToken = ({
    token,
    transformValue,
  }: UseTokenArgs): { defaultValue?: string } & Pick<HTMLAttributes<HTMLDivElement>, 'onInput'> => {
    return {
      defaultValue: '',
      onInput: (evt) => {
        const inputElement = evt.target as HTMLInputElement;
        if (inputElement) {
          let value = inputElement.value;
          if (transformValue) {
            value = transformValue(value);
          }
          const cssVariable = `--${token.replace(/\./g, '-')}`;
          console.log(cssVariable, value);
          setTokens({ ...tokens, [token]: value });
          setCssVariables({ ...cssVariables, [cssVariable]: value });
        }
      },
    };
  };

  return (
    <ThemeBuilder>
      <ThemeBuilderSidebar lang="en" className="frameless-theme frameless-theme--dark">
        <Heading1>Theme builder</Heading1>
        <details open>
          <summary>Color</summary>
          {/* Changing utrecht.document.color color does not work great because of more specific component tokens,
           such as utrecht.paragraph.color */}
          <FormFieldTextbox label="Text" {...useToken({ token: 'utrecht.document.color' })}></FormFieldTextbox>
          <FormFieldTextbox
            label="Document background color"
            description="The background for most text."
            {...useToken({ token: 'utrecht.surface.background-color' })}
          ></FormFieldTextbox>
          <FormFieldTextbox
            label="Surface color"
            description="The background color that covers the browser canvas from edge to edge."
            {...useToken({ token: 'utrecht.surface.background-color' })}
          ></FormFieldTextbox>
          {/* Changing utrecht.link.color color does not work great when more specific component tokens are set,
           such as utrecht.link.hover.color and utrecht.link.underline.color */}
          <FormFieldTextbox label="Link color" {...useToken({ token: 'utrecht.link.color' })}></FormFieldTextbox>

          {/* TODO: "Action accent color" should change a common token, not a component token */}
          <FormFieldTextbox
            label="Action accent color"
            {...useToken({ token: 'utrecht.button.color' })}
          ></FormFieldTextbox>

          {/* TODO: "Primary action accent color" should change a common token, not a component token */}
          <FormFieldTextbox
            label="Primary action color"
            {...useToken({ token: 'utrecht.button.primary-action.background-color' })}
          ></FormFieldTextbox>

          <FormFieldTextbox
            label="Focus background color"
            {...useToken({ token: 'utrecht.focus.background-color' })}
          ></FormFieldTextbox>
        </details>
        <details open>
          <summary>Font</summary>
          <div>
            <FormFieldTextbox
              list="font-family-values"
              label="Font"
              {...useToken({ token: 'utrecht.document.font-family' })}
            ></FormFieldTextbox>
            <datalist id="font-family-values">
              <option value="Arial"></option>
              <option value="Helvetica"></option>
              <option value="Verdana"></option>
              <option value="Times New Roman"></option>
              <option value="Fira Sans"></option>
              <option value="Open Sans"></option>
              <option value="IBM Plex Serif"></option>
              <option value="Roboto Serif"></option>
              <option value="Source Sans Pro"></option>
              <option value="Source Serif Pro"></option>
              <option value="Work Sans"></option>
            </datalist>
            <FormField>
              <FormLabel>Font size scale</FormLabel>
              <Select
                onInput={(evt: FormEvent<HTMLSelectElement>) => {
                  const ratioValue = parseFloat((evt.target as HTMLSelectElement)?.value);

                  const scale = fontSizeRatioCssVariables.find(({ exponent }) => exponent === ratioValue);
                  console.log(evt.target, ratioValue, scale);
                  if (scale) {
                    setCssVariables(scale.cssVariables);
                  }
                }}
              >
                {fontSizeRatios.map(({ exponent, label }) => (
                  <SelectOption key={exponent} value={String(exponent)}>
                    {label}
                  </SelectOption>
                ))}
              </Select>
            </FormField>
          </div>
        </details>
        <details open>
          <summary>Space</summary>
          <div></div>
        </details>
        <details open>
          <summary>Rounded corners</summary>
          <div>
            {/* TODO: "Border radius" should change a common token, not a component token */}
            <FormFieldTextbox
              label="Border radius"
              min={0}
              max={16}
              type="range"
              {...useToken({ token: 'utrecht.button.border-radius', transformValue: (value) => `${value}px` })}
            ></FormFieldTextbox>
          </div>
        </details>
      </ThemeBuilderSidebar>
      <ThemeBuilderCanvas>
        <VoorbeeldTheme>
          <div style={cssVariables}>
            <Surface>
              <Document>
                <SkipLink href="#main">Naar inhoud</SkipLink>
                {children}
              </Document>
            </Surface>
          </div>
        </VoorbeeldTheme>
      </ThemeBuilderCanvas>
    </ThemeBuilder>
  );
}
