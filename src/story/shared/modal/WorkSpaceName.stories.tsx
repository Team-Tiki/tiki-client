import type { Meta, StoryObj } from '@storybook/react';

import WorkSpaceName from '@/shared/component/createWorkSpace/name/WorkSpaceName';

const meta = {
  title: 'page/Modal/WorkSpaceName',
  component: WorkSpaceName,

  args: {
    onNext: () => {},
    setName: (name: string) => {
      name;
    },
  },
  argTypes: {},
} satisfies Meta<typeof WorkSpaceName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Name: Story = {};
