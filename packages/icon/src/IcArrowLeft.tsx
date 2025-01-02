import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#ADADAD"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 1 5 8l7 7"
    />
  </svg>
);
export default SvgIcArrowLeft;
