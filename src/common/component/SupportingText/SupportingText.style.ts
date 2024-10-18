import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const textStyle = (isError: boolean, isNotice: boolean) => {
  const textColor = isError ? theme.colors.sementic_red : isNotice ? theme.colors.key_500 : theme.colors.gray_400;

  return css({ color: textColor, wordBreak: 'break-word', ...theme.text.body04 });
};
