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
    volume: 2000,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PDF: Story = {
  args: {
    title: '최주용',
    type: 'pdf',
  },
};

export const Word: Story = {
  args: {
    title: '김규홍',
    type: 'word',
    volume: 30000,
  },
};

export const Image: Story = {
  args: {
    title: '이채원',
    type: 'image',
  },
};
