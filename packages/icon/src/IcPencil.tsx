import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcPencil = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#525866"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M2.667 14h10.666M3.777 8.791a1.52 1.52 0 0 0-.444 1.074V12h2.149c.402 0 .789-.16 1.073-.445l6.334-6.337a1.52 1.52 0 0 0 0-2.147l-.626-.626a1.52 1.52 0 0 0-2.148 0z"
    />
  </svg>
);
export default SvgIcPencil;
