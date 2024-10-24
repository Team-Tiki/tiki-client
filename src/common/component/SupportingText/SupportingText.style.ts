import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const textStyle = (isError: boolean, isNotice: boolean) => {
  const textColor = isError
    ? theme.colors.sementic_red
    : isNotice
      ? theme.colors.sementic_success
      : theme.colors.gray_400;

  return css({ color: textColor, paddingLeft: '0.8rem', wordBreak: 'break-word', ...theme.text.body09 });
};
