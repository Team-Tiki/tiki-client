import { filterItemStyle } from '@/page/archiving/component/DocumentFilter/Filter.style';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import { Dropdown } from '@/common/component/Dropdown';
import { itemStyle, overlayStyle } from '@/common/component/Select/Select.style';

interface FilterProps extends Omit<ComponentPropsWithRef<'div'>, 'onSelect'> {
  isOpen?: boolean;
  trigger: JSX.Element;
  label?: string;
  onSelect?: (id: string) => void;
  options: {
    text: string;
    logo: EmotionJSX.Element;
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
