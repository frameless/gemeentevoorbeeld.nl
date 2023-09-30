import { Button } from '@utrecht/component-library-react';
import React, { ForwardedRef, HTMLAttributes, PropsWithChildren, MouseEvent, forwardRef, useState } from 'react';

type ExtraProps = HTMLAttributes<HTMLButtonElement> & {
  popoverTarget?: string;
  popoverTargetAction?: string;
  appearance?: string;
};

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

        if (targetEl?.localName === 'dialog' && targetEl?.getAttribute('data-modal')) {
          const dialog = targetEl as HTMLDialogElement;
          if (!dialog.open) {
            dialog.showModal();

            targetEl?.addEventListener('click', function (event) {
              const rect = dialog.getBoundingClientRect();
              const isInDialog =
                rect.top <= event.clientY &&
                event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX &&
                event.clientX <= rect.left + rect.width;
              if (!isInDialog) {
                dialog.close();
              }
            });
          } else {
            dialog.close();
          }
        }
      }}
    >
      {children}
    </Button>
  ),
);
PopOverButton.displayName = 'PopOverButton';
