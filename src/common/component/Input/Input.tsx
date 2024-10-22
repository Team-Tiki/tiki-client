import { ChangeEvent, ForwardedRef, InputHTMLAttributes, ReactNode, forwardRef, useState } from 'react';

import { containerStyle, contentStyle, inputStyle } from '@/common/component/Input/Input.style';
import Label from '@/common/component/Label/Label';
import SupportingText from '@/common/component/SupportingText/SupportingText';
import { theme } from '@/common/style/theme/theme';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  filled?: boolean;
  LeftIcon?: ReactNode;
  maxLength?: number;
  isError?: boolean;
  isSuccess?: boolean;
  supportingText?: string;
}

const Input = (
  {
    label,
    filled = false,
    LeftIcon,
    maxLength,
    isError = false,
    isSuccess = false,
    supportingText,
    ...props
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  //변수 선언해서 count/maxLength 보여주자!
  const [count, setCount] = useState(0);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (count === maxLength) {
      //글자수 제한
      e.target.value = e.target.value.substring(0, maxLength);
    }
    setCount(e.target.value.length);
  };
  return (
    <div css={containerStyle}>
      {label && <Label id={label}>{label}</Label>}
      <div css={contentStyle(filled)}>
        {LeftIcon}
        <input ref={ref} onChange={onChange} css={inputStyle} {...props} />
        {maxLength && (
          <span css={{ ...theme.text.body06, color: theme.colors.gray_500 }}>
            {count}/{maxLength}
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
