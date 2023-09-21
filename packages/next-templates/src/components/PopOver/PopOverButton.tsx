import { Button } from '@utrecht/component-library-react';
import React, { ForwardedRef, HTMLAttributes, PropsWithChildren, forwardRef } from 'react';

type ExtraProps = HTMLAttributes<HTMLButtonElement> & {
  popoverTarget?: string;
  popoverTargetAction?: string;
  appearance?: string;
};

interface PopOverButtonProps extends ExtraProps {}
export const PopOverButton = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<PopOverButtonProps>, ref: ForwardedRef<HTMLButtonElement>) => (
    <Button {...restProps}>{children}</Button>
  ),
);
PopOverButton.displayName = 'PopOverButton';
