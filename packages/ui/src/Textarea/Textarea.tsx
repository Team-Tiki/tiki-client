import { ForwardedRef, TextareaHTMLAttributes, forwardRef, useRef } from "react";

import { contentStyle } from "@/Input/Input.style";
import Label from "@/Label/Label";
import { containerStyle, textareaStyle } from "@/Textarea/Textarea.style";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  isFilled?: boolean;
}

const Textarea = (
  { label, isFilled = false, value, onChange, ...props }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(e);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div css={containerStyle}>
      {label && <Label id={label}>{label}</Label>}
      <div css={contentStyle(isFilled)}>
        <textarea
          ref={(el) => {
            textareaRef.current = el;
            if (typeof ref === "function") ref(el);
            else if (ref) ref.current = el;
          }}
          rows={1}
          css={textareaStyle}
          value={value}
          onChange={handleInput}
          {...props}
        />
      </div>
    </div>
  );
};

export default forwardRef(Textarea);
