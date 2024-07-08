import { HTMLAttributes } from 'react';

import { TextSize } from '@/common/type/design';

import { textStyle } from './Text.style';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  tag?: TextSize;
}

const Text = ({ tag = 'body3', children, ...props }: TextProps) => {
  return (
    <p css={textStyle(tag)} {...props}>
      {children}
    </p>
  );
};

export default Text;
