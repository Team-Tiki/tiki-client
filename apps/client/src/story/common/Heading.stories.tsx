import type { Meta, StoryObj } from '@storybook/react';

import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';

const meta = {
  title: 'Common/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    tag: {
      control: 'radio',
    },
  },
  args: {
    tag: 'H3',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => (
    <Flex tag="ul" styles={{ direction: 'column', gap: '1rem' }}>
      <li>
        <Heading tag="H1">Heading 1</Heading>
      </li>
      <li>
        <Heading tag="H2">Heading 2</Heading>
      </li>
      <li>
        <Heading tag="H3">Heading 3</Heading>
      </li>
      <li>
        <Heading tag="H4">Heading 4</Heading>
      </li>
      <li>
        <Heading tag="H5">Heading 5</Heading>
      </li>
      <li>
        <Heading tag="H6">Heading 6</Heading>
      </li>
    </Flex>
  ),

  argTypes: {
    tag: {
      control: false,
    },
  },
};
