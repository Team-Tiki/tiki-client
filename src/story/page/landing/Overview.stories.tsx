import type { Meta, StoryObj } from '@storybook/react';

import Overview from '@/page/landing/component/Overview/Overview';

const meta = {
  title: 'page/Landing/Overview',
  component: Overview,

  argTypes: {},
} satisfies Meta<typeof Overview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
