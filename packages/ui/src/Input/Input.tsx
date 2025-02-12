import { ForwardedRef, InputHTMLAttributes, ReactNode, forwardRef } from "react";

import { containerStyle, contentStyle, inputStyle } from "@/Input/Input.style";
import Label from "@/Label/Label";
import SupportingText from "@/SupportingText/SupportingText";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  LeftIcon?: ReactNode;
  isFilled?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  supportingText?: string;
}

const Input = (
  { label, isFilled = false, LeftIcon, isError = false, isSuccess = false, supportingText, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <div css={containerStyle}>
      {label && <Label id={label}>{label}</Label>}
      <div css={contentStyle(isFilled)}>
        {LeftIcon}
        <input ref={ref} css={inputStyle} autoComplete="off" {...props} />
      </div>
      {supportingText && (
        <SupportingText isError={isError} isSuccess={isSuccess}>
          {supportingText}
        </SupportingText>
      )}
    </div>
  );
};

export default forwardRef(Input);
