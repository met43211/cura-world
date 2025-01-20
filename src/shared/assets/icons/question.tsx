import { SVGProps } from '../../model/types/svg-props.type';

export const Question = ({ size = '283px', fill = 'none', className }: SVGProps) => {
  return (
    <svg
      className={className}
      fill={fill}
      viewBox='0 0 283 283'
      width={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M212.25 58.9585V129.708H200.458V141.5H176.875V153.292H165.083V176.875H106.125V141.5H117.917V129.708H129.708V117.917H153.292V106.125H165.083V82.5418H153.292V70.7502H129.708V82.5418H117.917V94.3335H106.125V106.125H94.3333V94.3335H82.5416V82.5418H70.75V70.7502H58.9583V58.9585H70.75V47.1668H82.5416V35.3752H106.125V23.5835H176.875V35.3752H188.667V47.1668H200.458V58.9585H212.25Z'
        fill='white'
      />
      <path
        d='M153.292 212.25H165.083V247.625H153.292V259.417H117.917V247.625H106.125V212.25H117.917V200.458H153.292V212.25Z'
        fill='white'
      />
    </svg>
  );
};
