import DocumentBarTab from '@/page/archiving/component/DocumentBar/DocumentBarTab/DocumentBarTab';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Page/Archiving/DocumentBar/DocumentBarTab',
  component: DocumentBarTab,
  parameters: {
    layout: 'centered',
  },
  args: {
    wholeDocument: false,
    handleTabClick: () => {},
  },
  argTypes: {},
} satisfies Meta<typeof DocumentBarTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
