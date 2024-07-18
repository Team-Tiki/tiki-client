import { ComponentPropsWithRef } from 'react';

import { Dropdown } from '@/common/component/Dropdown';

interface SettingProps extends Omit<ComponentPropsWithRef<'div'>, 'onSelect'> {
  isOpen?: boolean;
  trigger: JSX.Element;
  label?: string;
  onSelect?: (id: string) => void;
  options: string[];
}

const Setting = ({}: SettingProps) => {
  return (
    <Dropdown>
      <Dropdown.Trigger as={trigger} />
      <Dropdown.List>
        <Dropdown.Item>dd</Dropdown.Item>
        <Dropdown.Item>d000000d</Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  );
};

export default Setting;
