import type { Meta, StoryObj } from '@storybook/react';
import { IcGrid, IcList } from '@tiki/icon';
import { Switch } from '@tiki/ui';

import { useState } from 'react';

const meta = {
  title: 'Common/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: { type: 'radio', options: ['left', 'right'] },
    },
  },
  args: {
    status: 'left',
    onSwitchChange: () => {},
    LeftIcon: { Icon: IcList, mode: 'stroke' },
    RightIcon: { Icon: IcGrid, mode: 'fill' },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [status, setStatus] = useState<'left' | 'right'>('left');

    return (
      <Switch
        {...args}
        status={status}
        onSwitchChange={() => setStatus((prev) => (prev === 'left' ? 'right' : 'left'))}
      />
    );
  },
};
