import * as React from "react";
import type { SVGProps } from "react";
const SvgIcAddWhite = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" {...props}>
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      clipPath="url(#ic_add_white_svg__a)"
    >
      <path d="M8 1v14M1 8h14" />
    </g>
    <defs>
      <clipPath id="ic_add_white_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcAddWhite;
