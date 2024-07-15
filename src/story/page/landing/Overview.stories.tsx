import Overview from '@/page/landing/component/Overview/Overview';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'page/Landing/Overview',
  component: Overview,

  argTypes: {},
} satisfies Meta<typeof Overview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
