import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

import { containerStyle, inputStyle, variantStyle } from '@/common/component/Input/Input.style';
import Label from '@/common/component/Label/Label';
import SupportingText from '@/common/component/SupportingText/SupportingText';

type InputVariant = 'default' | 'search';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  label?: string;
  filled?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  supportingText?: string;
}

const Input = (
  {
    variant = 'default',
    label,
    filled = false,
    isError = false,
    isSuccess = false,
    supportingText,
    ...props
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <article css={containerStyle}>
      {label && <Label id={label}>{label}</Label>}
      <div css={variantStyle(variant, filled)}>
        <input ref={ref} css={inputStyle} {...props} />
      </div>
      {supportingText && (
        <SupportingText isError={isError} isNotice={isSuccess}>
          {supportingText}
        </SupportingText>
      )}
    </article>
  );
};

export default forwardRef(Input);
