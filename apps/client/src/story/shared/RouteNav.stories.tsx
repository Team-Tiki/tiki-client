import { Meta, StoryObj } from '@storybook/react';

import RouteNav from '@/shared/component/RouteNav/RouteNav';

const meta: Meta<typeof RouteNav> = {
  title: 'Shared/RouteNav',
  component: RouteNav,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
