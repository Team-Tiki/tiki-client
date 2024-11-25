import { ComponentPropsWithoutRef } from 'react';

import IcCheck from '@/common/asset/svg/ic_check.svg?react';

import { buttonStyle } from '@/page/signUp/index/component/TermsAgreeButton/TermsAgreeButton.style';

interface TermsAgreeButtonProps extends ComponentPropsWithoutRef<'button'> {
  isClicked?: boolean;
}

const TermsAgreeButton = ({ isClicked = false, ...props }: TermsAgreeButtonProps) => {
  return (
    <button type="button" css={buttonStyle(isClicked)} {...props}>
      <IcCheck width={16} height={16} />
      약관 전체 동의
    </button>
  );
};

export default TermsAgreeButton;
