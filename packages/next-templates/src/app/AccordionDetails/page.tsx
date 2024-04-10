import { Heading3, Paragraph } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { ForwardedRef, forwardRef, HTMLAttributes, KeyboardEvent, PropsWithChildren, useRef, useState } from 'react';
import './index.scss';

export default function home() {
  return (
    <div className="details-container">
      <h2>Details/Summary</h2>
      <div>
        <details className="utrecht-accordion">
          <summary>
            <div className="summary-container">
              <Heading3 className="utrecht-button utrecht-button--subtle utrecht-accordion__button">
                Item 1{' '}
                <div className="icon-chevron-down-wrapper">
                  <IconChevronDown />
                </div>
              </Heading3>
            </div>
          </summary>
          <Paragraph className="utrecht-accordion__panel">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur eos sed iusto vitae tenetur harum
            consequatur modi corrupti ducimus unde odio, voluptate minima. Quam alias fugit adipisci facilis vitae.
          </Paragraph>
        </details>
      </div>
    </div>
  );
}
