import { InputHTMLAttributes } from 'react';

import { inputStyle, labelStyle, radioButtonLayoutStyle } from './RadioButton.style';

export interface RadioProps {
  label: string;
  name: string;
  value: string;
}

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  color?: string;
  bgColor?: string;
}

export default function RadioButton({ label, color, bgColor, value, id, ...props }: RadioButtonProps) {
  return (
    <div role="button" aria-label="radio-button" tabIndex={0} css={radioButtonLayoutStyle}>
      <input id={id} type="radio" value={value} css={inputStyle} {...props} />
      <label htmlFor={id} css={labelStyle({ color, bgColor })}>
        {label}
      </label>
    </div>
  );
}
