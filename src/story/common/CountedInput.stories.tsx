import type { Meta, StoryObj } from '@storybook/react';

import { useRef } from 'react';

import CountedInput from '@/common/component/CountedInput/CountedInput';

const meta = {
  title: 'Common/CountedInput',
  component: CountedInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CountedInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxLength: 20,
    label: '카운트 인풋',
  },
  render: (args) => {
    const ref = useRef<HTMLInputElement | null>(null);

    const _onSubmit = () => {
      if (!ref.current) return;

      ref.current.value;
    };

    return (
      <form onSubmit={_onSubmit}>
        <CountedInput {...args} ref={ref} />
      </form>
    );
  },
};
