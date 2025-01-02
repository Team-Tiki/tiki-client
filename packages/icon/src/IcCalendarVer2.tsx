import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcCalendarVer2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <mask id="ic_calendar_ver2_svg__a" fill="#fff">
      <rect width={12} height={11} x={2} y={3} rx={1} />
    </mask>
    <rect
      width={12}
      height={11}
      x={2}
      y={3}
      stroke="#525866"
      strokeWidth={2.4}
      mask="url(#ic_calendar_ver2_svg__a)"
      rx={1}
    />
    <path stroke="#525866" strokeWidth={1.2} d="M2.5 6h11" />
    <path
      fill="#525866"
      d="M5.1 2a.6.6 0 0 0-1.2 0zm0 1.5V2H3.9v1.5zM12.1 2a.6.6 0 1 0-1.2 0zm0 1.5V2h-1.2v1.5z"
    />
    <rect width={3} height={2} x={4} y={7} fill="#525866" rx={0.6} />
  </svg>
);
export default SvgIcCalendarVer2;
