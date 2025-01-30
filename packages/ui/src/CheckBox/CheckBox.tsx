import { HTMLAttributes } from 'react';

import { inputStyle } from '@/CheckBox/CheckBox.style';

interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({ isChecked, onChange, ...props }: CheckBoxProps) => {
  return (
    <input
      aria-checked={isChecked}
      type="checkbox"
      css={inputStyle}
      onChange={(e) => onChange(e)}
      checked={isChecked}
      {...props}
    />
  );
};

export default CheckBox;
