import ShowcasePage from '@/page/showcase/ShowcasePage';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'page/showcase/ShowcasePage',
  component: ShowcasePage,
  parameters: {},
} satisfies Meta<typeof ShowcasePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
