import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@tiki/ui';

const meta = {
  title: 'Common/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    tag: 'div',
  },
} satisfies Meta<typeof Flex>;
type Story = StoryObj<typeof meta>;

export default meta;

export const FlexRow: Story = {
  render: () => (
    <Flex styles={{ gap: '2.4rem' }}>
      <div css={{ width: '20rem', height: '20rem', backgroundColor: 'red' }}>1</div>
      <div css={{ width: '20rem', height: '20rem', backgroundColor: 'black' }}>2</div>
      <div css={{ width: '20rem', height: '20rem', backgroundColor: 'blue' }}>3</div>
    </Flex>
  ),
};

export const FlexColumn: Story = {
  render: () => (
    <Flex styles={{ direction: 'column', gap: '2.4rem' }}>
      <div css={{ width: '20rem', height: '20rem', backgroundColor: 'red' }}>1</div>
      <div css={{ width: '20rem', height: '20rem', backgroundColor: 'black' }}>2</div>
      <div css={{ width: '20rem', height: '20rem', backgroundColor: 'blue' }}>3</div>
    </Flex>
  ),
};
