import { InputHTMLAttributes } from 'react';

import { inputContainerStyle, inputStyle } from '@/common/component/Input/Input.style';
import { InputSize } from '@/common/type/design';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: 'underline' | 'outline'; //style
  inputSize: InputSize;
  label?: string;
  isError?: boolean;
}

const Input = ({ placeholder, type, variant, inputSize, label, isError }: InputProps) => {
  return (
    <div css={inputContainerStyle}>
      {label && <p>{label}</p>}
      <input type={type} placeholder={placeholder} css={inputStyle(variant)} />
    </div>
  );
};

export default Input;
//css에 varient를 인자로 넘겨주고 나누기
