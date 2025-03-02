import type { Meta, StoryObj } from '@storybook/react';

import FileListItem from '@/page/drive/component/FileListItem/FileListItem';

const meta = {
  title: 'Page/Drive/FileListItem',
  component: FileListItem,
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
    documentId: 1,
    name: '폴더 이름',
    capacity: 3000,
    createdTime: '2024년 9월 30일 오전 10:13',
    url: '',
    type: 'png',
  },
} satisfies Meta<typeof FileListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
