import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const textStyle = (textColor: string) =>
  css({ color: textColor, wordBreak: 'break-word', ...theme.text.body04 });
