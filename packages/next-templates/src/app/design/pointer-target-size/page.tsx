'use client';
import {
  Article,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Page,
  Icon,
  PageContent,
  Paragraph,
  UnorderedList,
  FormFieldDescription,
} from '@utrecht/component-library-react';
import { IconTextSize } from '@tabler/icons-react';
import '../design.scss';
import {
  Code,
  CodeBlock,
  FormField,
  FormLabel,
  Link,
  RadioButton,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import { useId } from 'react';

export default function Home() {
  return (
    <Page className="voorbeeld-page--flex">
      <PageContent>
        <div>
          <Heading1>Pointer target size</Heading1>
          <Paragraph lead>
            Components should be large enough to click easily. Inaccurately clicking the wrong thing should not happen
            frequently.
          </Paragraph>
          <Paragraph>
            Research shows a minimum target size of 48×48px is very effective at creating click targets most users can
            accurately point at. These dimensions are quite a step up from the 24×24 px specified in the{' '}
            <Link href="https://nldesignsystem.nl/wcag/2.5.8">
              WCAG success criterium 2.5.8 for minimum target size
            </Link>
            , but based on research it is best to adhere to{' '}
            <Link href="https://nldesignsystem.nl/wcag/2.5.5">2.5.5 Target Size (AAA)</Link> for your minimum target
            size.
          </Paragraph>
          <Heading2>Choose your minimum target size</Heading2>
          {[24, 44, 48, 64].map((size) => {
            const id = useId();
            return (
              <FormField type="radio" key={size}>
                <RadioButton
                  id={id}
                  name="target-size"
                  value={size}
                  onInput={(evt) => {
                    const target = evt.target as HTMLInputElement;
                    if (target.checked) {
                      const newSize = target.value;

                      // TODO:
                      // setTokens({ 'frameless.pointer-target.min-size': `${newSize}px` });
                    }
                  }}
                />
                <FormLabel htmlFor={id}>
                  {size}×{size} pixels
                </FormLabel>
                <FormFieldDescription>
                  <label htmlFor={id}>
                    <div
                      role="presentation"
                      className="frameless-example-target-size"
                      style={{ '--frameless-size': `${size}px` }}
                    ></div>
                  </label>
                </FormFieldDescription>
              </FormField>
            );
          })}
          <Heading2>Components that should be affected</Heading2>
          <UnorderedList>
            <UnorderedListItem>Button</UnorderedListItem>
            <UnorderedListItem>Link, except for links in text.</UnorderedListItem>
            <UnorderedListItem>Textbox</UnorderedListItem>
            <UnorderedListItem>Textarea</UnorderedListItem>
            <UnorderedListItem>Select</UnorderedListItem>
            <UnorderedListItem>Radio button</UnorderedListItem>
            <UnorderedListItem>Checkbox</UnorderedListItem>
          </UnorderedList>
          <Heading2>Adapt minimum target size to user</Heading2>
          <Paragraph>
            It is possible to use a{' '}
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer">
              media query for <Code>pointer: coarse</Code>
            </Link>{' '}
            to increase the minimum target size for specific users:
          </Paragraph>
          <CodeBlock>
            {`@media (pointer: coarse) {
  .example-theme {
    --example-pointer-size-minimum: 48px;
  }
}`}
          </CodeBlock>
        </div>
      </PageContent>
    </Page>
  );
}
