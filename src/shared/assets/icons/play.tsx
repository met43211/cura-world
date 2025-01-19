import { SVGProps } from '../../model/types/svg-props.type';

export const Play = ({ fill = 'none', size = '18', className }: SVGProps) => {
  return (
    <svg
      className={className}
      fill={fill}
      viewBox='0 0 18 18'
      width={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.5 8.25V9.75H15.75V10.5H15V11.25H13.5V12H12V12.75H11.25V13.5H9.75V14.25H8.25V15H7.5V15.75H6V16.5H4.5V17.25H2.25V16.5H1.5V1.5H2.25V0.75H4.5V1.5H6V2.25H7.5V3H8.25V3.75H9.75V4.5H11.25V5.25H12V6H13.5V6.75H15V7.5H15.75V8.25H16.5Z'
        fill='white'
      />
    </svg>
  );
};
