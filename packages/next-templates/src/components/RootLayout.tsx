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
import { ColorSample, FormField } from '@utrecht/component-library-react';
import designTokens from '@nl-design-system-unstable/voorbeeld-design-tokens/dist/index.json';

interface DesignToken {
  type: string;
  value: string;
  filePath: string;
  isSource: boolean;
  original: object;
  name: string;
  attributes: {
    category: string;
    type: string;
    item: string;
    subitem: string;
    state: string;
  };
  path: string[];
}

interface DesignTokenMap {
  [index: string]: DesignToken;
}
interface DesignTokenValueMap {
  [index: string]: string | number | undefined;
}

interface UseTokenArgs {
  token: string;
  transformValue?: (value: string) => string;
}

const designTokensMap: DesignTokenMap = designTokens.reduce(
  (tokens, token) => ({ ...tokens, [token.path.join('.')]: token }),
  {},
);

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

const fallbackTokens: { [index: string]: string } = {
  'denhaag.sidenav.link.font-family': 'utrecht.document.font-family',
  'todo.avatar.text.font-family': 'utrecht.document.font-family',
  'todo.breadcrumb.font-family': 'utrecht.document.font-family',
  'todo.data-list.font-family': 'utrecht.document.font-family',
  'todo.form-field-label.font-family': 'utrecht.document.font-family',
  'todo.form-field-option-label.font-family': 'utrecht.document.font-family', // FIXME: In Figma this token name should change to `todo.form-field-option.label.font-family`
  'todo.form-field-option.label.font-family': 'utrecht.document.font-family',
  'todo.modal-dialog.header.label.font-family': 'utrecht.document.font-family', // FIXME: In Figma this token name should change to `todo.modal-dialog.header-label.font-family`
  'todo.modal-dialog.header-label.font-family': 'utrecht.document.font-family',
  'todo.pagination.font-family': 'utrecht.document.font-family',
  'todo.task-list.font-family': 'utrecht.document.font-family',
  'utrecht.accordion.button.font-family': 'utrecht.document.font-family',
  'utrecht.alert.heading.font-family': 'utrecht.document.font-family',
  'utrecht.blockquote.content.font-family': 'utrecht.document.font-family',
  'utrecht.blockquote.attribution.font-family': 'utrecht.document.font-family',
  'utrecht.button.font-family': 'utrecht.document.font-family',
  'utrecht.counter-badge.font-family': 'utrecht.document.font-family',
  'utrecht.drawer.header.label.font-family': 'utrecht.document.font-family', // FIXME: In Figma this token name should change to `todo.drawer.header-label.font-family`
  'utrecht.drawer.header-label.font-family': 'utrecht.document.font-family',
  'utrecht.form-field-description.font-family': 'utrecht.document.font-family',
  'utrecht.form-field-error-message.font-family': 'utrecht.document.font-family',
  'utrecht.link.font-family': 'utrecht.document.font-family',
  'utrecht.ordered-list.font-family': 'utrecht.document.font-family',
  'utrecht.paragraph-small-print.font-family': 'utrecht.document.font-family', // FIXME: In Figma this token name should change to `'utrecht.paragraph.small-print.font-family'`
  'utrecht.paragraph.small-print.font-family': 'utrecht.document.font-family',
  'utrecht.paragraph.lead.font-family': 'utrecht.document.font-family', // FIXME: In Figma this token name should change to `'utrecht.paragraph.lead.font-family`
  'utrecht.paragraph-lead.font-family': 'utrecht.document.font-family',
  'utrecht.select.font-family': 'utrecht.document.font-family',
  'utrecht.skip-link.font-family': 'utrecht.document.font-family',
  'utrecht.status-badge.font-family': 'utrecht.document.font-family',
  'utrecht.table.footer-cell.font-family': 'utrecht.document.font-family',
  'utrecht.table.data-cell.font-family': 'utrecht.document.font-family',
  'utrecht.table.caption.font-family': 'utrecht.document.font-family',
  'utrecht.table.header-cell.font-family': 'utrecht.document.font-family',
  'utrecht.textarea.font-family': 'utrecht.document.font-family',
  'utrecht.textbox.font-family': 'utrecht.document.font-family',
  'utrecht.paragraph.font-family': 'utrecht.document.font-family',
  'utrecht.heading.font-family': 'utrecht.document.font-family',
  'utrecht.heading-1.font-family': 'utrecht.heading.font-family',
  'utrecht.heading-2.font-family': 'utrecht.heading.font-family',
  'utrecht.heading-3.font-family': 'utrecht.heading.font-family',
  'utrecht.heading-4.font-family': 'utrecht.heading.font-family',
  'utrecht.heading-5.font-family': 'utrecht.heading.font-family',
  'utrecht.heading-6.font-family': 'utrecht.heading.font-family',

  'utrecht.accordion.button.color': 'utrecht.interaction.color',
  'utrecht.accordion.button.expanded.color': 'utrecht.interaction.color',
  'utrecht.button.subtle.color': 'utrecht.interaction.color',
  'utrecht.button.secondary-action.color': 'utrecht.interaction.color',
  'utrecht.button.secondary-action.border-color': 'utrecht.interaction.color',
  'utrecht.button.primary-action.background-color': 'utrecht.interaction.color',
  'utrecht.checkbox.indeterminate.background-color': 'utrecht.interaction.color',
  'utrecht.checkbox.checked.background-color': 'utrecht.interaction.color',
  'utrecht.link.visited.color': 'utrecht.interaction.color',
  'utrecht.link.text-decoration.color': 'utrecht.interaction.color',
  'utrecht.link.color': 'utrecht.interaction.color',
  'utrecht.radio.checked.background-color': 'utrecht.interaction.color',
  'denhaag.sidenav.link.color': 'utrecht.interaction.color',
  'todo.breadcrumb.link.color': 'utrecht.interaction.color',
  'todo.pagination.page-link.color': 'utrecht.interaction.color',
  'todo.pagination.relative.link.color': 'utrecht.interaction.color',
  'utrecht.focus.outline.color': 'utrecht.interaction.color',
  'utrecht.form-control.accent-color': 'utrecht.interaction.color',

  'utrecht.link.text-decoration-color': 'utrecht.link.color',

  'todo.avatar.background-color': 'voorbeeld.decoration.background-color', // FIXME

  'utrecht.paragraph.color': 'utrecht.document.color',
  'utrecht.paragraph.lead.color': 'utrecht.paragraph.color',
  'utrecht.heading.color': 'utrecht.document.color',
  'utrecht.heading-1.color': 'utrecht.heading.color',
  'utrecht.heading-2.color': 'utrecht.heading.color',
  'utrecht.heading-3.color': 'utrecht.heading.color',
  'utrecht.heading-4.color': 'utrecht.heading.color',
  'utrecht.heading-5.color': 'utrecht.heading.color',
  'utrecht.heading-6.color': 'utrecht.heading.color',
};

console.log(Object.keys(fallbackTokens).filter((token) => !designTokensMap[token]));

const createFontSizeScaleTokens = (exponent: number) =>
  Array(10)
    .fill(0)
    .map((_, index) => ({
      [`--frameless-font-scale-${index + 1}-number`]: Math.pow(exponent, index + 1),
      [`--frameless-font-scale-${index + 1}-font-size`]:
        `calc(var(--frameless-font-minimum-font-size, 1rem) * ${Math.pow(exponent, index + 1)})`,
    }))
    .reduce((obj, item) => ({ ...obj, ...item }), {});

const fontSizeRatioCssVariables = fontSizeRatios.map((obj) => {
  const { exponent } = obj;

  return {
    ...obj,
    cssVariables: createFontSizeScaleTokens(exponent),
  };
});

const toCustomProperty = (tokenName: string): string => `--${tokenName.replace(/\./g, '-')}`;

const resetCssVariables = Object.entries(fallbackTokens)
  .filter(
    ([tokenName, fallbackTokenName]) =>
      designTokensMap[tokenName] &&
      designTokensMap[fallbackTokenName] &&
      designTokensMap[tokenName].value === designTokensMap[fallbackTokenName].value,
  )
  .reduce((obj, [tokenName, fallbackTokenName]) => {
    return {
      ...obj,
      [toCustomProperty(tokenName)]: `var(${toCustomProperty(fallbackTokenName)})`,
    };
  }, {});

const designTokensMapToCssVariables = (tokens: DesignTokenValueMap) =>
  Object.entries(tokens).reduce((obj, [tokenName, value]) => {
    return {
      ...obj,
      [toCustomProperty(tokenName)]: value,
    };
  }, {});

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  const forcedColors = {
    'utrecht.document.color': 'CanvasText',
    'utrecht.focus.background-color': 'Highlight',
    'utrecht.focus.color': 'HighlightText',
    'utrecht.focus.outline-color': 'HighlightText',
    'utrecht.interaction.color': 'ButtonText',
    'utrecht.link.color': 'LinkText',
    'voorbeeld.decoration.background-color': 'AccentColor',
  };
  const [tokens, setTokens] = useState<DesignTokenValueMap>({
    'voorbeeld.decoration.background-color': '#5315F6',
    'voorbeeld.decoration.color': '#5315F6',
  });

  const [cssVariables, setCssVariables] = useState({
    ...resetCssVariables,
    ...designTokensMapToCssVariables(tokens),
  });

  const useToken = ({
    token,
    transformValue,
  }: UseTokenArgs): { defaultValue?: string } & Pick<HTMLAttributes<HTMLDivElement>, 'onInput'> => {
    return {
      defaultValue: Object.prototype.hasOwnProperty.call(designTokensMap, token)
        ? designTokensMap[token].value
        : undefined,
      onInput: (evt) => {
        const inputElement = evt.target as HTMLInputElement;
        if (inputElement) {
          let value = inputElement.value;
          if (transformValue) {
            value = transformValue(value);
          }
          const cssVariable = toCustomProperty(token);

          setTokens({ ...tokens, [token]: value });
          setCssVariables({ ...cssVariables, [cssVariable]: value });
        }
      },
    };
  };

  const fontFamilies = [
    'Arial',
    'Helvetica',
    'Verdana',
    'Times New Roman',
    'Fira Sans',
    'Open Sans',
    'IBM Plex Serif',
    'Roboto Serif',
    'Comic Sans MS',
    'Source Sans Pro',
    'Source Serif Pro',
    'Work Sans',
  ];

  const useColorSample = (token: string) => ({
    color: tokens[token]
      ? String(tokens[token])
      : designTokensMap[token]
        ? String(designTokensMap[token]?.value)
        : undefined,
  });

  return (
    <ThemeBuilder>
      <ThemeBuilderSidebar lang="en" className="frameless-theme frameless-theme--dark">
        <Heading1>Theme builder</Heading1>
        <details open>
          <summary>Color</summary>
          {/* Changing utrecht.document.color color does not work great because of more specific component tokens,
           such as utrecht.paragraph.color */}
          <FormFieldTextbox label="Text" {...useToken({ token: 'utrecht.document.color' })}></FormFieldTextbox>
          <ColorSample {...useColorSample('utrecht.document.color')}></ColorSample>

          <FormFieldTextbox
            label="Document background color"
            description="The background for most text."
            {...useToken({ token: 'utrecht.document.background-color' })}
          ></FormFieldTextbox>
          <ColorSample {...useColorSample('utrecht.document.background-color')}></ColorSample>

          <FormFieldTextbox
            label="Surface color"
            description="The background color that covers the browser canvas from edge to edge."
            {...useToken({ token: 'utrecht.surface.background-color' })}
          ></FormFieldTextbox>
          <ColorSample {...useColorSample('utrecht.surface.background-color')}></ColorSample>

          {/* Changing utrecht.link.color color does not work great when more specific component tokens are set,
           such as utrecht.link.hover.color and utrecht.link.underline.color */}
          <FormFieldTextbox label="Link color" {...useToken({ token: 'utrecht.link.color' })}></FormFieldTextbox>
          <ColorSample {...useColorSample('utrecht.link.color')}></ColorSample>

          {/* TODO: "Action accent color" should change a common token, not a component token */}
          <FormFieldTextbox
            label="Action accent color"
            {...useToken({ token: 'utrecht.interaction.color' })}
          ></FormFieldTextbox>
          <ColorSample {...useColorSample('utrecht.interaction.color')}></ColorSample>

          <FormFieldTextbox
            label="Decoration background color"
            {...useToken({ token: 'voorbeeld.decoration.background-color' })}
          ></FormFieldTextbox>
          <ColorSample {...useColorSample('voorbeeld.decoration.background-color')}></ColorSample>

          <FormFieldTextbox
            label="Decoration color"
            {...useToken({ token: 'voorbeeld.decoration.color' })}
          ></FormFieldTextbox>
          <ColorSample {...useColorSample('voorbeeld.decoration.color')}></ColorSample>

          {/* TODO: "Primary action accent color" should change a common token, not a component token */}
          <FormFieldTextbox
            label="Primary action color"
            {...useToken({ token: 'utrecht.button.primary-action.background-color' })}
          ></FormFieldTextbox>
          <ColorSample {...useColorSample('utrecht.button.primary-action.background-color')}></ColorSample>

          <FormFieldTextbox
            label="Focus background color"
            {...useToken({ token: 'utrecht.focus.background-color' })}
          ></FormFieldTextbox>
          <ColorSample {...useColorSample('utrecht.focus.background-color')}></ColorSample>
        </details>
        <details open>
          <summary>Font</summary>
          <div>
            <datalist id="font-family-values">
              {fontFamilies.map((font) => (
                <option key={font} value={font}>
                  {font}
                </option>
              ))}
            </datalist>
            <FormFieldTextbox
              list="font-family-values"
              label="Font"
              {...useToken({ token: 'utrecht.document.font-family' })}
            ></FormFieldTextbox>
            <FormFieldTextbox
              list="font-family-values"
              label="Heading font"
              {...useToken({ token: 'utrecht.heading.font-family' })}
            ></FormFieldTextbox>
            <FormField>
              <FormLabel>Font size scale</FormLabel>
              <Select
                onInput={(evt: FormEvent<HTMLSelectElement>) => {
                  const ratioValue = parseFloat((evt.target as HTMLSelectElement)?.value);

                  const scale = fontSizeRatioCssVariables.find(({ exponent }) => exponent === ratioValue);

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
            <FormFieldTextbox
              label="Font size scale exponent"
              min={1}
              max={2}
              step={0.01}
              type="range"
              onInput={(evt: FormEvent<HTMLSelectElement>) => {
                const ratioValue = parseFloat((evt.target as HTMLSelectElement)?.value);

                if (isFinite(ratioValue)) {
                  const tokens = createFontSizeScaleTokens(ratioValue);

                  setCssVariables(tokens);
                }
              }}
            ></FormFieldTextbox>
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
        <VoorbeeldTheme style={cssVariables}>
          <div>
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
