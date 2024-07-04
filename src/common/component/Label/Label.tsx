import { ComponentPropsWithoutRef } from 'react';

import { textStyle } from '@/common/component/Label/Label.style';

interface LabelProps extends Omit<ComponentPropsWithoutRef<'label'>, 'id'> {
  id: string;
}

const Label = ({ id, children }: LabelProps) => {
  return (
    <label css={textStyle} htmlFor={id}>
      {children}
    </label>
  );
};

export default Label;
