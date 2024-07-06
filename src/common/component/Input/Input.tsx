import React, { InputHTMLAttributes } from 'react';

import {
  inputContainerStyle,
  inputStyle,
  inputWarpperStyle,
  sizeStyle,
  variantStyle,
} from '@/common/component/Input/Input.style';

type InputSize = 'small' | 'medium';
type InputVariant = 'outline' | 'underline' | 'colored';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: InputVariant;
  inputSize?: InputSize; //default: medium(p: 1.2rem)
  label?: string;
  LeftIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>; //svg 컴포넌트
  isError?: boolean;
}

const Input = ({ variant, inputSize = 'medium', label, LeftIcon, ...props }: InputProps) => {
  return (
    <div css={inputContainerStyle}>
      {label && <p>{label}</p>}
      <div css={[inputWarpperStyle, variantStyle(variant), sizeStyle(inputSize)]}>
        {LeftIcon && <LeftIcon />}
        <input css={[inputStyle]} {...props} />
      </div>
    </div>
  );
};

export default Input;
