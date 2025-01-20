import { SVGProps } from '../../model/types/svg-props.type';

export const Chevron = ({ size = '24px', fill = 'none', className }: SVGProps) => {
  return (
    <svg
      className={className}
      fill={fill}
      viewBox='0 0 24 24'
      width={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M23 16V15H22V14H21V13H20V12H19V11H18V10H17V9H16V8H15V7H14V6H13V5H11V6H10V7H9V8H8V9H7V10H6V11H5V12H4V13H3V14H2V15H1V16H2V17H3V18H4V17H5V16H6V15H7V14H8V13H9V12H10V11H11V10H13V11H14V12H15V13H16V14H17V15H18V16H19V17H20V18H21V17H22V16H23Z'
        fill='white'
      />
    </svg>
  );
};
