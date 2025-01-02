import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcFileRound = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <rect width={32} height={32} fill="#fff" rx={16} />
    <path
      fill="#909090"
      d="M17.333 9.333H12c-.733 0-1.327.6-1.327 1.334l-.007 10.666c0 .734.594 1.334 1.327 1.334H20c.733 0 1.333-.6 1.333-1.334v-8zm-5.333 12V10.667h4.666V14H20v7.333z"
    />
  </svg>
);
export default SvgIcFileRound;
