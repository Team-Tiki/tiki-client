declare module '*.svg' {
  import type React from 'react';

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
