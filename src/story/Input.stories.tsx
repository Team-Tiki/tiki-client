import type { Meta, StoryObj } from '@storybook/react';

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
    width: 20,
    label: 'label',
    variant: 'underline',
  },
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
