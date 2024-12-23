import { Meta, StoryObj } from '@storybook/react';

import FileGrid from '@/shared/component/FileGrid/FileGrid';

const meta: Meta<typeof FileGrid> = {
  title: 'Shared/FileGrid',
  component: FileGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div css={{ width: '20rem' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    capacity: 2000,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PDF: Story = {
  args: {
    name: '최주용',
    type: 'pdf',
  },
};

export const Word: Story = {
  args: {
    name: '김규홍',
    type: 'doc',
    capacity: 30000,
  },
};

export const Image: Story = {
  args: {
    name: '이채원',
    type: 'pdf',
  },
};

export const Secondary: Story = {
  decorators: [
    (Story) => (
      <div css={{ width: '16rem' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    variant: 'secondary',
    name: '이채원',
    type: 'pdf',
  },
};
