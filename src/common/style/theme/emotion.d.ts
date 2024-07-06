import '@emotion/react';

import { ColorsTypes } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsTypes;
    heading: typeof heading;
    text: typeof text;
    label: typeof label;
    zIndex: typeof zIndex;
  }
}
