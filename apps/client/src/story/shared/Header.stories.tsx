import { Meta, StoryObj } from '@storybook/react';

import Header from '@/shared/component/Header/Header';

const meta: Meta<typeof Header> = {
  title: 'Shared/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div css={{ width: '50vw' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Delete: Story = {};
