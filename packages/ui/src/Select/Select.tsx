import {
  ComponentPropsWithRef,
  ForwardedRef,
  ReactNode,
  forwardRef,
  useState,
} from 'react';

import { DropdownItem, DropdownList, DropdownRoot } from '@/Dropdown';
import {
  iconStyle,
  itemStyle,
  overlayStyle,
  profileStyle,
  textFieldStyle,
  triggerStyle,
} from '@/Select/Select.style';
import { scrollStyle } from '@/theme';
import { IcArrowDownGray, IcDown } from '@tiki/icon';

import { hasKeyInObject } from '@tiki/utils';

interface OptionType {
  value: string;
  svg?: ReactNode;
  profileUrl?: string;
  description?: string;
}

export interface SelectProps
  extends Omit<ComponentPropsWithRef<'div'>, 'onSelect'> {
  variant?:
    | 'default'
    | 'user'
    | 'option'
    | 'outline'
    | 'underline'
    | 'disabled';
  isOpen?: boolean;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  onTrigger?: () => void;
  onSelect?: (value: string) => void;
  options: OptionType[];
}

const Select = (
  {
    variant = 'default',
    isOpen = false,
    defaultValue,
    placeholder,
    label,
    onTrigger,
    onSelect,
    options,
    ...props
  }: SelectProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const [selectedText, setSelectedText] = useState(defaultValue || placeholder);

  const isSelected = selectedText !== placeholder;

  return (
    <DropdownRoot
      css={{ width: '100%' }}
      ref={ref}
      role="listbox"
      label={label}
      {...props}
    >
      <button
        onClick={onTrigger}
        css={triggerStyle(variant, isSelected)}
        disabled={variant === 'disabled' ? true : false}
      >
        <span>{selectedText}</span>
        {variant === 'option' ? (
          <IcDown css={iconStyle(isOpen)} width={12} height={12} />
        ) : (
          <IcArrowDownGray css={iconStyle(isOpen)} width={20} height={20} />
        )}
      </button>

      <DropdownList css={[overlayStyle(isOpen), scrollStyle]} isOpen={isOpen}>
        {options.map((item) => (
          <DropdownItem
            key={item.value}
            css={itemStyle(variant)}
            onSelect={() => {
              onSelect?.(item.value);
              setSelectedText(item.value);
            }}
          >
            {hasKeyInObject(item, 'profileUrl') && (
              <img
                src={item.profileUrl}
                css={profileStyle}
                alt={`${item.value} profile`}
              />
            )}

            <p css={textFieldStyle}>
              {item.value}
              {hasKeyInObject(item, 'description') && (
                <span>{item.description}</span>
              )}
            </p>

            {hasKeyInObject(item, 'svg') && item.svg}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownRoot>
  );
};

export default forwardRef(Select);
