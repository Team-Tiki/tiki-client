import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import { Dropdown } from '@/common/component/Dropdown';
import { itemStyle, overlayStyle } from '@/common/component/Select/Select.style';

interface SelectProps extends Omit<ComponentPropsWithRef<'select'>, 'onSelect'> {
  isOpen?: boolean;
  trigger: JSX.Element;
  label?: string;
  onSelect?: (id: string) => void;
  options: string[];
}

const Select = ({ isOpen, trigger, label, onSelect, options }: SelectProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <Dropdown ref={ref} role="listbox" label={label}>
      <Dropdown.Trigger as={trigger} />
      <Dropdown.List css={overlayStyle} isOpen={isOpen}>
        {options.map((item) => (
          <Dropdown.Item css={itemStyle} onSelect={() => onSelect?.(item)}>
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.List>
    </Dropdown>
  );
};

export default forwardRef(Select);
