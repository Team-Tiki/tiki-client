import WorkSpaceName from '@/page/modal/component/workspace/name/WorkSpaceName';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'page/Modal/WorkSpace',
  component: WorkSpaceName,

  args: {},
  argTypes: {},
} satisfies Meta<typeof WorkSpaceName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Name: Story = {};
