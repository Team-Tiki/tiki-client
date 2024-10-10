import { ComponentPropsWithRef, ReactNode } from 'react';

import { commonStyle, tagStyle } from '@/common/component/Tag/Tag.style';

export interface TagProps extends ComponentPropsWithRef<'div'> {
  variant?: 'round' | 'square';
  color?: string;
  children: ReactNode;
}

const Tag = ({ children, variant = 'round', color = '#909090', ...props }: TagProps) => {
  return (
    <div css={[commonStyle, tagStyle({ variant, color })]} {...props}>
      {children}
    </div>
  );
};

export default Tag;
