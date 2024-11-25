import type { Meta, StoryObj } from '@storybook/react';

import Flex from '@/common/component/Flex/Flex';
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

export const Sizes: Story = {
  render: () => (
    <Flex styles={{ direction: 'column', gap: '1rem' }}>
      <li>
        <Text tag="body1">Body 1 (2.4rem, 2.4rem)</Text>
      </li>
      <li>
        <Text tag="body2">Body 2 (2.4rem, 3.36rem)</Text>
      </li>
      <li>
        <Text tag="body3">Body 3 (2rem, 2rem)</Text>
      </li>
      <li>
        <Text tag="body4">Body 4 (1.6rem, 1.6rem)</Text>
      </li>
      <li>
        <Text tag="body5">Body 5 (1.6rem, 2.24rem)</Text>
      </li>
      <li>
        <Text tag="body6">Body 6 (1.4rem, 1.4rem)</Text>
      </li>
      <li>
        <Text tag="body7">Body 7 (1.4rem, 1.68rem)</Text>
      </li>
      <li>
        <Text tag="body8">Body 8 (1.2rem, 1.2rem)</Text>
      </li>
    </Flex>
  ),
};
