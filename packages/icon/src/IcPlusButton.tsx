import * as React from "react";
import type { SVGProps } from "react";
const SvgIcPlusButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10" {...props}>
    <g clipPath="url(#ic_plus_button_svg__a)">
      <path fill="#525866" d="M9.375 5.625h-3.75v3.75h-1.25v-3.75H.625v-1.25h3.75V.625h1.25v3.75h3.75z" />
    </g>
    <defs>
      <clipPath id="ic_plus_button_svg__a">
        <path fill="#fff" d="M0 0h10v10H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcPlusButton;
