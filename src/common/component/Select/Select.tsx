import { ComponentPropsWithRef, ForwardedRef, ReactNode, forwardRef, useState } from 'react';

import IcArrowDefault from '@/common/asset/svg/ic_arrow_down_gray.svg?react';
import IcArrowOption from '@/common/asset/svg/ic_down.svg?react';
import { Dropdown } from '@/common/component/Dropdown';
import {
  iconStyle,
  itemStyle,
  overlayStyle,
  profileStyle,
  textFieldStyle,
  triggerStyle,
} from '@/common/component/Select/Select.style';
import { scrollStyle } from '@/common/style/scroll';

import { hasKeyInObject } from '@/shared/util/typeGuard';

interface OptionType {
  value: string;
  svg?: ReactNode;
  profileUrl?: string;
  description?: string;
}

export interface SelectProps extends Omit<ComponentPropsWithRef<'div'>, 'onSelect'> {
  variant?: 'default' | 'user' | 'option' | 'outline' | 'underline';
  isOpen?: boolean;
  label?: string;
  placeholder?: string;
  onTrigger?: () => void;
  onSelect?: (value: string) => void;
  options: OptionType[];
}

const Select = (
  { variant = 'default', isOpen = false, placeholder, label, onTrigger, onSelect, options, ...props }: SelectProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const [selectedText, setSelectedText] = useState(placeholder);

  const isSelected = selectedText !== placeholder;

  return (
    <Dropdown css={{ width: '100%' }} ref={ref} role="listbox" label={label} {...props}>
      <button onClick={onTrigger} css={triggerStyle(variant, isSelected)}>
        {selectedText || placeholder}
        {variant === 'option' ? (
          <IcArrowOption css={iconStyle(isOpen)} width={12} height={12} />
        ) : (
          <IcArrowDefault css={iconStyle(isOpen)} width={20} height={20} />
        )}
      </button>

      <Dropdown.List css={[overlayStyle(isOpen), scrollStyle]} isOpen={isOpen}>
        {options.map((item) => (
          <Dropdown.Item
            key={item.value}
            css={itemStyle(variant)}
            onSelect={() => {
              onSelect?.(item.value);
              setSelectedText(item.value);
            }}>
            {hasKeyInObject(item, 'profileUrl') && (
              <img src={item.profileUrl} css={profileStyle} alt={`${item.value} profile`} />
            )}

            <p css={textFieldStyle}>
              {item.value}
              {hasKeyInObject(item, 'description') && <span>{item.description}</span>}
            </p>

            {hasKeyInObject(item, 'svg') && item.svg}
          </Dropdown.Item>
        ))}
      </Dropdown.List>
    </Dropdown>
  );
};

export default forwardRef(Select);
