import type { Meta, StoryObj } from '@storybook/react';

import CategoryChip from '@/page/showcase/index/component/CategoryChip/CategoryChip';

const meta = {
  title: 'page/showcase/CategoryChip',
  component: CategoryChip,

  args: { children: '어학' },
  argTypes: {},
} satisfies Meta<typeof CategoryChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
