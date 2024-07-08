import type { Meta, StoryObj } from '@storybook/react';

import { useEffect, useRef } from 'react';

import Input from '@/common/component/Input/Input';

const meta = {
  title: 'Common/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: {
    type: 'text',
    placeholder: 'placeholder',
    label: 'label',
    variant: 'underline',
    size: 'medium',
    isError: false,
    isNotice: false,
    supportingText: '',
  },
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);

    return <Input ref={inputRef} {...args} />;
  },
};
