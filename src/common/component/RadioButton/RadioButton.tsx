import { InputHTMLAttributes } from 'react';

import { inputStyle, labelStyle, radioButtonLayoutStyle } from './RadioButton.style';

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  color?: string;
  bgColor?: string;
  checkedColor?: string;
  checkedBgColor?: string;
}

const RadioButton = ({
  label,
  color,
  bgColor,
  checkedColor,
  checkedBgColor,
  value,
  id,
  ...props
}: RadioButtonProps) => {
  return (
    <div role="button" aria-label="radio-button" tabIndex={0} css={radioButtonLayoutStyle}>
      <input id={id} type="radio" value={value} css={inputStyle({ checkedColor, checkedBgColor })} {...props} />
      <label htmlFor={id} css={labelStyle({ color, bgColor })}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
