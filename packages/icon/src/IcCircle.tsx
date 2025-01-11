import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 8 8"
    {...props}
  >
    <circle cx={4} cy={4} r={4} fill="#353F9B" />
  </svg>
);
export default SvgIcCircle;
