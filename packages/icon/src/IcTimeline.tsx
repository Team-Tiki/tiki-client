import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcTimeline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#525866"
      d="M8 10H4v1.333h4zM12 4.667H8V6h4zM10 7.333H6v1.334h4z"
    />
    <path
      fill="#525866"
      d="M12.667 2H3.333C2.6 2 2 2.6 2 3.333v9.334C2 13.4 2.6 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2m0 10.667H3.333V3.333h9.334z"
    />
  </svg>
);
export default SvgIcTimeline;
