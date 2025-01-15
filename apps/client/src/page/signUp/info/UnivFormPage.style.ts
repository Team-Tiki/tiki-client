import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const timeStyle = css({
  position: 'absolute',
  right: 12,
  top: 0,
  bottom: 0,

  height: 'fit-content',

  margin: 'auto 0',

  ...theme.text.body08,
  color: theme.colors.gray_500,
});
