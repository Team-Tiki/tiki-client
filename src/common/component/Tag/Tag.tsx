import { ComponentPropsWithRef } from 'react';

import { tagStyle } from '@/common/component/Tag/Tag.style';

interface TagProps extends ComponentPropsWithRef<'div'> {
  variant: 'round' | 'square';
}

const Tag = ({ children, variant, ...props }: TagProps) => {
  return (
    <div css={tagStyle({ variant })} {...props}>
      {children}
    </div>
  );
};

export default Tag;
