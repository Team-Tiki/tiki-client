import { InputHTMLAttributes } from 'react';

import { inputStyle, labelStyle, radioButtonLayoutStyle } from './RadioButton.style';

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  checked: boolean;
}

const RadioButton = ({ label, value, id, checked, ...props }: RadioButtonProps) => {
  return (
    <div role="radio" aria-label="radio-button" aria-checked={checked} tabIndex={0} css={radioButtonLayoutStyle}>
      <input id={id} type="radio" value={value} checked={checked} css={inputStyle} {...props} />
      <label htmlFor={id} css={labelStyle}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
