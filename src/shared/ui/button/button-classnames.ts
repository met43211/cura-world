import { VariantProps } from 'tailwind-variants';

import { tv } from '../../lib/utils/styling';

export const buttonTv = tv({
  base: 'px-4 min-w-20 h-10 text-[24px] gap-2 z-0 group inline-flex items-center justify-center relative box-border appearance-none outline-none select-none whitespace-nowrap min-w-max subpixel-antialiased overflow-hidden tap-highlight-transparent active:scale-97 active:shadow-none transition-transform-colors-opacity-shadow rounded-pixel',
  variants: {
    color: {
      default: 'bg-foreground text-primary',
      primary: 'bg-primary text-foreground',
    },
    fullWidth: {
      true: 'w-full',
    },
    isIconOnly: {
      true: 'px-0 !gap-0',
      false: '[&>svg]:max-w-[theme(spacing.8)]',
    },
    isDisabled: {
      true: 'opacity-50 active:scale-100',
    },
    isLoading: {
      true: 'opacity-50 active:scale-100',
    },
  },
  defaultVariants: {
    color: 'primary',
    width: 'fit',
    size: 'md',
    isIconOnly: false,
  },
});

export type ButtonTvProps = VariantProps<typeof buttonTv>;
