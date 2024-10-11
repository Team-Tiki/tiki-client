import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import { Dropdown } from '@/common/component/Dropdown';
import { itemStyle, overlayStyle } from '@/common/component/Select/Select.style';
import { scrollStyle } from '@/common/style/theme/scroll';

interface SelectProps extends Omit<ComponentPropsWithRef<'div'>, 'onSelect'> {
  isOpen?: boolean;
  trigger: JSX.Element;
  label?: string;
  onSelect?: (id: string) => void;
  options: SVGOption[] | string[];
}

type SVGOption = {
  text: string;
  logo: JSX.Element;
};

const Select = (
  { isOpen, trigger, label, onSelect, options, ...props }: SelectProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <Dropdown ref={ref} role="listbox" label={label} {...props}>
      <Dropdown.Trigger as={trigger} />
      <Dropdown.List css={[overlayStyle, scrollStyle]} isOpen={isOpen}>
        {options.map((item) =>
          typeof item == 'string' ? (
            <Dropdown.Item key={item} css={itemStyle} onSelect={() => onSelect?.(item)}>
              {item}
            </Dropdown.Item>
          ) : (
            <Dropdown.Item key={item.text} css={itemStyle} onSelect={() => onSelect?.(item.text)}>
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
