import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcImageFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <path
      fill="#D6D5D5"
      d="M35 5H5C3.333 5 1.667 6.667 1.667 8.333v23.334C1.667 33.5 3.167 35 5 35h30c1.667 0 3.333-1.667 3.333-3.333V8.333C38.333 6.667 36.667 5 35 5m0 26.533c-.033.05-.1.1-.133.134H5v-23.2l.133-.134H34.85c.05.034.1.1.133.134v23.066zM18.333 25.85l-4.166-5.017-5.834 7.5h23.334l-7.5-10z"
    />
  </svg>
);
export default SvgIcImageFile;
