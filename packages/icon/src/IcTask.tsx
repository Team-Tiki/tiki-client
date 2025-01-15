import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcTask = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#D9D9D9"
      d="M3.1 4.1c0-.6.4-1.1 1-1.1h15.8c.6 0 1.1.5 1 1.1L20 12H4z"
    />
    <path
      fill="#353F9B"
      d="M4.1 5.1c0-.6.4-1.1 1-1.1h13.8c.6 0 1.1.5 1 1.1l-.8 6.9H4.9z"
    />
    <path
      fill="#D9D9D9"
      d="M4 12h16l.9 7.9c.1.6-.4 1.1-1 1.1H4.1c-.6 0-1.1-.5-1-1.1z"
    />
    <path
      fill="#353F9B"
      d="M8.5 19h7c.3 0 .5.2.5.5s-.2.5-.5.5h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5"
    />
  </svg>
);
export default SvgIcTask;
