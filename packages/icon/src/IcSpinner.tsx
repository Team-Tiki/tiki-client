import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcSpinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g fill="#909090" clipPath="url(#ic_spinner_svg__a)">
      <path
        d="M10 19.688C4.662 19.688.313 15.338.313 10S4.662.313 10 .313c5.339 0 9.688 4.349 9.688 9.687 0 5.339-4.35 9.688-9.688 9.688m0-17.212c-4.142 0-7.513 3.37-7.513 7.513s3.37 7.513 7.513 7.513 7.513-3.37 7.513-7.513S14.143 2.476 10 2.476"
        opacity={0.2}
      />
      <path d="M18.627 10.938a1.075 1.075 0 0 1-1.07-1.073c0-4.085-3.321-7.408-7.402-7.408-.59 0-1.092-.483-1.092-1.072s.46-1.072 1.05-1.072h.031c5.27 0 9.544 4.288 9.544 9.552 0 .59-.482 1.072-1.072 1.072z" />
    </g>
    <defs>
      <clipPath id="ic_spinner_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcSpinner;
