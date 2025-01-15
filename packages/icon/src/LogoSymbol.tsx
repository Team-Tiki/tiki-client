import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLogoSymbol = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <rect width={40} height={40} fill="#353F9B" rx={10} />
    <g clipPath="url(#logo_symbol_svg__a)">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m29.5 10.5-4.243 4.243 4.243 4.242M27.5 23.793C27.333 25.863 25.8 30 21 30s-6.333-4.138-6.5-6.207 0-8.793 0-8.793h-5"
      />
      <rect width={4} height={8} x={12.5} y={9} fill="#fff" rx={2} />
    </g>
    <defs>
      <clipPath id="logo_symbol_svg__a">
        <path fill="#fff" d="M7.5 8h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogoSymbol;
