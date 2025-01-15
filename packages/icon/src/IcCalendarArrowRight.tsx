import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcCalendarArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={23.25}
      height={23.25}
      x={-0.375}
      y={0.375}
      stroke="#DFE1E8"
      strokeWidth={0.75}
      rx={5.625}
      transform="matrix(-1 0 0 1 23.25 0)"
    />
    <path
      fill="#525866"
      d="m9.75 8.92.682-.67L14.25 12l-3.818 3.75-.682-.67L12.885 12z"
    />
  </svg>
);
export default SvgIcCalendarArrowRight;
