import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcCaution = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#FE4F60"
      d="M14.7 8a6.7 6.7 0 1 1-13.4-.001 6.7 6.7 0 0 1 13.4 0"
    />
    <path fill="#fff" d="M8.6 10H7.3v1.3h1.3zM8.6 4.7H7.3v4h1.3z" />
  </svg>
);
export default SvgIcCaution;
