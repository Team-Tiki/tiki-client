import React, { InputHTMLAttributes } from 'react';

import {
  containerStyle,
  inputStyle,
  inputSupportStyle,
  sizeStyle,
  variantStyle,
  warpperStyle,
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
    <article css={containerStyle}>
      {label && <Label id={label}>{label}</Label>}
      <div css={inputSupportStyle}>
        <div css={[warpperStyle, variantStyle({ variant, isError }), sizeStyle(size)]}>
          {LeftIcon && <LeftIcon />}
          <input css={inputStyle} {...props} />
        </div>
        {supportingText && (
          <SupportingText isError={isError} isNotice={isNotice}>
            {supportingText}
          </SupportingText>
        )}
      </div>
    </article>
  );
};

export default Input;
