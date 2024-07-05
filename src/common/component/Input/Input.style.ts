import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';
import { InputLength, InputVariant } from '@/common/type/design';

const borderStyle = {
  outline: {
    border: `1px solid ${theme.colors.gray_400}`,
    borderRadius: '30px',
  },
  underline: {
    borderColor: `transparent transparent ${theme.colors.gray_400} transparent`,
  },
};

const size = {
  short: { width: '32rem', height: '4.8rem', ...theme.text.body02 },
  medium: { width: '37.5rem', height: '3.8rem', ...theme.text.body04 },
  long: { width: '51.1rem', height: '4.8rem', ...theme.text.body02 },
};

export const inputContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const inputStyle = ({ variant, inputLength }: { variant: InputVariant; inputLength: InputLength }) =>
  css({
    ...size[inputLength],
    ...borderStyle[variant],
    weight: 400,
  });

//아 이걸 각 경우(varient, size)에 따라 컬러나 값들을 만들어놓고
//그걸 저 위에서 조작 하는 느낌인가?
//const
