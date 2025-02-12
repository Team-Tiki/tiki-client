import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#909090"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 3h12M2 8h12M2 13h12"
    />
  </svg>
);
export default SvgIcList;
