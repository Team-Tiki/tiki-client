import { ComponentPropsWithRef, ForwardedRef, ReactElement, forwardRef } from 'react';

import { Dropdown } from '@/common/component/Dropdown';
import { itemStyle, overlayStyle } from '@/common/component/Select/Select.style';

import { filterItemStyle } from '@/page/archiving/index/component/DocumentFilter/DocumentFilter.style';

interface FilterProps extends Omit<ComponentPropsWithRef<'div'>, 'onSelect'> {
  isOpen?: boolean;
  trigger: ReactElement;
  label?: string;
  onSelect?: (id: string) => void;
  options: {
    text: string;
    logo: ReactElement;
  }[];
}

const Filter = (
  { isOpen, trigger, label, onSelect, options, ...props }: FilterProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <Dropdown ref={ref} role="listbox" label={label} {...props}>
      <Dropdown.Trigger as={trigger} />
      <Dropdown.List css={overlayStyle} isOpen={isOpen}>
        {options.map((item) => (
          <Dropdown.Item key={item.text} css={[itemStyle, filterItemStyle]} onSelect={() => onSelect?.(item.text)}>
            {item.text}
            {item.logo}
          </Dropdown.Item>
        ))}
      </Dropdown.List>
    </Dropdown>
  );
};

export default forwardRef(Filter);
