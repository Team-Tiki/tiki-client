import { ComponentPropsWithRef, ReactNode } from 'react';

import { commonStyle, tagStyle } from '@/common/component/Tag/Tag.style';

export interface TagProps extends ComponentPropsWithRef<'div'> {
  variant?: 'round' | 'square';
  color?: string;
  bgColor?: string;
  children: ReactNode;
}

const Tag = ({ children, variant = 'round', color = '#FFFFFF', bgColor = '#909090', ...props }: TagProps) => {
  return (
    <div css={[commonStyle, tagStyle({ variant, color, bgColor })]} {...props}>
      {children}
    </div>
  );
};

export default Tag;
