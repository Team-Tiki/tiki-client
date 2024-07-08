import type { Meta, StoryObj } from '@storybook/react';

import Text from '@/common/component/Text/Text';

const meta = {
  title: 'Common/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Text',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    tag: {
      control: {
        type: 'radio',
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tag: 'body1',
  },
};
