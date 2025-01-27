import * as React from "react";
import type { SVGProps } from "react";
const SvgIcTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="#525866"
      fillRule="evenodd"
      d="M11.333 3.333v-.666A1.333 1.333 0 0 0 10 1.333H6a1.333 1.333 0 0 0-1.333 1.334v.666h-2a.667.667 0 0 0 0 1.334h.666V12a2 2 0 0 0 2 2h5.334a2 2 0 0 0 2-2V4.667h.666a.667.667 0 1 0 0-1.334zM10 2.667H6v.666h4zm1.333 2H4.667V12a.667.667 0 0 0 .666.667h5.334a.667.667 0 0 0 .666-.667z"
      clipRule="evenodd"
    />
    <path fill="#525866" d="M6 6h1.333v5.333H6zm2.667 0H10v5.333H8.667z" />
  </svg>
);
export default SvgIcTrash;
