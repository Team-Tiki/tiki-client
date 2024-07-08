import { ComponentPropsWithoutRef } from 'react';

import { textStyle } from '@/common/component/SupportingText/SupportingText.style';

interface SupportingTextProps extends ComponentPropsWithoutRef<'p'> {
  isError?: boolean;
  isNotice?: boolean;
}

const SupportingText = ({ isError = false, isNotice = false, children }: SupportingTextProps) => {
  return <p css={textStyle({ isError, isNotice })}>{children}</p>;
};

export default SupportingText;
