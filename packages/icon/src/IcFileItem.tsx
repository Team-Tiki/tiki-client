import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcFileItem = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#909090"
      d="M11.666 1.667H5c-.917 0-1.659.75-1.659 1.666l-.008 13.334c0 .916.742 1.666 1.658 1.666H15c.916 0 1.666-.75 1.666-1.666v-10zM5 16.667V3.333h5.833V7.5H15v9.167z"
    />
  </svg>
);
export default SvgIcFileItem;
