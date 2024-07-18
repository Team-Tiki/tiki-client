import type { Meta, StoryObj } from '@storybook/react';

import WorkSpaceImage from '@/shared/component/createWorkSpace/image/WorkSpaceImage';

const meta = {
  title: 'page/Modal/WorkSpaceImage',
  component: WorkSpaceImage,

  args: {
    onNext: () => {},
    onFileUrlData: (file: string) => {
      file;
    },
  },
  argTypes: {},
} satisfies Meta<typeof WorkSpaceImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Image: Story = {};
