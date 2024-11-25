import { ComponentPropsWithRef } from 'react';

import { commonStyle, tagStyle } from '@/common/component/Tag/Tag.style';

export interface TagProps extends ComponentPropsWithRef<'div'> {
  variant?: 'round' | 'square';
  color?: string;
  bgColor?: string;
}

const Tag = ({ variant = 'round', color = '#FFFFFF', bgColor = '#909090', children, ...props }: TagProps) => {
  return (
    <div css={[commonStyle, tagStyle({ variant, color, bgColor })]} {...props}>
      <span>{children}</span>
    </div>
  );
};

export default Tag;
