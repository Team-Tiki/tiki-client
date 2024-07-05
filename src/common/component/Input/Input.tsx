import React, { InputHTMLAttributes } from 'react';

import {
  inputContainerStyle,
  inputStyle,
  inputWarpperStyle,
  sizeStyle,
  variantStyle,
} from '@/common/component/Input/Input.style';
import { InputHeight, InputVariant } from '@/common/type/design';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: InputVariant;
  height?: InputHeight; //default: medium(4.8rem)
  label?: string;
  LeftIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>; //svg 컴포넌트
  isError?: boolean;
}

const Input = ({ type, placeholder, variant, height = 'medium', label, LeftIcon }: InputProps) => {
  return (
    <div css={inputContainerStyle}>
      {label && <p>{label}</p>}
      <div css={[inputWarpperStyle, variantStyle(variant), sizeStyle(height)]}>
        {LeftIcon && <LeftIcon />}
        <input type={type} placeholder={placeholder} css={[inputStyle]} />
      </div>
    </div>
  );
};

export default Input;
