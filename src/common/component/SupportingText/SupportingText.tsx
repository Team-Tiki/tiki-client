import { ComponentPropsWithoutRef } from 'react';

import { textStyle } from '@/common/component/SupportingText/SupportingText.style';

interface SupportingTextProps extends ComponentPropsWithoutRef<'p'> {
  isError?: boolean;
  isNotice?: boolean;
}

const SupportingText = ({ isError = false, isNotice = false, children, ...props }: SupportingTextProps) => {
  return (
    <p {...props} css={textStyle(isError, isNotice)}>
      {children}
    </p>
  );
};

export default SupportingText;
