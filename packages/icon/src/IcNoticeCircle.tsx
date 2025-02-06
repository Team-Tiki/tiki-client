import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcNoticeCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 46 46"
    {...props}
  >
    <rect width={43} height={43} x={1.5} y={1.5} fill="#fff" rx={21.5} />
    <rect
      width={43}
      height={43}
      x={1.5}
      y={1.5}
      stroke="#FAFAFA"
      strokeWidth={3}
      rx={21.5}
    />
    <path fill="#353F9B" d="M16 20.5v3h-1c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1z" />
    <path
      fill="#D9D9D9"
      d="M16 20.8c0-.9.6-1.6 1.4-1.9l12-4c1.3-.5 2.6.5 2.6 1.9v10.5c0 1.4-1.3 2.3-2.6 1.9l-12-4c-.8-.3-1.4-1-1.4-1.9z"
    />
    <path
      fill="#353F9B"
      d="m17.5 25.2 3 1 .7 4.9c.1 1.1-.7 2.1-1.9 2.1-1 0-1.9-.8-1.9-1.9v-6.1z"
    />
  </svg>
);
export default SvgIcNoticeCircle;
