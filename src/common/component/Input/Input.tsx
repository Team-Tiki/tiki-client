import { ChangeEvent, ForwardedRef, InputHTMLAttributes, ReactNode, forwardRef, useState } from 'react';

import { containerStyle, contentStyle, countStyle, inputStyle } from '@/common/component/Input/Input.style';
import Label from '@/common/component/Label/Label';
import SupportingText from '@/common/component/SupportingText/SupportingText';
import { theme } from '@/common/style/theme/theme';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  filled?: boolean;
  LeftIcon?: ReactNode;
  hasCount?: boolean; //글자수 세기
  isError?: boolean;
  isSuccess?: boolean;
  supportingText?: string;
}

const Input = (
  {
    label,
    filled = false,
    LeftIcon,
    hasCount,
    isError = false,
    isSuccess = false,
    supportingText,
    ...props
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [count, setCount] = useState(0);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (count === props.maxLength) {
      e.target.value = e.target.value.substring(0, props.maxLength);
    }
    setCount(e.target.value.length);
  };
  return (
    <div css={containerStyle}>
      {label && <Label id={label}>{label}</Label>}
      <div css={contentStyle(filled)}>
        {LeftIcon}
        <input ref={ref} onChange={onChange} css={inputStyle} {...props} />
        {hasCount && (
          <span css={countStyle}>
            {count}/{props.maxLength}
          </span>
        )}
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
