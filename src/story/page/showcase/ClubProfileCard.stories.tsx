import ClubProfileCard from '@/page/showcase/component/ClubProfileCard/ClubProfileCard';
import type { Meta, StoryObj } from '@storybook/react';
import Image from 'public/check.svg?react';

const meta = {
  title: 'Page/ClubProfileCard',
  component: ClubProfileCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'titletitle',
    detail: 'detaildetail',
    Image: Image,
  },
  argTypes: {},
} satisfies Meta<typeof ClubProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
