import React, { ForwardedRef, HTMLAttributes, PropsWithChildren, forwardRef } from 'react';

type ExtraProps = HTMLAttributes<HTMLElement> & {
  popover?: string;
};

interface PopOverDialogProps extends ExtraProps {}
export const PopOverDialog = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<PopOverDialogProps>, ref: ForwardedRef<HTMLButtonElement>) => (
    <dialog {...restProps}>{children}</dialog>
  ),
);
PopOverDialog.displayName = 'PopOverDialog';
