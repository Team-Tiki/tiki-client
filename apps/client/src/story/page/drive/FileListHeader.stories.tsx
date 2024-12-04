import type { Meta, StoryObj } from '@storybook/react';

import FileListHeader from '@/page/drive/component/FileListHeader/FileListHeader';

const meta = {
  title: 'Page/Drive/FileListHeader',
  component: FileListHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div css={{ width: '80vw' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    onSelectAll: () => {},
  },
} satisfies Meta<typeof FileListHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
