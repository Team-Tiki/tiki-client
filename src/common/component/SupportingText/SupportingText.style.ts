import { CSSObject } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const textStyle = ({ isError, isNotice }: { isError: boolean; isNotice: boolean }) => {
  const textColor = isError ? theme.colors.red : isNotice ? theme.colors.blue_900 : theme.colors.gray_400;

  const style: CSSObject = { color: textColor, wordBreak: 'break-word', ...theme.text.body04 };

  return style;
};
