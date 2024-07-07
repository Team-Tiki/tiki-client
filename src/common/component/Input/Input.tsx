import React, { InputHTMLAttributes } from 'react';

import {
  inputContainerStyle,
  inputStyle,
  inputWarpperStyle,
  sizeStyle,
  variantStyle,
} from '@/common/component/Input/Input.style';
import Label from '@/common/component/Label/Label';
import SupportingText from '@/common/component/SupportingText/SupportingText';

type InputSize = 'small' | 'medium' | 'large';
type InputVariant = 'outline' | 'underline' | 'colored';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant: InputVariant;
  size?: InputSize; //default: medium(p: 1.2rem)
  label?: string;
  LeftIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>; //svg 컴포넌트
  isError?: boolean;
  isNotice?: boolean;
  supportingText?: string;
}

const Input = ({
  variant,
  size = 'medium',
  label,
  LeftIcon,
  isError = false,
  isNotice = false,
  supportingText,
  ...props
}: InputProps) => {
  return (
    <article css={inputContainerStyle}>
      {label && <Label id={label}>{label}</Label>}
      <div css={[inputWarpperStyle, variantStyle({ variant, isError }), sizeStyle(size)]}>
        {LeftIcon && <LeftIcon />}
        <input css={inputStyle} {...props} />
      </div>
      {supportingText && <SupportingText text={supportingText} isError={isError} isNotice={isNotice} />}
    </article>
  );
};

export default Input;
