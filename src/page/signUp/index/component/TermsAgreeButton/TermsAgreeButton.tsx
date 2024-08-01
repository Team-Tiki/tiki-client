import { buttonStyle } from '@/page/signUp/index/component/TermsAgreeButton/TermsAgreeButton.style';

import { ComponentPropsWithoutRef } from 'react';

import Check from '@/common/asset/svg/check.svg?react';
import CheckActive from '@/common/asset/svg/check_active.svg?react';

interface TermsAgreeButtonProps extends ComponentPropsWithoutRef<'button'> {
  isClicked?: boolean;
}

const TermsAgreeButton = ({ isClicked = false, ...props }: TermsAgreeButtonProps) => {
  return (
    <button type="button" css={buttonStyle(isClicked)} {...props}>
      {isClicked ? <CheckActive /> : <Check />}
      약관 전체 동의
    </button>
  );
};

export default TermsAgreeButton;
