import { ElementType, forwardRef, ReactElement } from 'react';
import clsx from 'clsx';

import { PolymorphicComponentProps } from '../../model/types/polymorphic-components';

import { buttonTv, ButtonTvProps } from './button-classnames';

interface AdditionalProps {
  classNames?: {
    wrapper?: string;
    shadow?: string;
  };
  startContent?: React.ReactNode;
}

export type ButtonProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  ButtonTvProps & AdditionalProps
>;

export const Button = forwardRef(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <C extends ElementType = 'button'>(props: ButtonProps<C>, ref: React.Ref<any>) => {
    const {
      as,
      children,
      className,
      classNames,
      startContent,
      color,
      isDisabled,
      isLoading,
      ...buttonProps
    } = props;

    const Component = as || 'button';

    const buttonClassNames = buttonTv({
      color,
      isDisabled,
      isLoading,
      className,
    });

    return (
      <div className={clsx('relative w-fit', classNames?.wrapper)}>
        <Component
          className={buttonClassNames}
          disabled={isDisabled || isLoading}
          {...buttonProps}
          ref={ref}
        >
          {startContent}
          {children}
        </Component>
        <div
          className={clsx(
            'absolute w-full h-full -bottom-[3px] -right-[4px] bg-primary-shadow rounded-pixel -z-10',
            classNames?.shadow,
          )}
        />
      </div>
    );
  },
) as <C extends ElementType = 'button'>(
  // eslint-disable-next-line no-unused-vars
  props: ButtonProps<C> & { ref?: React.Ref<React.ComponentRef<C>> },
) => ReactElement;
