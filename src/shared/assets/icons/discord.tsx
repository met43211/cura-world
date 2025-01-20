import { SVGProps } from '../../model/types/svg-props.type';

export const Discord = ({ size = '132px', fill = 'white', className }: SVGProps) => {
  return (
    <svg
      className={className}
      fill='none'
      viewBox='0 0 132 132'
      width={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M121 60.5V44H115.5V33H110V27.5H99V22H82.5V27.5H49.5V22H33V27.5H22V33H16.5V44H11V60.5H5.5V99H16.5V104.5H27.5V110H38.5V99H33V93.5H44V99H49.5V104.5H82.5V99H88V93.5H99V99H93.5V110H104.5V104.5H115.5V99H126.5V60.5H121ZM49.5 82.5H38.5V77H33V66H38.5V60.5H49.5V66H55V77H49.5V82.5ZM99 77H93.5V82.5H82.5V77H77V66H82.5V60.5H93.5V66H99V77Z'
        fill={fill}
      />
    </svg>
  );
};
