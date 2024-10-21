import { ForwardedRef, InputHTMLAttributes, ReactNode, forwardRef } from 'react';

import { containerStyle, contentStyle, inputStyle } from '@/common/component/Input/Input.style';
import Label from '@/common/component/Label/Label';
import SupportingText from '@/common/component/SupportingText/SupportingText';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  filled?: boolean;
  LeftIcon?: ReactNode;
  isError?: boolean;
  isSuccess?: boolean;
  supportingText?: string;
}

const Input = (
  { label, filled = false, LeftIcon, isError = false, isSuccess = false, supportingText, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <div css={containerStyle}>
      {label && <Label id={label}>{label}</Label>}
      <div css={contentStyle(filled)}>
        {LeftIcon}
        <input ref={ref} css={inputStyle} {...props} />
      </div>
      {supportingText && (
        <SupportingText isError={isError} isNotice={isSuccess}>
          {supportingText}
        </SupportingText>
      )}
    </div>
  );
};

export default forwardRef(Input);
