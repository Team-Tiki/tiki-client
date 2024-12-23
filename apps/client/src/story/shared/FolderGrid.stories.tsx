import { Meta, StoryObj } from '@storybook/react';

import FolderGrid from '@/shared/component/FileGrid/FolderGrid';

const meta: Meta<typeof FolderGrid> = {
  title: 'Shared/FolderGrid',
  component: FolderGrid,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div css={{ width: '20rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: '폴더 이름',
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
    name: '폴더 이름',
  },
};
