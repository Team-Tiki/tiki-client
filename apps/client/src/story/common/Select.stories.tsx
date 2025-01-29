import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@tiki/ui';

import { useState } from 'react';

const meta = {
  title: 'Common/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  args: {
    options: [{ value: 'option 1' }, { value: 'option 2' }, { value: '최주용 남다은 이채원 김규홍 정보운' }],
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div css={{ width: '24rem' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const [selected, setSelected] = useState('');

    const handleSelect = (id: string) => {
      setSelected(id);
    };

    return (
      <Select
        aria-label={`선택된 아이템: ${selected}`}
        variant="default"
        {...args}
        placeholder="Primary Select"
        onSelect={handleSelect}
      />
    );
  },
};

export const UserList: Story = {
  decorators: [
    (Story) => (
      <div css={{ width: '24rem' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const [selected, setSelected] = useState('');

    const handleSelect = (id: string) => {
      setSelected(id);
    };

    const options = [
      {
        value: 'Option 1',
        description: 'WEB',
        profileUrl:
          'https://images.unsplash.com/photo-1728585255223-c158ab095e1f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
      },
      {
        value: 'Option 2',
        description: 'SERVER',
        profileUrl:
          'https://images.unsplash.com/photo-1728585255223-c158ab095e1f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
      },
    ];

    return (
      <Select
        aria-label={`선택된 아이템: ${selected}`}
        label="아웃라인 셀렉트"
        variant="user"
        {...args}
        placeholder="Outline Select"
        onSelect={handleSelect}
        options={options}
      />
    );
  },
};

export const Outline: Story = {
  render: (args) => {
    const [selected, setSelected] = useState('');

    const handleSelect = (id: string) => {
      setSelected(id);
    };

    return (
      <Select
        aria-label={`선택된 아이템: ${selected}`}
        variant="outline"
        {...args}
        placeholder="Scroll Select"
        onSelect={handleSelect}
      />
    );
  },
};

export const ScrollOption: Story = {
  decorators: [
    (Story) => (
      <div css={{ width: '24rem' }}>
        <Story />
      </div>
    ),
  ],
  render: () => {
    const [selected, setSelected] = useState('');

    const handleSelect = (id: string) => {
      setSelected(id);
    };

    const options = [
      { value: 'Option 1' },
      { value: 'Option 2' },
      { value: 'Option 3' },
      { value: 'Option 4' },
      { value: 'Option 5' },
      { value: 'Option 6' },
      { value: 'Option 7' },
      { value: 'Option 8' },
      { value: 'Option 9' },
    ];

    return (
      <Select
        aria-label={`선택된 아이템: ${selected}`}
        variant="outline"
        options={options}
        placeholder="최근 업로드 순"
        onSelect={handleSelect}
      />
    );
  },
};

export const OptionList: Story = {
  decorators: [
    (Story) => (
      <div css={{ width: '12rem' }}>
        <Story />
      </div>
    ),
  ],
  render: () => {
    const [selected, setSelected] = useState('');

    const handleSelect = (id: string) => {
      setSelected(id);
    };

    const options = [{ value: '최근 정렬 순' }, { value: '과거 정렬 순대를 먹을래 말래' }];

    return (
      <Select
        aria-label={`선택된 아이템: ${selected}`}
        variant="option"
        options={options}
        placeholder="최근 업로드 순"
        onSelect={handleSelect}
      />
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [selected, setSelected] = useState('');

    const handleSelect = (id: string) => {
      setSelected(id);
    };

    return (
      <Select
        aria-label={`선택된 아이템: ${selected}`}
        variant="disabled"
        {...args}
        placeholder="Scroll Select"
        onSelect={handleSelect}
      />
    );
  },
};
