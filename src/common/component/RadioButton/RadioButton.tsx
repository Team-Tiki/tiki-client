import { InputHTMLAttributes } from 'react';

import { inputStyle, labelStyle, radioButtonLayoutStyle } from './RadioButton.style';

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioButton = ({ label, value, id, ...props }: RadioButtonProps) => {
  return (
    <div role="radio" aria-label="radio-button" tabIndex={0} css={radioButtonLayoutStyle}>
      <input id={id} type="radio" value={value} css={inputStyle} {...props} />
      <label htmlFor={id} css={labelStyle}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
