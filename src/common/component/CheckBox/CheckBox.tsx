import { HTMLAttributes } from 'react';

import { inputStyle } from '@/common/component/CheckBox/CheckBox.style';

interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onChange: () => void;
}

const CheckBox = ({ checked, onChange, ...props }: CheckBoxProps) => {
  return (
    <input aria-checked={checked} type="checkbox" css={inputStyle} onChange={onChange} checked={checked} {...props} />
  );
};

export default CheckBox;
