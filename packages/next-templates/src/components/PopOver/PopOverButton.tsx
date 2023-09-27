import { Button } from '@utrecht/component-library-react';
import React, { ForwardedRef, HTMLAttributes, PropsWithChildren, MouseEvent, forwardRef } from 'react';

type ExtraProps = HTMLAttributes<HTMLButtonElement> & {
  popoverTarget?: string;
  popoverTargetAction?: string;
  appearance?: string;
};

let check = true;

interface PopOverButtonProps extends ExtraProps {}
export const PopOverButton = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<PopOverButtonProps>, ref: ForwardedRef<HTMLButtonElement>) => (
    <Button
      {...restProps}
      onClick={(evt: MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        const button = evt.target as HTMLButtonElement;
        const target = button.getAttribute('popovertarget');
        let targetEl = target ? button.ownerDocument.getElementById(target) : null;

        if (targetEl?.localName === 'dialog' && targetEl?.getAttribute('data-modal') === 'true') {
          if (check === true) {
            (targetEl as HTMLDialogElement).showModal();

            targetEl?.addEventListener('click', function (event) {
              const rect = targetEl.getBoundingClientRect();
              const isInDialog =
                rect.top <= event.clientY &&
                event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX &&
                event.clientX <= rect.left + rect.width;
              if (!isInDialog) {
                (targetEl as HTMLDialogElement).close();
              }
            });
            check = false;
          } else {
            (targetEl as HTMLDialogElement).close();
            check = true;
          }
        }
      }}
    >
      {children}
    </Button>
  ),
);
PopOverButton.displayName = 'PopOverButton';
