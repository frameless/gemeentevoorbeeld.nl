import { Heading3 } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, KeyboardEvent, PropsWithChildren, useRef, useState } from 'react';

export default function home() {
  return (
    <div>
      <h2>Details/Summary</h2>
      <div>
        <details className="utrecht-accordion">
          <summary className="utrecht-accordion__section">
            <Heading3 className="utrecht-button utrecht-button--subtle utrecht-accordion__button"></Heading3>
          </summary>
          <div className="utrecht-accordion__panel"></div>
        </details>
      </div>
    </div>
  );
}
