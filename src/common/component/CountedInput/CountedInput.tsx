import { ChangeEvent, ForwardedRef, InputHTMLAttributes, forwardRef, useState } from 'react';

import {
  containerStyle,
  countTextStyle,
  inputStyle,
  inputWrapperStyle,
} from '@/common/component/CountedInput/CountedInput.style';
import Label from '@/common/component/Label/Label';
import SupportingText from '@/common/component/SupportingText/SupportingText';

export interface CountedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  maxLength: number;
  isError?: boolean;
  isSuccess?: boolean;
  supportingText?: string;
}

/** 비제어 컴포넌트로 활용, 폼 제출 시 ref.current 값으로 전달 */
const CountedInput = (
  { label, maxLength, isError = false, isSuccess = false, supportingText, ...props }: CountedInputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [count, setCount] = useState(0);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (count === maxLength) {
      e.target.value = e.target.value.substring(0, maxLength);
    }
    setCount(e.target.value.length);
  };

  return (
    <div css={containerStyle}>
      {label && <Label id={label}>{label}</Label>}
      <div css={inputWrapperStyle}>
        <input ref={ref} css={inputStyle} onChange={onChange} {...props} />
        <span css={countTextStyle}>{`${count}/${maxLength}`}</span>
      </div>
      {supportingText && (
        <SupportingText isError={isError} isSuccess={isSuccess}>
          {supportingText}
        </SupportingText>
      )}
    </div>
  );
};

export default forwardRef(CountedInput);
