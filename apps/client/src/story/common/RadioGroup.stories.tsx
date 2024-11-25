import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import RadioGroup from '@/common/component/RadioButton/RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Common/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div css={{ width: '24rem' }}>
        <Story />
      </div>
    ),
  ],
  render: () => {
    const [status, setStatus] = useState('작성 완료');

    const handleChangeStatus = (value: string) => {
      setStatus(value);
    };

    return (
      <div css={{ display: 'flex', gap: '0.4rem' }}>
        <RadioGroup
          options={[
            {
              label: '작성 완료',
              value: '작성 완료',
              name: 'note',
            },
            {
              label: '작성 미완료',
              value: '작성 미완료',
              name: 'note',
            },
          ]}
          onChange={(e) => handleChangeStatus(e.target.value)}
          value={status}
        />
      </div>
    );
  },
};
