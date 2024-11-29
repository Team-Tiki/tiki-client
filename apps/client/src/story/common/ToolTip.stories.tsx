import type { Meta, StoryObj } from '@storybook/react';
import { Flex, ToolTip } from '@tiki/ui';

import { theme } from '@/common/style/theme/theme';

const meta = {
  title: 'Common/ToolTip',
  component: ToolTip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'radio' },
      options: ['top', 'bottom', 'left', 'right'],
    },
    message: {
      control: { type: 'text' },
    },
  },
  args: {
    position: 'top',
    message: 'ToolTip',
    gap: 0.8,
  },
} satisfies Meta<typeof ToolTip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultToolTip: Story = {
  args: {
    children: (
      <Flex
        style={{
          width: '36px',
          height: '36px',
          backgroundColor: theme.colors.purple_200,
        }}
        styles={{ justify: 'center', align: 'center' }}>
        호버
      </Flex>
    ),
  },
};
