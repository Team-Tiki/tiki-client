import InfoFormPage from '@/page/signUp/info/InfoFormPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'page/signIn/InfoFormPage',
  component: InfoFormPage,
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof InfoFormPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
