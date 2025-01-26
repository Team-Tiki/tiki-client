import * as React from "react";
import type { SVGProps } from "react";
const SvgIcAvatar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" {...props}>
    <rect width={32} height={32} fill="#DFE1E8" rx={16} />
    <circle cx={16} cy={11.636} r={4.364} fill="#F8F8FB" />
    <path
      fill="#F8F8FB"
      d="M17.818 17.455h-3.636a5.455 5.455 0 0 0-5.455 5.454c0 .603.489 1.091 1.091 1.091h12.364a1.09 1.09 0 0 0 1.09-1.09 5.455 5.455 0 0 0-5.454-5.455"
    />
  </svg>
);
export default SvgIcAvatar;
