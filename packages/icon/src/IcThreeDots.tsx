import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcThreeDots = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#909090"
      stroke="#909090"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M8 4a.667.667 0 1 0 0-1.333A.667.667 0 0 0 8 4M8 13.333A.667.667 0 1 0 8 12a.667.667 0 0 0 0 1.333"
    />
  </svg>
);
export default SvgIcThreeDots;
