import { HTMLAttributes } from 'react';

import { textStyle } from './Text.style';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  tag?: 'body1' | 'body2' | 'body3' | 'body4' | 'body5' | 'body6' | 'body7' | 'body8' | 'body9' | 'body10';
}

const Text = ({ tag = 'body3', children, ...props }: TextProps) => {
  return (
    <p css={textStyle(tag)} {...props}>
      {children}
    </p>
  );
};

export default Text;
