import { ComponentPropsWithRef, ForwardedRef, forwardRef, useState } from 'react';

import IcArrowPrimary from '@/common/asset/svg/ic_arrow_down_gray.svg?react';
import IcArrowSecondary from '@/common/asset/svg/ic_down.svg?react';
import { Dropdown } from '@/common/component/Dropdown';
import { iconStyle, itemStyle, overlayStyle, scrollStyle, triggerStyle } from '@/common/component/Select/Select.style';

export interface SelectProps extends Omit<ComponentPropsWithRef<'div'>, 'onSelect'> {
  variant?: 'primary' | 'secondary' | 'outline';
  isOpen?: boolean;
  label?: string;
  placeholder?: string;
  onTrigger?: () => void;
  onSelect?: (id: string) => void;
  options: SVGOption[] | string[];
}

type SVGOption = {
  text: string;
  logo: JSX.Element;
};

const ICON_BY_VARIANT = (isOpen: boolean) => ({
  primary: <IcArrowPrimary css={iconStyle(isOpen)} width={20} height={20} />,
  secondary: <IcArrowSecondary css={iconStyle(isOpen)} width={12} height={12} />,
  outline: <IcArrowPrimary css={iconStyle(isOpen)} width={20} height={20} />,
});

const Select = (
  { variant = 'primary', isOpen = false, placeholder, label, onTrigger, onSelect, options, ...props }: SelectProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const [selectedText, setSelectedText] = useState(placeholder);

  const isSelected = selectedText !== placeholder;

  return (
    <Dropdown ref={ref} role="listbox" label={label} {...props}>
      <button onClick={onTrigger} css={triggerStyle(variant, isSelected)}>
        {selectedText || placeholder}
        {ICON_BY_VARIANT(isOpen)[variant]}
      </button>
      <Dropdown.List css={[overlayStyle(isOpen), scrollStyle]} isOpen={isOpen}>
        {options.map((item) =>
          typeof item == 'string' ? (
            <Dropdown.Item
              key={item}
              css={itemStyle(variant)}
              onSelect={() => {
                onSelect?.(item);
                setSelectedText(item);
              }}>
              {item}
            </Dropdown.Item>
          ) : (
            <Dropdown.Item
              key={item.text}
              css={itemStyle(variant)}
              onSelect={() => {
                onSelect?.(item.text);
                setSelectedText(item.text);
              }}>
              {item.text}
              {item.logo}
            </Dropdown.Item>
          )
        )}
      </Dropdown.List>
    </Dropdown>
  );
};

export default forwardRef(Select);
