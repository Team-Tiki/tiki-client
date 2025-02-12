import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react";

import Label from "@/Label/Label";
import { containerStyle, contentStyle, textareaStyle } from "@/Textarea/Textarea.style";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  isFilled?: boolean;
}

const Textarea = (
  { label, isFilled = false, value, onChange, ...props }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) => {
  return (
    <div css={containerStyle}>
      {label && <Label id={label}>{label}</Label>}
      <div css={contentStyle(isFilled)}>
        <textarea ref={ref} css={textareaStyle} value={value} onChange={onChange} {...props} />
      </div>
    </div>
  );
};

export default forwardRef(Textarea);
