import { useState } from 'react';

import { SupportingText } from '@/page/login/password/type/supportingText';

import { SUPPORTING_TEXT } from '@/shared/constant/form';

export const useSupportingText = () => {
  const [emailSupportingText, setEmailSupportingText] = useState<SupportingText>({
    text: SUPPORTING_TEXT.EMAIL_AUTH,
    type: 'default',
  });

  const [codeSupportingText, setCodeSupportingText] = useState<SupportingText>({
    text: SUPPORTING_TEXT.AUTHCODE,
    type: 'default',
  });

  return {
    emailSupportingText,
    setEmailSupportingText,
    codeSupportingText,
    setCodeSupportingText,
  };
};
