import { useState } from 'react';

import { SUPPORTING_TEXT } from '../../../../../../shared/constant/form';

type SupportingText = {
  text: string;
  type: 'default' | 'success' | 'error';
};

export const useSupportingText = () => {
  const [supportingText, setSupportingText] = useState<SupportingText>({
    text: SUPPORTING_TEXT.EMAIL_AUTH,
    type: 'default',
  });

  return {
    supportingText,
    setSupportingText,
  };
};
