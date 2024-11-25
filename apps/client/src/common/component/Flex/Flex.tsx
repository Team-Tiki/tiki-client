import { ElementType, HTMLAttributes } from 'react';

import { FlexStyle, getFlexStyle } from '@/common/component/Flex/Flex.style';

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  tag?: ElementType;
  styles?: FlexStyle;
}

const Flex = ({ tag = 'div', styles = {}, children, ...props }: FlexProps) => {
  const Element = tag;

  return (
    <Element css={getFlexStyle(styles)} {...props}>
      {children}
    </Element>
  );
};

export default Flex;
