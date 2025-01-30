import { SVGProps } from '../../model/types/svg-props.type';

export const ArrowRight = ({ size = '16px', fill = 'white', className }: SVGProps) => {
  return (
    <svg
      className={className}
      fill='none'
      viewBox='0 0 16 16'
      width={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g style={{ clipPath: 'url(#clip0_28_104)' }}>
        <path
          d='M15.3333 7.33317V8.6665H14.6667V9.33317H14V9.99984H13.3333V10.6665H12.6667V11.3332H12V11.9998H11.3333V12.6665H10.6667V13.3332H10V13.9998H9.33333V14.6665H8.66667V15.3332H8V14.6665H7.33333V13.9998H6.66667V13.3332H7.33333V12.6665H8V11.9998H8.66667V11.3332H9.33333V10.6665H10V9.99984H10.6667V9.33317H0.666668V6.6665H10.6667V5.99984H10V5.33317H9.33333V4.6665H8.66667V3.99984H8V3.33317H7.33333V2.6665H6.66667V1.99984H7.33333V1.33317H8V0.666504H8.66667V1.33317H9.33333V1.99984H10V2.6665H10.6667V3.33317H11.3333V3.99984H12V4.6665H12.6667V5.33317H13.3333V5.99984H14V6.6665H14.6667V7.33317H15.3333Z'
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id='clip0_28_104'>
          <rect fill={fill} height={size} width={size} />
        </clipPath>
      </defs>
    </svg>
  );
};
