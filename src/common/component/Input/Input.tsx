import { ForwardedRef, InputHTMLAttributes, ReactNode, forwardRef } from 'react';

import { containerStyle, contentStyle, inputStyle } from '@/common/component/Input/Input.style';
import Label from '@/common/component/Label/Label';
import SupportingText from '@/common/component/SupportingText/SupportingText';
import { theme } from '@/common/style/theme/theme';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  filled?: boolean;
  LeftIcon?: ReactNode;
  count?: string;
  isError?: boolean;
  isSuccess?: boolean;
  supportingText?: string;
}

const Input = (
  { label, filled = false, LeftIcon, count, isError = false, isSuccess = false, supportingText, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <div css={containerStyle}>
      {label && <Label id={label}>{label}</Label>}
      <div css={contentStyle(filled)}>
        {LeftIcon}
        <input ref={ref} css={inputStyle} {...props} />
        {count && <p css={{ ...theme.text.body06, color: theme.colors.gray_500 }}>{count}</p>}
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
