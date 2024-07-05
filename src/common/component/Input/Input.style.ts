import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

//underline, outline: outline이면 보더 둥글게하고 underline이면 밑줄, 둥글게X
const borderStyle = {
  outline: '1px solid black',
  underline: '1px solid red',
};

const borderRadiusStyle = {
  outline: '30px',
  underline: '0px',
};

export const inputContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const inputStyle = ({}) =>
  css({
    border: borderStyle[variant]
    //여기서 varient를 받아서 나눠야함
  });

//아 이걸 각 경우(varient, size)에 따라 컬러나 값들을 만들어놓고
//그걸 저 위에서 조작 하는 느낌인가?
//const
